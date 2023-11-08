const joi = require("joi").extend(require("@joi/date"));
const joiMessages = require("../Config/joiMessages");

const leaveIdValidation = joi.object({
  _id: joi
    .string()
    .min(3)
    .required()
    .messages({
      "string.min": joiMessages.STRING_MIN.replace("ADD:", "Leave Id"),
      "any.required": joiMessages.REQUIRED.replace("ADD:", "Leave Id"),
    }),
});

module.exports = leaveIdValidation;
