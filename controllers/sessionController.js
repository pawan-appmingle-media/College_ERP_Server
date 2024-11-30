import SessionModel from "../models/sessionModel.js";

class SessionController {
  // Add a new session
  static addSession = async (req, res) => {
    // console.log("Request Body:", req.body); // Debugging: Log the incoming data

    const { departmentName, courseName, session } = req.body;

    if (!departmentName || !courseName || !session) {
      return res.status(400).json({
        error: "All fields (departmentName, courseName, session) are required",
      });
    }

    try {
      const newSession = new SessionModel({
        departmentName,
        courseName,
        session,
      });
      const savedSession = await newSession.save();
      res.status(201).json({
        message: "Session added successfully",
        session: savedSession,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // Get all sessions
  static getAllSessions = async (req, res) => {
    try {
      const sessions = await SessionModel.find();
      res.status(200).json(sessions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // Get a session by ID
  static getSessionById = async (req, res) => {
    const { id } = req.params;

    try {
      const session = await SessionModel.findById(id);
      if (!session) {
        return res.status(404).json({ error: "Session not found" });
      }
      res.status(200).json(session);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // Update a session
  static updateSession = async (req, res) => {
    const { id } = req.params;
    const { departmentName, courseName, session } = req.body;

    try {
      const updatedSession = await SessionModel.findByIdAndUpdate(
        id,
        { departmentName, courseName, session },
        { new: true }
      );

      if (!updatedSession) {
        return res.status(404).json({ error: "Session not found" });
      }

      res.status(200).json({
        message: "Session updated successfully",
        session: updatedSession,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // Delete a session
  static deleteSession = async (req, res) => {
    const { id } = req.params;

    try {
      const deletedSession = await SessionModel.findByIdAndDelete(id);
      if (!deletedSession) {
        return res.status(404).json({ error: "Session not found" });
      }

      res.status(200).json({
        message: "Session deleted successfully",
        session: deletedSession,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}

export default SessionController;
