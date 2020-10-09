const express = require("express");
// const csrfProtection = require('../csrf');
// const csrf = require('csurf');
const router = express.Router();
const db = require('../../db/models');
const { asyncHandler, handleValidationErrors } = require("../../utils");
const { check, validationResult } = require('express-validator');
const {User, Story, Response, Clap, StoryGenre, Genre } = db;
// const { requireAuth } = require('../auth');

// const csrfProtection = csrf({ cookie: true });
// router.use(requireAuth);

const storyValidator = [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a valid title.')
    .isLength({ max: 255 })
    .withMessage('Title cannot be longer than 255 characters.'),
  check('subtitle')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a valid subtitle.')
    .isLength({ max: 140 })
    .withMessage('Subtitle cannot be longer than 140 characters.'),
  check('body')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a valid story.')
]


router.post(
    '/',
    storyValidator,
    handleValidationErrors,
    asyncHandler(async (req, res, next) => {
  const { title, subtitle, body, userId } = req.body;
  const story = await Story.create({
    title,
    subtitle,
    body,
    userId: 2
  });
//   res.redirect('/stories');
}));

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
    const response = await Response.create({
      body,
      storyId: req.params.id,
      userId: req.user.id,
    });
    res.status(201).json({ response });
  }));

router.get("/:id/claps", asyncHandler(async(req, res) => {
    const storyId = req.params.id;
    const clapAmount = await Clap.count({ where: { storyId }});
    res.json({ clapAmount });
}));

router.get("/:storyId/responses/:responseId/claps", asyncHandler(async(req, res) => {
    const responseId = req.params.id;
    const clapAmount = await Clap.count({ where: { responseId }});
    res.json({ clapAmount });
}))

router.post("/:id/clap", asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const storyId = req.params.id;
    const clap = await Clap.create({
      userId,
      storyId
    })
    const clapAmount = await Clap.count({ where: { storyId }});
    res.json({ clapAmount });
  }));

  router.post("/:storyId/responses/:responseId/clap", asyncHandler(async(req, res) => {
    const userId = req.user.id;
    const responseId = req.params.responseId;
    const clap = await Clap.create({
        userId,
        responseId
    })
    const clapAmount = await Clap.count({ where: { responseId }});
    res.json({ clapAmount });
}));

router.get('/', asyncHandler(async (req, res, next) => {
  const userId  = req.user.id;
  const stories = await Story.findAll({
    where: { userId },
    include: [
      { model: User, as: "user", attributes: ["username"] },
      {
        model: StoryGenre,
        include: Genre,
      }
    ],
    order: [["createdAt", "DESC"]]
  })
  res.json({ stories })
}))

const storyNotFoundError = (id) => {
  const err = new Error('Story not found!');
  err.title = [`Story with id of ${id} not found!`];
  err.status = 404;
  return (err)
}

router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
  const storyId = parseInt(req.params.id, 10);
  const story = await Story.findByPk(storyId);
  if (story) {
    res.json({ story })
  } else {
    next(storyNotFoundError(storyId));
  }
}));


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
  const story = await Story.findByPk(storyId);
  if (story) {
    await story.destroy();
  } else {
    next(storyNotFoundError(storyId));
  }
  res.status(204).end()
}))

module.exports = router;
