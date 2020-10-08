const express = require("express");
const { check } = require('express-validator');
const { User, Follow } = require("../../db/models");
const { asyncHandler, hashPassword, handleValidationErrors } = require("../../utils");
const { getUserToken, requireAuth } = require('../../auth');
const csrf = require("csurf");
const csrfProtection = csrf({cookie: true});

const router = express();

const userValidation = [
  check("fullName")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a valid name.")
    .isLength({ max: 55 })
    .withMessage("Name cannot be over 55 characters long.")
    .custom((value) => {
      if (value.split(" ").length < 2) {
        throw new Error(
          "You must enter both first name and last name, separated by a space."
        );
      }
      return true;
    })
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("Name must only contain alphabets."),
];

const usernameValidation = [
  check("username")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a valid username.")
    .isLength({ min: 5 })
    .withMessage("Username must be longer than 5 characters.")
    .isLength({ max: 40 })
    .withMessage("Username cannot be over 40 characters long.")
    .matches(/^\w+$/)
    .withMessage(
      "Username must only contain alphabets, numbers, and _(underscores)."
    ),
];

const emailAndPasswordValidation = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please enter a valid email.")
    .isLength({ max: 55 })
    .withMessage("Email address cannot be over 55 characters long.")
    .custom((value) => {
      return User.findOne({ where: { email: value } }).then((user) => {
        if (user) {
          throw new Error(
            "The provided email address is already used by another account."
          );
        }
        return true;
      });
    }),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a valid password.")
    .isLength({ min: 8 })
    .withMessage("Password must be longer than 8 characters.")
    .custom((value) => {
      if (value.split(" ").length > 1) {
        throw new Error("Password cannot have spaces.");
      }
      return true;
    })
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, "g")
    .withMessage(
      "Password must have at least one lower-case letter, upper-case letter, number, and special character(!@#$%^&*)."
    ),
  check("confirmPassword")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value to confirm password.")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("The password fields must match.");
      }
      return true;
    }),
];

const userNotFoundError = id => {
  const err = new Error('User not found.');
  err.errors = [`User with id of ${id} could not be found.`];
  err.title = 'User not found';
  err.status = 404;
  return err;
};

// TODO: save fullname Uppercase
router.post("/",
  csrfProtection,
  userValidation,
  usernameValidation,
  emailAndPasswordValidation,
  handleValidationErrors,
  asyncHandler(async (req, res, next) => {
  let { fullName, username, email, password } = req.body;

  const hashedPassword = await hashPassword(password.trim());

  fullName = fullName.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');

  const user = await User.create({
    fullName: fullName.trim(),
    username: username.trim(),
    email: email.toLowerCase().trim(),
    hashedPassword
  });

  // TODO: create user token with jwt and include that token in response json.
  const token = getUserToken(user);
  res.status(201).json({
    user: { id: user.id },
    token,
  });
}));

router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res, next) => {
    // TODO: Must validate token to check if the user has authority to view the info!

    const user = await User.findOne({
      where: { id: req.params.id },
    });

    if (user) {
      res.json({ user: { fullName: user.fullName, email: user.email } });
    } else {
      next(userNotFoundError(req.params.id));
    }
  })
);

router.delete('/:id(\\d+)', asyncHandler(async (req, res, next) => {
  // TODO: Must validate token to check if the user has authority to delete the user info!!

  const user = await User.findOne({
    where: { id: req.params.id },
  });

  if (user) {
    await user.destroy();
    res.json({ message: `Deleted user with username of ${user.username}.` });
  } else {
    next(userNotFoundError(req.params.id));
  }
}));

router.post("/token",
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a valid email address.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a valid password.'),
  asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email },
    });

    if (!user || !user.validatePassword(password)) {
      const err = new Error("Login failed.");
      err.status = 401;
      err.title = "Login failed";
      err.errors = ["The provided credentials were invalid."];
      return next(err);
    }

    // TODO: create user token with jwt and include that token in response json.
    res.json({ user: { id: user.id } });
}));

router.post("/follow", asyncHandler(async(req, res) => {
    const { followerId, followeeId } = req.body;
    await Follower.create({
        followeeId,
        followerId
    });
    res.end();
}));

module.exports = router;
