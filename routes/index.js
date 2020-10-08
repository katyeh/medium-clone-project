const express = require('express');
const router = express.Router();
const { Story, Genre } = require('../db/models');

router.get('/stories/create', (req, res) => {
  const stories = Story.findAll({})
  const genres = Genre.findAll({})
  res.render('stories-create', { stories, genres });
});

module.exports = router;
