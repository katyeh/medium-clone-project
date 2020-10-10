const express = require('express');
const { Story, Genre, User, Follower } = require('../db/models');
const { asyncHandler } = require('../utils');
const router = express.Router();
const fetch = require('node-fetch');

// const userId = localStorage.getItem("READIUM_CURRENT_USER_ID", id);
const userId = 1

router.get('/', asyncHandler(async(req, res) => {
  // const userId = getUserId();
  const storiesRes = await fetch('http://localhost:8080/api/stories/main');

  const { newStories, trendingStories, suggestionStories } = await storiesRes.json();
  res.render("main", {
    newStories,
    trendingStories,
    suggestionStories,
  });

  // if (newStoriesRes.status === 401) {
  //   return (window.location.href = "log-in");
  // }
}));

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

router.get('/story/:id', asyncHandler(async (req, res) => {
    const storyId = req.params.id
    const story = await Story.findOne({
        where: {
            id: storyId
        }
    });
    const userId = story.userId
    const user = await User.findByPk(userId);

    res.render('story', { story, user });
}));

// router.get('/login', (req, res) => {
//   res.render('log-in');
// })




module.exports = router;
