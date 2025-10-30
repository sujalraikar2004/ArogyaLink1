import { asyncHandler } from "../utils/asynchandler.js";
import { Patient } from "../models/patent.model.js";


const generateTokensForPatient = async (patientId) => {
  try {
    const patient = await Patient.findById(patientId);
    const accessToken = patient.generateAccessToken();
    const refreshToken = patient.generateRefreshToken();

    patient.refreshToken = refreshToken;
    await patient.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new Error("Error generating tokens");
  }
};


const registerPatient = asyncHandler(async (req, res) => {
  const {
    fullname,
    username,
    email,
    password,
    gender,
    dateOfBirth,
    phoneNumber,
  } = req.body;

  // Validate required fields
  if (
    [fullname, username, email, password, gender, dateOfBirth, phoneNumber].some(
      (field) => !field || field.trim() === ""
    )
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check existing patient
  const existingPatient = await Patient.findOne({
    $or: [{ email }, { username }],
  });

  if (existingPatient) {
    return res
      .status(400)
      .json({ message: "Email or Username already exists" });
  }

  const newPatient = await Patient.create({
    fullname,
    username,
    email,
    password,
    gender,
    dateOfBirth,
    phoneNumber,
  });

  const createdPatient = await Patient.findById(newPatient._id).select(
    "-password -refreshToken"
  );

  return res.status(201).json({
    status: "201",
    message: "Patient registered successfully",
    data: createdPatient,
  });
});


const loginPatient = asyncHandler(async (req, res) => {
  const { email, username, password } = req.body;

  if (!(email || username)) {
    return res
      .status(400)
      .json({ message: "Please provide email or username" });
  }

  const patient = await Patient.findOne({
    $or: [{ email }, { username }],
  });

  if (!patient) {
    return res.status(404).json({ message: "Patient not found" });
  }

  const isPasswordValid = await patient.isPasswordCorrect(password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const { accessToken, refreshToken } = await generateTokensForPatient(
    patient._id
  );

  const loggedInPatient = await Patient.findById(patient._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json({
      status: "200",
      message: "Patient logged in successfully",
      data: loggedInPatient,
    });
});

// Logout Patient
const logoutPatient = asyncHandler(async (req, res) => {
  await Patient.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    { new: true }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json({
      status: 200,
      message: "Patient logged out successfully",
    });
});

export { registerPatient, loginPatient, logoutPatient };
