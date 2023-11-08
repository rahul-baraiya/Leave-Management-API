const joi = require("joi").extend(require("@joi/date"));
const joiMessages = require("../Config/joiMessages");

const leaveValidation = joi.object().keys({
  _id: joi
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
    .required()
    .messages({
      "any.required": joiMessages.REQUIRED.replace("ADD:", "Full Name"),
      "string.min": joiMessages.STRING_MIN.replace("ADD:", "Full Name"),
    }),
  leaveType: joi
    .string()
    .valid("Sick Leave", "Personal Leave", "Paid Leave")
    .insensitive()
    .required()
    .messages({
      "string.base": joiMessages.STRING_BASE.replace("ADD:", "Leave type"),
      "string.empty": joiMessages.STRING_EMPTY.replace("ADD:", "Leave type"),
      "any.required": joiMessages.REQUIRED.replace("ADD:", "Leave type"),
      "any.only": "Invalid leave type",
    }),
  fromDate: joi
    .date()
    .format("YYYY-MM-DD")
    .required()
    .messages({
      "any.required": joiMessages.REQUIRED.replace("ADD:", "From Date"),
      "date.base": joiMessages.DATE_BASE.replace("ADD:", "From Date"),
      "date.format": joiMessages.DATE_FORMAT.replace("ADD:", "From Date"),
    }),
  toDate: joi
    .date()
    .format("YYYY-MM-DD")
    .required()
    .messages({
      "any.required": joiMessages.REQUIRED.replace("ADD:", "To Date"),
      "date.base": joiMessages.DATE_BASE.replace("ADD:", "To Date"),
      "date.format": joiMessages.DATE_FORMAT.replace("ADD:", "To Date"),
    }),
  leaveDays: joi
    .number()
    .integer()
    .required()
    .messages({
      "number.base": joiMessages.NUMBER_BASE.replace("ADD:", "Leave days"),
      "number.integer": joiMessages.NUMBER_INTEGER.replace(
        "ADD:",
        "Leave days"
      ),
      "any.required": joiMessages.REQUIRED.replace("ADD:", "Leave days"),
    }),
  leaveStatus: joi
    .string()
    .valid("Approve", "Reject")
    .insensitive()
    .required()    
    .messages({
      "string.base": joiMessages.STRING_BASE.replace("ADD:", "Leave status"),
      "string.empty": joiMessages.STRING_EMPTY.replace("ADD:", "Leave status"),
      "any.required": joiMessages.REQUIRED.replace("ADD:", "Leave status"),
      "any.only": "Invalid leave status, Status must be Approve and Reject",
    }),
  description: joi
    .string()
    .min(5)
    .required()
    .messages({
      "string.base": joiMessages.STRING_BASE.replace(
        "ADD:",
        "Leave description"
      ),
      "any.required": joiMessages.REQUIRED.replace("ADD:", "Leave description"),
      "string.min": joiMessages.STRING_MIN.replace("ADD:", "Leave description"),
    }),
});

module.exports = leaveValidation;
