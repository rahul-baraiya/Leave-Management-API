const leaveUpdateValidation = require("../Validations/leaveUpdateValidation");
const { errorResponse } = require("../Config/responseMsg");

const leaveUpdateMiddleWare = (req, res, next) => {
  const validationResult = leaveUpdateValidation.validate(req.body, {
    abortEarly: false,
  });
  if (validationResult.error) {
    errMessage = validationResult.error.details[0].message;
    res.send(errorResponse(errMessage));
  } else {
    next();
  }
};

module.exports = leaveUpdateMiddleWare;
