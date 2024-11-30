import mongoose from "mongoose";

const DepartmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Department name is required"], // Use 'name' instead of 'department'
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});

export default mongoose.model("Department", DepartmentSchema);
