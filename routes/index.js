const express = require('express');
// const csrfProtection = require('./csrf')
// const csrf = require('csurf');
const { Story, Genre } = require('../db/models');
const { asyncHandler } = require('../utils');
const router = express.Router();

// const csrfProtection = csrf({ cookie: true });

router.get('/', asyncHandler(async(req, res) => {
  res.render('splash', {
      csrfToken: req.csrfToken()
    })
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

router.get('/story/:id', asyncHandler(async (req, res) => {
    const storyId = req.params.id
    const story = await Story.findOne({ where: {id: storyId} })
    res.render('story', {
        story
    });
}));

// router.get('/login', (req, res) => {
//   res.render('log-in');
// })

// router.get('/', (req, res) => {
//   res.render('main');
// });
// router.get('/splash', asyncHandler(async(req, res) => {
//   res.render('splash', { csrfToken: req.csrfToken() });
// }));



module.exports = router;
