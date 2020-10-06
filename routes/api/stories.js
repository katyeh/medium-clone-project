const express = require("express");
const router = express.Router();
const db = require('../../db/models');
const { asyncHandler, handleValidationErrors } = require("../../utils");
const { check, validationResult } = require('express-validator');
const {User, Story, Response, Clap } = db;
// const { requireAuth } = require('../auth');


// router.use(requireAuth);

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

const validateResponse = [
    check('body')
        .exists({ checkFalsy: true })
        .withMessage("Response can't be empty.")
        .isLength({ max: 255 })
        .withMessage("Response can't be longer than 255 characters.")
];

router.get('/:id/responses', asyncHandler(async (req, res, next) => {
  const storyId = req.params.id;
  const responses = await Response.findAll({
    where: { storyId },
    include: [{ model: User, attributes: ["username"] }],
    order: [["createdAt", "DESC"]]
  })
  res.json({ responses });
}));

router.post(
  '/:id/responses',
  validateResponse,
  handleValidationErrors,
  asyncHandler(async (req, res) => {
    const { body } = req.body;
    const response = await response.create({ body, userId: req.user.id });
    res.status(201).json({ tweet });
  }));

router.post("/:id/clap", asyncHandler(async (req, res) => {
    const { userId } = req.body;
    const storyId = req.params.id;
    const clap = await Clap.create({
        userId,
        storyId
    })
    const clapAmount = await Clap.count({ where: { storyId }});
    res.json({ clapAmount });
}));

router.post("/:storyId/responses/:responseId/clap", asyncHandler(async(req, res) => {
    const { userId } = req.body;
    const responseId = req.params.responseId;
    const clap = await Clap.create({
        userId,
        responseId
    })
    const clapAmount = await Clap.count({ where: { responseId }});
    res.json({ clapAmount });
}));

router.get('/', asyncHandler(async (req, res, next) => {
  const { userId } = req.body;
  const stories = await Story.findAll({
    where: { userId },
    include: [{ model: User, as: "user", attributes: ["username"] }],
    order: [["createdAt", "DESC"]]
  })
  res.json({stories})
}))

const storyNotFoundError = (id) => {
  const err = new Error('Story not found!');
  err.title = [`Story with id of ${id} not found!`];
  err.status = 404;
  return (err)
}
router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
  const story = await Story.findByPk(req.params.id);
  if (story) {
    res.json({ story })
  } else {
    next(storyNotFoundError(req.params.id));
  }
}))


router.put('/:id(\\d+)', storyValidator, handleValidationErrors, asyncHandler(async (req, res, next) => {
  const storyId = parseInt(req.params.id);
  const story = await Story.findByPk(storyId);
  if (story) {
    await story.update({
      body: req.body.body,
      title: req.body.title
    })
    res.json({story})
  } else {
    next(storyNotFoundError(storyId))
  }
}))

router.delete('/:id(\\d+)', asyncHandler(async (req, res, next) => {
  const storyId = parseInt(req.params.id);
  const responseClaps = await Clap.findAll({
    where: { storyId }
  })
  const responses = await Response.findAll({
    where:{storyId}
  })
  const story = await Story.findByPk(storyId);
  if (story) {
    await responseClaps.forEach(async (clap) => await clap.destroy());
    await responses.forEach(async (response) => await response.destroy());
    await story.destroy();
  } else {
    next(storyNotFoundError(storyId));
  }
  res.status(204).end()
}))




module.exports = router;
