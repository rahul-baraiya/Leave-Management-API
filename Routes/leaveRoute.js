const express = require("express");
const router = express.Router();
const {
  applyForLeave,
  updateLeave,
  deleteLeave,
  leaveList,
  updateLeaveStatus,
  findOneLeave
} = require("../Controllers/leaveController");
const leaveMiddleware = require("../Middlewares/leaveMiddleware");
const leaveUpdateMiddleware = require("../Middlewares/leaveUpdateMiddleware");
const leaveStatusUpdateMiddleware = require("../Middlewares/leaveStatusUpdateMiddleware");
const leaveIdMiddleware = require("../Middlewares/leaveIdMiddleware");

router.route("/applyForLeave").post(leaveMiddleware, applyForLeave);
router.route("/updateLeave").patch(leaveUpdateMiddleware, updateLeave);
router.route("/deleteLeave").delete(leaveIdMiddleware, deleteLeave);
router.route("/leaveList").get(leaveList);
router.route("/findOneLeave/:leaveId").get( findOneLeave);
router
  .route("/updateLeaveStatus")
  .patch(leaveStatusUpdateMiddleware, updateLeaveStatus);

module.exports = router;
