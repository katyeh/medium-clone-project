const express = require("express");
const { check } = require('express-validator');

const { User } = require("../../db/models");
const { asyncHandler, hashPassword, handleValidationErrors } = require("../../utils");

const router = express();

// TODO: strings only
const userValidation = [
  check('fullName')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a valid name.')
    .isLength({ max: 55 })
    .withMessage('Name cannot be over 55 characters long.')
    .custom(value => {
      if (value.split(' ').length < 2) {
        throw new Error('You must enter both first name and last name, separated by a space.');
      }
      return true;
    })
];

// TODO: only some characters allowed
const usernameValidation = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a valid username.')
    .isLength({ min: 5 })
    .withMessage('Username must be longer than 5 characters.')
    .isLength({ max: 40 })
    .withMessage('Username cannot be over 40 characters long.')
];

// TODO: minlength, special characters
const emailAndPasswordValidation = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please enter a valid email.')
    .isLength({ max: 55 })
    .withMessage('Email address cannot be over 55 characters long.'),
    // ** Not working so need to fix the below codes.
    // .custom(value => {
    //   if (value.split(' ').length > 1) {
    //     throw new Error('Password cannot have spaces.');
    //   }
    //   return true;
    // }),
    // .custom(value => {
    //   return User.findOne({ where: { email: value }})
    //     .then(user => {
    //       if (user) {
    //         throw new Error('The provided email address is already used by another account.');
    //       }
    //       return true;
    //     });
    // }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a valid password.'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value to confirm password.')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('The password fields must match.');
      }
      return true;
    })
];

router.get("/:id(\\d+)", asyncHandler(async (req, res, next) => {

}));

// TODO: save fullname Uppercase
router.post("/", 
  userValidation,
  usernameValidation,
  emailAndPasswordValidation,
  handleValidationErrors,
  asyncHandler(async (req, res, next) => {
  const { fullName, username, email, password } = req.body;

  const hashedPassword = await hashPassword(password.trim());
  const user = await User.create({
    fullName: fullName.trim(),
    username: username.trim(),
    email: email.trim(),
    hashedPassword
  });

  const { id } = user;

  // TODO: create user token with jwt and include that token in response json.
  res.status(201).json({ id });
  res.redirect('/');
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
    const user = await User.findAll();
    console.log(user)
    // console.log(User.toString())
    // const user = await User.findOne({
    //   where: { email }
    // });
    // console.log('!!!', user)
    console.log('HIHIHIHIHI')
    // console.log('!!!!', user.validatePassword(password));
}));

module.exports = router;