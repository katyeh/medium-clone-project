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


router.get('/', asyncHandler(async (req, res, next) => {
  const { userId } = req.body;
  const stories = await Story.findAll({
    where: { userId },
    include: [{ model: User, as: "user", attributes: ["username"] }],
    order: [["createdAt", "DESC"]]
  })
  res.json({stories})
}))

router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
  const story = await Story.findByPk(req.params.id);
  if (story) {
    res.json({ story })
  } else {
    next(storyNotFoundError(req.params.id));
  }
}))

const storyNotFoundError = (id) => {
  const err = new Error('Story not found!');
  err.title = [`Story with id of ${id} not found!`];
  err.status = 404;
  return (err)
}





module.exports = router;
