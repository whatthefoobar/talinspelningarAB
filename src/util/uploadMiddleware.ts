import multer from "multer";

// Set up multer storage configuration
const storage = multer.memoryStorage();

// Set up multer file filter (optional)
const fileFilter: multer.FileFilterCallback = (req, file, cb) => {
  // Customize file filtering logic here if needed
  cb(null, true); // Accept all files for now
};

// Initialize multer instance
const upload = multer({ storage, fileFilter });

export default upload;
