const express = require("express");
const router = express.Router();
const { asyncHandler } = require("../utils");
const {User, Story} = require("../db/models");


router.post('/', asyncHandler(async (req, res, next) => {
  const { title, body } = req.body;
  const story = await Story.create({
    title,
    body,
    userId: req.user.id
  });
  res.redirect('/stories')
}))








module.exports = router;
