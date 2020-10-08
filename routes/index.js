const express = require('express');
const router = express.Router();
const { Story, Genre } = require('../db/models');
const { asyncHandler } = require('../utils')

router.get('/stories/create', asyncHandler(async (req, res) => {
  const stories = await Story.findAll({})
  const genres = await Genre.findAll({})
  res.render('stories-create', { stories, genres });
}));

module.exports = router;
