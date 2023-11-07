const joi = require("joi").extend(require("@joi/date"));
const joiMessages = require("../Config/joiMessages");

const leaveValidation = joi.object().keys({
  leaveId: joi
    .string()
    .min(3)
    .required()
    .messages({
      "string.min": joiMessages.STRING_MIN.replace("ADD:", "Leave Id"),
      "any.required": joiMessages.REQUIRED.replace("ADD:", "Leave Id"),
    }),
  fullName: joi
    .string()
    .min(3)
    .messages({
      "string.min": joiMessages.STRING_MIN.replace("ADD:", "Full Name"),
    }),
  leaveType: joi
    .string()
    .valid("Sick Leave", "Personal Leave", "Paid Leave")
    .insensitive()
    .messages({
      "string.base": joiMessages.STRING_BASE.replace("ADD:", "Leave type"),
      "string.empty": joiMessages.STRING_EMPTY.replace("ADD:", "Leave type"),
      "any.only":
        "Invalid leave type, Leave must be Sick Leave, Personal Leave, Paid Leave",
    }),
  fromDate: joi
    .date()
    .format("YYYY-MM-DD")
    .messages({
      "date.base": joiMessages.DATE_BASE.replace("ADD:", "From Date"),
      "date.format": joiMessages.DATE_FORMAT.replace("ADD:", "From Date"),
    }),
  toDate: joi
    .date()
    .format("YYYY-MM-DD")
    .messages({
      "date.base": joiMessages.DATE_BASE.replace("ADD:", "To Date"),
      "date.format": joiMessages.DATE_FORMAT.replace("ADD:", "To Date"),
    }),
  leaveDays: joi
    .number()
    .integer()
    .messages({
      "number.base": joiMessages.NUMBER_BASE.replace("ADD:", "Leave days"),
      "number.integer": joiMessages.NUMBER_INTEGER.replace(
        "ADD:",
        "Leave days"
      ),
    }),
  description: joi
    .string()
    .min(5)
    .messages({
      "string.base": joiMessages.STRING_BASE.replace(
        "ADD:",
        "Leave description"
      ),

      "string.min": joiMessages.STRING_MIN.replace("ADD:", "Leave description"),
    }),
});

module.exports = leaveValidation;
