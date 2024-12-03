import FeeManagModel from "../models/feeManagModel.js";

export default class feeManagController {
  static createFee = async (req, res) => {
    try {
      const fee = new FeeManagModel(req.body);
      await fee.save();
      res.status(201).json({ success: true, data: fee });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  };
  static getFees = async (req, res) => {
    try {
      const fees = await FeeManagModel.find();
      res.status(200).json({ success: true, data: fees });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  };

  static getFeeById = async (req, res) => {
    try {
      const fee = await FeeManagModel.findById(req.params.id);
      if (!fee)
        return res
          .status(404)
          .json({ success: false, message: "Fee not found" });
      res.status(200).json({ success: true, data: fee });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  };
  static updateFee = async (req, res) => {
    try {
      const fee = await FeeManagModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      if (!fee)
        return res
          .status(404)
          .json({ success: false, message: "Fee not found" });
      res.status(200).json({ success: true, data: fee });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  };
  static deleteFee = async (req, res) => {
    try {
      const fee = await FeeManagModel.findByIdAndDelete(req.params.id);
      if (!fee)
        return res
          .status(404)
          .json({ success: false, message: "Fee not found" });
      res
        .status(200)
        .json({ success: true, message: "Fee deleted successfully" });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  };
}
