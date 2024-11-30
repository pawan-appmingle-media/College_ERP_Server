import multer from "multer";
import path from "path";

// Configure Multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Set upload directory
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Save file with unique name
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const isValid = allowedTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimeTypeValid = allowedTypes.test(file.mimetype);
    if (isValid && mimeTypeValid) {
      return cb(null, true);
    }
    cb(new Error("Invalid file type. Only JPEG, PNG, and GIF are allowed."));
  },
});

export default upload;
