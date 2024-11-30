import DepartmentModel from "../model/departmentModel.js"; // Ensure this path is correct

class adminController {
  // Add a new department
  static addDepartment = async (req, res) => {
    const { name, description } = req.body;
    const img = req.file ? req.file.filename : null;

    try {
      if (!img) {
        return res.status(400).json({ error: "No image uploaded" });
      }

      const newDepartment = new DepartmentModel({
        name,
        description,
        image: img,
      });

      const savedDepartment = await newDepartment.save();
      res.status(200).json({
        message: "Department added successfully!",
        department: savedDepartment,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  // Get all departments
  static getAllDepartments = async (req, res) => {
    try {
      const departments = await DepartmentModel.find();
      res.status(200).json(departments);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  // Get a single department by ID
  static getDepartmentById = async (req, res) => {
    const { id } = req.params;

    try {
      const department = await DepartmentModel.findById(id);
      if (!department) {
        return res.status(404).json({ error: "Department not found" });
      }
      res.status(200).json(department);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  // Update a department
  static updateDepartment = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    const img = req.file ? req.file.filename : null;

    try {
      const updateData = {
        name,
        description,
      };

      if (img) {
        updateData.image = img;
      }

      const updatedDepartment = await DepartmentModel.findByIdAndUpdate(
        id,
        updateData,
        { new: true }
      );

      if (!updatedDepartment) {
        return res.status(404).json({ error: "Department not found" });
      }

      res.status(200).json({
        message: "Department updated successfully!",
        department: updatedDepartment,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  // Delete a department
  static deleteDepartment = async (req, res) => {
    const { id } = req.params;

    try {
      const deletedDepartment = await DepartmentModel.findByIdAndDelete(id);
      if (!deletedDepartment) {
        return res.status(404).json({ error: "Department not found" });
      }

      res.status(200).json({
        message: "Department deleted successfully!",
        department: deletedDepartment,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
}

export default adminController;
