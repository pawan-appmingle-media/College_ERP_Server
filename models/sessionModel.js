import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  departmentName: {
    type: String,
    required: [true, "Department Name is required"],
  },
  courseName: {
    type: String,
    required: [true, "Course Name is required"],
  },
  session: {
    type: Date,
    required: [true, "Session date is required"],
  },
});

const SessionModel = mongoose.model("Session", sessionSchema);

export default SessionModel;
