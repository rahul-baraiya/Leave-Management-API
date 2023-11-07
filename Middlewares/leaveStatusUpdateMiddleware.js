const leaveStatusUpdateValidation = require("../Validations/leaveStatusUpdateValidation");
const { errorResponse } = require("../Config/responseMsg");

const leaveStatusUpdateMiddleWare = (req, res, next) => {
  const validationResult = leaveStatusUpdateValidation.validate(req.body, {
    abortEarly: false,
  });
  if (validationResult.error) {
    errMessage = validationResult.error.details[0].message;
    res.send(errorResponse(errMessage));
  } else {
    next();
  }
};

module.exports = leaveStatusUpdateMiddleWare;
