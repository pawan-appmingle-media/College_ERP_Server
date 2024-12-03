import mongoose from "mongoose";

const batchSchema = new mongoose.Schema(
  {
    departmentName: {
      type: String,
      required: [true, "Department Name is required"],
    },
    courseName: {
      type: String,
      required: [true, "Course Name is required"],
    },
    session: {
      type: String,
      required: [true, "Session is required"],
    },
    batch: {
      type: String,
      required: [true, "Batch Name is required"],
    },
  },
  { timestamps: true }
);

const BatchModel = mongoose.model("Batch", batchSchema);
export default BatchModel;
