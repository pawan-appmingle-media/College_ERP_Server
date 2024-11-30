import express from "express";
import BatchController from "../../controllers/batchController.js";

const router = express.Router();

// Add a new batch
router.post("/", BatchController.addBatch);

// Get all batches
router.get("/", BatchController.getAllBatches);

// Get a batch by ID
router.get("/:id", BatchController.getBatchById);

// Update a batch
router.put("/:id", BatchController.updateBatch);

// Delete a batch
router.delete("/:id", BatchController.deleteBatch);

export default router;
