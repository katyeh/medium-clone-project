const express = require('express');
// const csrfProtection = require('./csrf')
// const csrf = require('csurf');
const { Story, Genre, User } = require('../db/models');
const { asyncHandler } = require('../utils');
const router = express.Router();
// const userId = localStorage.getItem("READIUM_CURRENT_USER_ID", id);
const userId = 1

router.get('/', asyncHandler(async(req, res) => {
  res.render('splash', {
      csrfToken: req.csrfToken()
    })
}));

// router.get('/', (req, res) => {
//   res.render('main');
// });

router.get('/profile', asyncHandler(async (req, res) => {
  const stories = await Story.findAll({ where: { userId }})
  const user = await User.findAll({ where: { id: userId }})
  res.render('profile', {
    stories,
    user
  });
}));


router.get('/stories/create', asyncHandler(async (req, res) => {
  const stories = await Story.findAll({})
  const genres = await Genre.findAll({})
  res.render('stories-create', {
      stories,
      genres,
      csrfToken: req.csrfToken()
    });
}));





module.exports = router;
