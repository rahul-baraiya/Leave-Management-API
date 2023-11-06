const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({
  fullName: { type: String, required: true, minlength: 3 },
  leaveType: { type: String, required: true },
  fromDate: { type: Date, required: true },
  toDate: { type: Date, required: true },
  leaveDays: { type: Number, required: true },
  description: { type: String, required: true, minlength: 5 },
  leaveStatus: { type: String, required: true, default: "Pending" },
  applicationDate: { type: Date, default: Date.now },
});

const Leave = mongoose.model("Leave", leaveSchema);

module.exports = Leave;
