const bcrypt = require('bcrypt');

const asyncHandler = handler => {
  return (req, res, next) => {
    return handler(req, res, next).catch(next);
  }
}

const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
}

// handleValidationErrors middleware for express-validator

module.exports = {
  asyncHandler
}