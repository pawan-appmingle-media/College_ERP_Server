import express from "express";
import departmentController from "../../controllers/departmentController.js"; // Ensure the correct path
import upload from "../../middleware/upload.js";

const router = express.Router();

// Routes for Department Management
router.post(
  "/",
  upload.single("image"), // Middleware to handle file upload
  departmentController.addDepartment // Controller method to add a department
);
router.get("/", departmentController.getAllDepartments);
router.get("/:id", departmentController.getDepartmentById);
router.put(
  "/:id",
  upload.single("image"), // Middleware for handling updated image upload
  departmentController.updateDepartment
);
router.delete("/:id", departmentController.deleteDepartment);

export default router;
