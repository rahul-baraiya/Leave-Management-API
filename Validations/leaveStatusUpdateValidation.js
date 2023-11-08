const joi = require("joi").extend(require("@joi/date"));
const joiMessages = require("../Config/joiMessages");

const leaveValidation = joi.object({
  _id: joi
    .string()
    .min(3)
    .required()
    .messages({
      "string.min": joiMessages.STRING_MIN.replace("ADD:", "Leave Id"),
      "any.required": joiMessages.REQUIRED.replace("ADD:", "Leave Id"),
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
});

module.exports = leaveValidation;
