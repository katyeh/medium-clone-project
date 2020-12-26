const express = require("express");
const router = express.Router();
const db = require('../../db/models');
const { asyncHandler, handleValidationErrors } = require("../../utils");
const { check, validationResult } = require('express-validator');
const {User, Story, Response, Clap, StoryGenre, Genre } = db;
const { requireAuth } = require('../../auth');
const { sequelize } = require("../../db/models");
const fetch = require('node-fetch');

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
    requireAuth,
    storyValidator,
    handleValidationErrors,
    asyncHandler(async (req, res, next) => {

  const { title, subtitle, body, genreId} = req.body;
  let collectionId;
  switch(+genreId) {
    case(1): {
      collectionId = 91261971;
      break;
    }
    case(2): {
      collectionId = 91274923;
      break;
    }
    case(3): {
      collectionId = 49463825;
      break;
    }
    case(4): {
      collectionId = 89874913;
      break;
    }
    case(5): {
      collectionId = 64106385;
      break;
    }
    case(6): {
      collectionId = 87237332;
      break;
    }
    case(7): {
      collectionId = 71772644;
      break;
    }
    default: {
      return;
    }
  }

  const imageData = await fetch(`https://source.unsplash.com/collection/${collectionId}`);
  const story = await Story.create({
    title,
    subtitle,
    body,
    userId: req.user.id,
    imageUrl: imageData.url,
  });

  await StoryGenre.create({
    genreId,
    storyId: story.id
  });

  res.redirect('/main');
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
    include: [{ model: User }],
    order: [["createdAt", "DESC"]]
  })
  const count = await Response.count({ where: { storyId }});
  res.json({ responses, count });
}));

router.post(
  '/:id/responses',
  requireAuth,
  validateResponse,
  handleValidationErrors,
  asyncHandler(async (req, res) => {
    const { body } = req.body;
    const response = await Response.create({
      body,
      storyId: req.params.id,
      userId: req.user.id,
    });
    const count = await Response.count({ where: { storyId: req.params.id }});
    res.status(201).json({ response, count });
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
}));

router.post(
    "/:id/clap",
    requireAuth,
    asyncHandler(async (req, res) => {
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

router.get('/main', asyncHandler(async (req, res, next) => {
  const suggestionStories = await Story.findAll({
    include: "user",
    order: sequelize.random(),
    limit: 5,
  });

  const trendingStories = await Story.findAll({
    include: ['user', Clap],
    limit: 6
  });

  const newStories = await Story.findAll({
    order: [['createdAt', 'ASC']],
    include: 'user',
  });

  res.json({
    suggestionStories,
    trendingStories,
    newStories,
  });
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


router.put('/:id(\\d+)', requireAuth, storyValidator, handleValidationErrors, asyncHandler(async (req, res, next) => {
  const storyId = req.params.id;
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

router.delete('/:id', requireAuth, asyncHandler(async (req, res, next) => {
  const storyId = req.params.id;
  const story = await Story.findByPk(storyId);
    // const story = await Story.findOne({
    //     where: {
    //         id: req.params.id,
    //     },
    // });
   if (req.user.id !== story.userId) {
      const err = new Error("Unauthorized");
      err.status = 401;
      err.message = "You are not authorized to delete this story.";
      err.title = "Unauthorized";
      throw err;
  }
  if (story) {
    await story.destroy();
    res.json({ message: `Deleted the story with id of ${storyId}` });
  } else {
    next(storyNotFoundError(storyId));
  }
  res.status(204).end()
}))

module.exports = router;
