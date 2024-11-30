import CourseModel from "../models/courseModel.js";

class CourseController {
  // Add a new course
  static addCourse = async (req, res) => {
    const { department, courseName, description } = req.body;
    const departmentImage = req.file ? req.file.filename : null;

    try {
      if (!departmentImage) {
        return res.status(400).json({ error: "Department image is required" });
      }

      const newCourse = new CourseModel({
        department,
        courseName,
        departmentImage,
        description,
      });

      const savedCourse = await newCourse.save();
      res.status(200).json({
        message: "Course added successfully!",
        course: savedCourse,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  // Get all courses
  static getAllCourses = async (req, res) => {
    try {
      const courses = await CourseModel.find();
      res.status(200).json(courses);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  // Get a course by ID
  static getCourseById = async (req, res) => {
    const { id } = req.params;

    try {
      const course = await CourseModel.findById(id);
      if (!course) {
        return res.status(404).json({ error: "Course not found" });
      }
      res.status(200).json(course);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  // Update a course
  static updateCourse = async (req, res) => {
    const { id } = req.params;
    const { department, courseName, description } = req.body;
    const departmentImage = req.file ? req.file.filename : null;

    try {
      const updateData = { department, courseName, description };
      if (departmentImage) {
        updateData.departmentImage = departmentImage;
      }

      const updatedCourse = await CourseModel.findByIdAndUpdate(
        id,
        updateData,
        { new: true }
      );

      if (!updatedCourse) {
        return res.status(404).json({ error: "Course not found" });
      }

      res.status(200).json({
        message: "Course updated successfully!",
        course: updatedCourse,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  // Delete a course
  static deleteCourse = async (req, res) => {
    const { id } = req.params;

    try {
      const deletedCourse = await CourseModel.findByIdAndDelete(id);
      if (!deletedCourse) {
        return res.status(404).json({ error: "Course not found" });
      }

      res.status(200).json({
        message: "Course deleted successfully!",
        course: deletedCourse,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
}

export default CourseController;
