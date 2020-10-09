const express = require('express');
// const csrfProtection = require('./csrf')
// const csrf = require('csurf');
const { Story, Genre } = require('../db/models');
const { asyncHandler } = require('../utils');
const router = express.Router();
const userId = localStorage.getItem("READIUM_CURRENT_USER_ID", id);
// const csrfProtection = csrf({ cookie: true });

router.get('/', asyncHandler(async(req, res) => {
  res.render('splash', {
      csrfToken: req.csrfToken()
    })
}));

// router.get('/', (req, res) => {
//   res.render('main');
// });

router.get('/profile', (req, res) => {
  const stories = await Story.findAll({ where: { userId: userId }})
  console.log(stories);
  // res.render('profile');
})


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
