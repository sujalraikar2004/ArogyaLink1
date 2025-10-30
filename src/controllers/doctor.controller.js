import { asyncHandler } from "../utils/asynchandler.js";
import { Doctor } from "../models/doctor.model.js";
import mongoose from "mongoose";

const generateTokensForDoctor = async (doctorId) => {
  try {
    const doctor = await Doctor.findById(doctorId);
    const accessToken = doctor.generateAccessToken();
    const refreshToken = doctor.generateRefreshToken();

    doctor.refreshToken = refreshToken;
    await doctor.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    console.error("Error generating tokens:", error);
    throw new Error("Failed to generate tokens");
  }
};

/// Register Doctor
const registerDoctor = asyncHandler(async (req, res) => {
    const {
      fullname,
      username,
      email,
      password,
      gender,
      specialization,
      experience,
      hospitalName,
      licensePlate,
      // mobileNumber
    } = req.body;
  
    // ✅ 1. Basic validation
    if (
      [fullname, username, email, password, gender, specialization, experience, hospitalName, licensePlate ]
        .some((field) => !field || field.trim() === "")
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
  
    // ✅ 2. Check if doctor already exists
    const existingDoctor = await Doctor.findOne({
      $or: [{ email }, { username }],
    });
  
    if (existingDoctor) {
      return res
          .status(400)
          .json({ message: "Email or Username already exists" });
    }
  
    // ✅ 3. Access centraldoctordata collection
    const centralDoctorCollection = mongoose.connection.collection("centraldoctordeta");
    
  
    const centralData = await centralDoctorCollection.findOne({ licenseid: licensePlate });
    console.log(centralData);
  
    if (!centralData) {
      return res.status(400).json({
        status: "error",
        message: "License plate not found in official database",
      });
    }
  
    // ✅ 4. Compare fields from central data
    const matches =
      centralData.name.toLowerCase() === fullname.toLowerCase() &&
        centralData.specialization.toLowerCase() === specialization.toLowerCase() &&
      centralData.licenseid.toLowerCase() === licensePlate.toLowerCase();
  
    if (!matches) {
      return res.status(403).json({
        status: "fraud",
        message: "Doctor information does not match official license record",
      });
    }
  
    // ✅ 5. All good, proceed with registration
    const newDoctor = await Doctor.create({
      fullname,
      username,
      email,
      password,
      gender,
      specialization,
      experience,
      hospitalName, 
      licensePlate,
      // mobileNumber, // Save license in Doctor model too
    });
  
    const createdDoctor = await Doctor.findById(newDoctor._id).select(
      "-password -refreshToken"
    );
  
    return res.status(201).json({
      status: "201",
      message: "Doctor registered successfully",
      data: createdDoctor,
    });
  });
  
// Login Doctor
const loginDoctor = asyncHandler(async (req, res) => {
  const { email, username, password } = req.body;

  if (!(email || username)) {
    return res
        .status(400)
      .json({ message: "Please provide email or username" });
  }

  const doctor = await Doctor.findOne({
    $or: [{ email }, { username }],
  });

  if (!doctor) {
    return res.status(404).json({ message: "Doctor not found" });
  }

  const isPasswordValid = await doctor.isPasswordCorrect(password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const { accessToken, refreshToken } = await generateTokensForDoctor(
    doctor._id
  );

  const loggedInDoctor = await Doctor.findById(doctor._id).select(
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
      message: "Doctor logged in successfully",
      data: loggedInDoctor,
    });
});

// Logout Doctor
const logoutDoctor = asyncHandler(async (req, res) => {
  await Doctor.findByIdAndUpdate(
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
      message: "Doctor logged out successfully",
    });
});

export { registerDoctor, loginDoctor, logoutDoctor };
