
import { asyncHandler } from '../utils/asynchandler.js';
import { Prescription } from '../models/Prescription.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';

const createPrescription = asyncHandler(async (req, res) => {
  const { diseaseName, date, medication, dosage, instructions } = req.body;

  // Validate required fields
  if (
    [diseaseName, date, medication, dosage].some((field) => field?.trim() === '')
  ) {
    return res.status(400).json({ message: 'All required fields must be filled' });
  }

  // Upload file to Cloudinary
 


  // Save prescription
  const prescription = await Prescription.create({
    diseaseName,
    date,
    medication,
    dosage,
    instructions,
   
  // assumes user is added via auth middleware
  });

  res.status(201).json({
    message: 'Prescription saved successfully',
    prescription,
  });
});

export { createPrescription };
