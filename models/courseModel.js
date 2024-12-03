import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  departmentName: {
    type: String,
    required: [true, "Department is required"],
  },
  courseName: {
    type: String,
    required: [true, "Course name is required"],
  },
  departmentImage: {
    type: String,
    required: [true, "Department image is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
});

const CourseModel = mongoose.model("Course", CourseSchema);

export default CourseModel;
