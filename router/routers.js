import express from "express";
import batchRoutes from "./AllRouters/batchRoutes.js";
import courseRoutes from "./AllRouters/courseRoutes.js";
import departmentRoutes from "./AllRouters/departmentRoutes.js";
import sessionRoutes from "./AllRouters/sessionRoutes.js";
import studentRoutes from "./AllRouters/studentRoutes.js";
const router = express.Router();

// Merge individual route files
router.use("/courses", courseRoutes); // All course-related routes
router.use("/department", departmentRoutes); // All department-related routes
router.use("/session", sessionRoutes); // All session-related routes
router.use("/batches", batchRoutes); // All batch-related routes
router.use("/students", studentRoutes); // All student-related routes

export default router;
