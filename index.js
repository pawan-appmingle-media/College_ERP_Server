import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import DB_Connection from "./connection/dbConnection.js";
import router from "./router/routers.js";
dotenv.config();

const PORT = process.env.PORT || 8000;
const DATABASE_URL = process.env.DBURL;

// Initialize Express app
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use("/api/uploads", express.static("./uploads"));

// Database connection
DB_Connection(DATABASE_URL);

// Routes
app.use("/api", router);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error
  res.status(500).json({ error: "Internal Server Error" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
