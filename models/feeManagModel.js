import mongoose from "mongoose";

const feeSchema = new mongoose.Schema(
  {
    feeName: { type: String, required: true },
    department: { type: String, required: true },
    course: { type: String, required: true },
    session: { type: String, required: true },
    batch: { type: String, required: true },
    totalFee: { type: Number, required: true },
    splits: [
      {
        splitName: { type: String },
        amount: { type: Number },
      },
    ],
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    finePerDay: { type: Number },
    lateFine: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const FeeManagModel = mongoose.model("FeeManag", feeSchema);

export default FeeManagModel;
