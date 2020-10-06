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

router.get('/', asyncHandler(async (req, res) => {
    const responses = await Response.findAll({
        include: [{ model: User, as: "user", attributes: ["username"] }],
        order: [["createdAt", "DESC"]],
        attributes: ["body"],
    });
    res.json({ responses });
}));








module.exports = router;
