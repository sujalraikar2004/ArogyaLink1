// models/Prescription.js
import mongoose from 'mongoose';

const prescriptionSchema = new mongoose.Schema({
  diseaseName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  medication: {
    type: String,
    required: true,
  },
  dosage: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
  },



},{timestamps:true});

export const Prescription= mongoose.model('Prescription', prescriptionSchema);
