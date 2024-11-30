import BatchModel from "../models/BatchModel.js";

class BatchController {
  // Add a new batch
  static addBatch = async (req, res) => {
    const { departmentName, courseName, session, batchName } = req.body;

    if (!departmentName || !courseName || !session || !batchName) {
      return res.status(400).json({
        error:
          "All fields (departmentName, courseName, session, batchName) are required",
      });
    }

    try {
      const newBatch = new BatchModel({
        departmentName,
        courseName,
        session,
        batchName,
      });
      const savedBatch = await newBatch.save();
      res.status(201).json({
        message: "Batch added successfully",
        batch: savedBatch,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // Get all batches
  static getAllBatches = async (req, res) => {
    try {
      const batches = await BatchModel.find();
      res.status(200).json(batches);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // Get a single batch by ID
  static getBatchById = async (req, res) => {
    const { id } = req.params;

    try {
      const batch = await BatchModel.findById(id);
      if (!batch) {
        return res.status(404).json({ error: "Batch not found" });
      }
      res.status(200).json(batch);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // Update a batch
  static updateBatch = async (req, res) => {
    const { id } = req.params;
    const { departmentName, courseName, session, batchName } = req.body;

    if (!departmentName || !courseName || !session || !batchName) {
      return res.status(400).json({
        error:
          "All fields (departmentName, courseName, session, batchName) are required",
      });
    }

    try {
      const updatedBatch = await BatchModel.findByIdAndUpdate(
        id,
        { departmentName, courseName, session, batchName },
        { new: true }
      );

      if (!updatedBatch) {
        return res.status(404).json({ error: "Batch not found" });
      }

      res.status(200).json({
        message: "Batch updated successfully",
        batch: updatedBatch,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // Delete a batch
  static deleteBatch = async (req, res) => {
    const { id } = req.params;

    try {
      const deletedBatch = await BatchModel.findByIdAndDelete(id);
      if (!deletedBatch) {
        return res.status(404).json({ error: "Batch not found" });
      }

      res.status(200).json({
        message: "Batch deleted successfully",
        batch: deletedBatch,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}

export default BatchController;
