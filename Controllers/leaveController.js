const Leave = require("../Models/leaveModel");
const { successResponse, errorResponse } = require("../Config/responseMsg");
const mongoose = require("mongoose");

exports.applyForLeave = async (req, res, next) => {
  try {
    const data = req.body;

    const addLeave = new Leave(data);

    await addLeave.save();

    res.json(successResponse("Leave application was successful!"));
  } catch (error) {
    console.error("Error applying for leave:" + error);
    next(error);
  }
};

exports.updateLeave = async (req, res, next) => {
  try {
    const leaveData = req.body;
    const _id = leaveData._id;

    const result = await Leave.updateOne({ _id }, { $set: leaveData });

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
    const _id = req.body._id || req.params._id || req.query._id;

    const result = await Leave.deleteOne({ _id });

    if (result.deletedCount === 1) {
      return res.json(
        successResponse(null, "Leave application was successfully deleted")
      );
    } else {
      return res.json(
        errorResponse("Leave application with the specified ID was not found")
      );
    }
  } catch (error) {
    console.error("Error deleting leave application:", error);
    next(error);
  }
};

exports.leaveList = async (req, res, next) => {
  try {
    const result = await Leave.find({}).select("-__v -applicationDate");

    res.json(
      successResponse(result, "Leave application was successfully retrieve.")
    );
  } catch (error) {
    console.error("Error retrieve leave application:", error);
    next(error);
  }
};

exports.findOneLeave = async (req, res, next) => {
  try {
    const leaveId = (await req.params.leaveId) || req.query.leaveId;

    if (!leaveId) {
      throw new Error("Please provide a valid Leave Id");
    }

    if (!mongoose.Types.ObjectId.isValid(leaveId)) {
      return res.json(errorResponse("Invalid Leave Id format"));
    }

    const result = await Leave.findOne({ _id: leaveId }).select(
      "-__v -applicationDate"
    );

    res.json(
      successResponse(result, "Leave application was successfully retrieved.")
    );
  } catch (error) {
    console.error("Error retrieving leave application:", error);
    next(error);
  }
};

exports.updateLeaveStatus = async (req, res, next) => {
  try {
    const { _id, leaveStatus } = req.body;

    const result = await Leave.updateOne(
      { _id },
      { $set: { leaveStatus: leaveStatus } }
    );

    // const updatedResult = await Leave.findOne({ _id }).select(
    //   "-__v -applicationDate"
    // );

    if (result.modifiedCount === 1) {
      res.json(
        successResponse("Leave application status was successfully updated")
      );
    } else {
      res.json(errorResponse("Leave application not found or not updated"));
    }
  } catch (error) {
    console.error("Error in updating leave application:", error);
    next(error);
  }
};
