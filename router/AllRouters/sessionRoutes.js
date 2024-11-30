import express from "express";
import SessionController from "../../controllers/sessionController.js";

const router = express.Router();

// CRUD Routes
router.post("/", SessionController.addSession); // Add a session
router.get("/", SessionController.getAllSessions); // Get all sessions
router.get("/:id", SessionController.getSessionById); // Get a single session by ID
router.put("/:id", SessionController.updateSession); // Update a session
router.delete("/:id", SessionController.deleteSession); // Delete a session

export default router;
