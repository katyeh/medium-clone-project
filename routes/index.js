const express = require('express');
const csrf = require('csurf');
const { Story, Genre } = require('../db/models');
const { asyncHandler } = require('../utils');
const router = express.Router();

const csrfProtection = csrf({ cookie: true });

router.get('/stories/create', csrfProtection, asyncHandler(async (req, res) => {
  const stories = await Story.findAll({})
  const genres = await Genre.findAll({})
  res.render('stories-create', {
      stories,
      genres,
      csrfToken: req.csrfToken()
    });
}));

module.exports = router;
