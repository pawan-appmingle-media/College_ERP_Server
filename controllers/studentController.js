import StudentModel from "../models/studentModel.js";

class StudentController {
  // Create a new student
  static createStudent = async (req, res) => {
    try {
      console.log(req.body);

      const newStudent = new StudentModel(req.body);
      await newStudent.save();
      res
        .status(201)
        .json({ message: "Student created successfully", student: newStudent });
    } catch (error) {
      console.error("Error creating student:", error);
      res.status(400).json({
        message: "Error creating student",
        error: error.message || error,
      });
    }
  };

  // Get all students
  static getAllStudents = async (req, res) => {
    try {
      const students = await StudentModel.find();
      res.status(200).json(students);
    } catch (error) {
      res.status(500).json({ message: "Error fetching students", error });
    }
  };

  // Get student by ID
  static getStudentById = async (req, res) => {
    try {
      const student = await StudentModel.findById(req.params.id);
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }
      res.status(200).json(student);
    } catch (error) {
      res.status(500).json({ message: "Error fetching student", error });
    }
  };

  // Update student details
  static updateStudent = async (req, res) => {
    try {
      const updatedStudent = await StudentModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedStudent) {
        return res.status(404).json({ message: "Student not found" });
      }
      res.status(200).json({
        message: "Student updated successfully",
        student: updatedStudent,
      });
    } catch (error) {
      res.status(400).json({ message: "Error updating student", error });
    }
  };

  // Delete a student
  static deleteStudent = async (req, res) => {
    try {
      const deletedStudent = await StudentModel.findByIdAndDelete(
        req.params.id
      );
      if (!deletedStudent) {
        return res.status(404).json({ message: "Student not found" });
      }
      res.status(200).json({ message: "Student deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting student", error });
    }
  };
}

export default StudentController;
