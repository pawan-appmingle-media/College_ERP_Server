import express from "express";
import CourseController from "../../controllers/courseController.js";
import upload from "../../middleware/upload.js"; // Middleware for file uploads

const router = express.Router();

router.post("/", upload.single("departmentImage"), CourseController.addCourse);
router.get("/", CourseController.getAllCourses);
router.get("/:id", CourseController.getCourseById);
router.put(
  "/:id",
  upload.single("departmentImage"),
  CourseController.updateCourse
);
router.delete("/:id", CourseController.deleteCourse);

export default router;
