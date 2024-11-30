import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    department: {
      type: String, // department name
      required: true,
    },
    description: {
      type: String, // department Description
      required: true,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create a model based on the schema
const DepartmentModel = mongoose.model("Departemnt", adminSchema);

export default DepartmentModel;
