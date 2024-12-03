import express from "express";
import feeManagController from "../../controllers/feeManagController.js";

const router = express.Router();
// CRUD Routes
router.post("/", feeManagController.createFee); // Create Fee
router.get("/", feeManagController.getFees); // Get All Fees
router.get("/:id", feeManagController.getFeeById); // Get Fee By ID
router.put("/:id", feeManagController.updateFee); // Update Fee
router.delete("/:id", feeManagController.deleteFee); // Delete Fee

export default router;
