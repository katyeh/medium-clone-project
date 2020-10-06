const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const asyncHandler = handler => {
  return (req, res, next) => {
    return handler(req, res, next).catch(next);
  }
}

// Need to AWAIT when calling hashPassword!!
const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
}

const handleValidationErrors = (req, res, next) => {
  const validatorErrors = validationResult(req);

  if (!validatorErrors.isEmpty()) {
    const errors = validatorErrors.array().map(error => error.msg);

    const err = new Error('Bad request.');
    err.status = 400; 
    err.title = 'Bad Request.';
    err.errors = errors;
    return next(err);
  }
  next();
};

module.exports = {
  asyncHandler,
  hashPassword,
  handleValidationErrors
};