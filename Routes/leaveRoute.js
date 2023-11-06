const express = require("express");
const router = express.Router();
const {
  applyForLeave,
  updateLeave,
  deleteLeave,
} = require("../Controllers/leaveController");
const leaveMiddleware = require("../Middlewares/leaveMiddleware");
const leaveUpdateMiddleware = require("../Middlewares/leaveUpdateMiddleware");

router.route("/applyForLeave").post(leaveMiddleware, applyForLeave);
router.route("/updateLeave").patch(leaveUpdateMiddleware, updateLeave);
router.route("/deleteLeave").delete(leaveUpdateMiddleware, deleteLeave);

module.exports = router;
