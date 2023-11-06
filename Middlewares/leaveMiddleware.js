const leaveValidation = require("../Validations/LeaveValidation");
const { errorResponse } = require("../Config/responseMsg");

const leaveMiddleWare = (req, res, next) => {
  const validationResult = leaveValidation.validate(req.body, {
    abortEarly: false,
  });
  if (validationResult.error) {
    errMessage = validationResult.error.details[0].message;
    res.send(errorResponse(errMessage));
  } else {
    next();
  }
};

module.exports = leaveMiddleWare;
