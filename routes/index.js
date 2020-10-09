const express = require('express');
const { Story, Genre, User, Follower } = require('../db/models');
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
  const followingAmount = await Follower.count({where: {followeeId: userId}})
  const followerAmount = await Follower.count({where: {followerId: userId}})
  res.render('profile-layout', {
    stories,
    user,
    followingAmount,
    followerAmount
  });
}));

router.get("/profile/claps", asyncHandler(async(req, res) => {

  res.render("profile-claps")
}));

router.get("/profile/responses", asyncHandler(async(req, res) => {

  res.render("profile-responses")
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
