const express = require("express");
const router = express.Router();
const db = require('../db/models');
const { asyncHandler, handleValidationErrors } = require("../../utils");
const { check, validationResult } = require('express-validator');
const {User, Story, Response } = db;
const express = require('express');
const router = express.Router();
const { requireAuth } = require('../auth');

router.use(requireAuth);

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
  const { storyId } = req.body;
  const responses = await Response.findAll({
    where: { storyId },
    include: [{ model: User, as: "user", attributes: ["username"] }],
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

module.exports = router;
