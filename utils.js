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
  console.log(validatorErrors);

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

const handleErrors = async (err) => {
    if (err.status >= 400 && err.status < 600) {
      const errorJSON = await err.json();
      const errorsContainer = document.querySelector(".errors-container");
      let errorsHtml = [
        `
          <div class="error">
              Something went wrong. Please try again.
          </div>
        `,
      ];
      const { errors } = errorJSON;
      if (errors && Array.isArray(errors)) {
        errorsHtml = errors.map(
          (message) => `
            <div class="error">
                ${message}
            </div>
          `
        );
      }
      errorsContainer.innerHTML = errorsHtml.join("");
    } else {
      alert(
        "Something went wrong. Please check your internet connection!"
      );
    }
};

module.exports = {
  handleErrors,
  asyncHandler,
  hashPassword,
  handleValidationErrors
};
