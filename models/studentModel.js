import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    department: { type: String, required: true },
    course: { type: String, required: true },
    session: { type: String, required: true },
    batch: { type: String, required: true },
    studentName: { type: String, required: true },
    fathersName: { type: String, required: true },
    mothersName: { type: String, required: true },
    studentEmail: { type: String, required: true },
    studentContact: { type: String, required: true },
    studentAlternateContact: { type: String, required: true },
    dob: { type: Date, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    category: { type: String, required: true },
    religion: { type: String, required: true },
    address: {
      address1: { type: String, required: true },
      address2: { type: String, required: true },
      address3: { type: String, required: true },
      state: { type: String, required: true },
      city: { type: String, required: true },
      pincode: { type: String, required: true },
    },
    correspondenceAddress: {
      address1: { type: String, required: true },
      address2: { type: String, required: true },
      address3: { type: String, required: true },
      state: { type: String, required: true },
      city: { type: String, required: true },
      pincode: { type: String, required: true },
    },
    admissionDate: { type: Date, required: true },
    admissionNumber: { type: String, required: true },
    rollNumber: { type: String, required: true },
    aadharNumber: { type: String, required: true },
    panNumber: { type: String, required: true },
    class10thDetails: {
      qualification: { type: String, required: true },
      board: { type: String, required: true },
      year: { type: String, required: true },
      maximumMarks: { type: String, required: true },
      marksObtained: { type: String, required: true },
      subject: { type: String, required: true },
    },
    class12thDetails: {
      qualification: { type: String, required: true },
      board: { type: String, required: true },
      year: { type: String, required: true },
      maximumMarks: { type: String, required: true },
      marksObtained: { type: String, required: true },
      subject: { type: String, required: true },
    },
    graduationDeatils: {
      qualification: { type: String, required: true },
      board: { type: String, required: true },
      year: { type: String, required: true },
      maximumMarks: { type: String, required: true },
      marksObtained: { type: String, required: true },
      subject: { type: String, required: true },
    },
  },
  { timestamps: true }
);

const StudentModel = mongoose.model("Student", studentSchema);

export default StudentModel;
