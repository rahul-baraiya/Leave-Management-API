const Leave = require("../Models/leaveModel");
const { successResponse } = require("../Config/responseMsg");

exports.applyForLeave = async (req, res, next) => {
  try {
    const data = req.body;

    const addLeave = new Leave(data);

    await addLeave.save();

    res.json(successResponse(addLeave, "Leave application was successful!"));
  } catch (error) {
    console.error("Error applying for leave:" + error);
    next(error);
  }
};

exports.updateLeave = async (req, res, next) => {
  try {
    const leaveData = req.body;
    const leaveId = leaveData.leaveId;

    const result = await Leave.updateOne({ _id: leaveId }, { $set: leaveData });

    if (result.modifiedCount === 1) {
      return res.json(
        successResponse(leaveData, "Leave application was successfully updated")
      );
    } else {
      return res.status(404).json({
        success: false,
        message: "Leave application with the specified ID was not found",
      });
    }
  } catch (error) {
    console.error("Error updating leave application:", error);
    next(error);
  }
};

exports.deleteLeave = async (req, res, next) => {
  try {
    const leaveId = req.body.leaveId;

    const result = await Leave.deleteOne({ _id: leaveId });

    if (result.deletedCount === 1) {
      return res.json(
        successResponse(result, "Leave application was successfully deleted")
      );
    } else {
      return res.status(404).json({
        success: false,
        message: "Leave application with the specified ID was not found",
      });
    }
  } catch (error) {
    console.error("Error deleting leave application:", error);
    next(error);
  }
};
