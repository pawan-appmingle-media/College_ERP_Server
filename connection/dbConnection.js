import mongoose from "mongoose";

const DB_Connection = async (baseUrl) => {
  try {
    // Connect to the MongoDB database using the URL from environment variables
    await mongoose.connect(baseUrl);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default DB_Connection;
