import mongoose from "mongoose";

// Define schema for form data
const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  cvFile: String, // Assuming cvFile is the file path or URL
  audioFile: String, // Assuming audioFile is the file path or URL
});

// Create model based on schema
const FormData = mongoose.model("FormData", formDataSchema);

export default FormData;
