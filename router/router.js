import express from "express";
import adminController from "../controller/adminController.js"; // Ensure the correct path
import upload from "../middleware/upload.js";

const router = express.Router();

// Routes for Department Management
router.post(
  "/department",
  upload.single("image"), // Middleware to handle file upload
  adminController.addDepartment // Controller method to add a department
);
router.get("/department", adminController.getAllDepartments);
router.get("/department/:id", adminController.getDepartmentById);
router.put(
  "/department/:id",
  upload.single("image"), // Middleware for handling updated image upload
  adminController.updateDepartment
);
router.delete("/department/:id", adminController.deleteDepartment);

export default router;
