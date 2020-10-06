const express = require("express");
const router = express.Router();
const { asyncHandler, handleValidationErrors } = require("../../utils");
const { check } = require('express-validator');
const {User, Story} = require("../../db/models");







const storyValidator = [
  check('body')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a valid story')

]

router.post('/', storyValidator, handleValidationErrors, asyncHandler(async (req, res, next) => {
  const { title, body, userId } = req.body;
  const story = await Story.create({
    title,
    body,
    userId
  });
  res.redirect('/stories')
}))








module.exports = router;
