const asyncHandler = handler => {
  return (req, res, next) => {
    return handler(req, res, next).catch(next);
  }
}

// handleValidationErrors middleware for express-validator

module.exports = {
  asyncHandler
}