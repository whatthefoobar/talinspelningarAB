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

export interface IFormData {
  name: string;
  email: string;
  phone: string;
  cvFile: string;
  audioFile: string;
}

export const connectToDatabase = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected successfully!");
    });
    connection.on("error", (error) => {
      console.log(
        "MongoDB connection error, plase make sure MongoDB is running" + error
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong!");
    console.log(error);
  }
};

// Function to insert form data into MongoDB collection
export const insertFormData = async (formData: IFormData) => {
  try {
    // Create a new document using the FormData model
    const newFormData = new FormData(formData);

    // Save the document to the database
    await newFormData.save();
    console.log("Form data inserted successfully!");
  } catch (error) {
    console.error("Error inserting form data:", error);
    throw error; // Throw the error to handle it in the caller function
  }
};
