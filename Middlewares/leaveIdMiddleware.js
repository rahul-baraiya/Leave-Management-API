const leaveIdValidation = require("../Validations/leaveIdValidation");
const { errorResponse } = require("../Config/responseMsg");

const leaveIdMiddleWare = (req, res, next) => {
  const validationResult = leaveIdValidation.validate(req.body, {
    abortEarly: false,
  });
  if (validationResult.error) {
    errMessage = validationResult.error.details[0].message;
    res.send(errorResponse(errMessage));
  } else {
    next();
  }
};

module.exports = leaveIdMiddleWare;
