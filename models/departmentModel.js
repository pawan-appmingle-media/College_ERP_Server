import mongoose from "mongoose";

const DepartmentSchema = new mongoose.Schema({
  departmentName: {
    type: String,
    required: [true, "Department name is required"],
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});

export default mongoose.model("Department", DepartmentSchema);
