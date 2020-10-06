const express = require("express");
const { check } = require('express-validator');

const { User } = require("../../db/models");
const { asyncHandler, hashPassword } = require("../../utils");

const router = express();

const userValidation = [
  check('fullName')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a valid name.')
    .isLength({ max: 55 })
    .withMessage('Name cannot be over 55 characters long.')
    .custom(value => {
      if (value.split(' ').length < 2) {
        throw new Error('You must enter both first name and last name.');
      }
    })
];

const usernameValidation = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a valid username.')
    .isLength({ min: 5 })
    .withMessage('Username must be longer than 5 characters.')
    .isLength({ max: 40 })
    .withMessage('Username cannot be over 40 characters long.')
];

const emailAndPasswordValidation = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please enter a valid email.')
    .isLength({ max: 55 })
    .withMessage('Email address cannot be over 55 characters long.')
    .custom(value => {
      return User.findOne({ where: { email: value }})
        .then(user => {
          if (user) throw new Error('The provided email address is already used by another account.')
        });
    })
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a valid password.')
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value to confirm password.')
    .custom(value, { req } => {
      if (value !== req.body.password) {
        throw new Error('The password fields must match.');
      }
      return true;
    })
];

router.get("/:id", asyncHandler(async (req, res, next) => {

}));

router.post("/", 
  userValidation,
  usernameValidation,
  emailAndPasswordValidation,
  asyncHandler(async (req, res, next) => {
  const { fullName, username, email, password } = req.body;

  const hashedPassword = await hashPassword(password);
  const user = await User.create({
    fullName,
    username,
    email,
    hashedPassword
  });
  res.json({
    user
  });
}));

router.get("/token", asyncHandler(async (req, res, next) => {

}));

module.exports = router;