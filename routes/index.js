const readingTime = require('reading-time');
const express = require('express');
const { Story, Genre, User, Follower, StoryGenre, Clap, Response } = require('../db/models');
const { asyncHandler } = require('../utils');
const router = express.Router();
// const userId = localStorage.getItem("READIUM_CURRENT_USER_ID", id);
// const userId = 1
const fetch = require('node-fetch');
const host = 'localhost';
const { port } = require('../config');

router.get('/main', asyncHandler(async(req, res) => {
  const storiesRes = await fetch(`http://${host}:${port}/api/stories/main`);

  // console.log('!!!!!!!!!!!', readingTime('hello').text);
  const { newStories, trendingStories, suggestionStories } = await storiesRes.json();
  res.render("main", {
    newStories,
    trendingStories,
    suggestionStories,
    readingTime,
  });

  if (storiesRes.status === 401) {
    return (window.location.href = "/log-in");
  }
}));

router.get('/', asyncHandler(async(req, res) => {
  res.render('splash', {
    //   csrfToken: req.csrfToken()
    })
}));

router.get(
  "/users/:id/profile",
  asyncHandler(async (req, res) => {
    // Change data fetch
    const userId = req.params.id;
    const data = await fetch(
      `http://${host}:${port}/api/users/${userId}/profile`
    );
    const {
      userAndStories,
      followingAmount,
      followerAmount,
    } = await data.json();
    const dateFormatter = require("./dateFormatter");

    let dateInfo = {};
    dateInfo.title = "Demo";
    dateInfo.dateFormatter = dateFormatter;

    res.render("profile-main", {
      user: userAndStories,
      stories: userAndStories.Stories,
      followingAmount,
      followerAmount,
      dateInfo,
    });
  })
);

router.get("/users/:id/profile/claps", asyncHandler(async(req, res) => {
  const userId = req.params.id;
  const data = await fetch(
    `http://${host}:${port}/api/users/${userId}/profile/claps`
  );
  const { user, clapAndStories, followingAmount, followerAmount } = await data.json();
  const dateFormatter = require("./dateFormatter");

  let dateInfo = {};
  dateInfo.title = "Demo";
  dateInfo.dateFormatter = dateFormatter;

  const stories = clapAndStories.map(clap => {
    return clap.Story
  })

  res.render("profile-claps", {
    user: user,
    stories: stories,
    followingAmount,
    followerAmount,
    dateInfo
  })
}));

router.get("/users/:id/profile/responses", asyncHandler(async(req, res) => {
  const userId = req.params.id;
  const data = await fetch(
    `http://${host}:${port}/api/users/${userId}/profile/responses`
  );
  const { user, responseAndStories, followingAmount, followerAmount } = await data.json();
  const dateFormatter = require("./dateFormatter");

  let dateInfo = {};
  dateInfo.title = "Demo";
  dateInfo.dateFormatter = dateFormatter;

  const stories = responseAndStories.map(response => {
    return response.Story
  })

  res.render("profile-responses", {
    user: user,
    stories: stories,
    followingAmount,
    followerAmount,
    dateInfo
  })
}));

router.get('/users/:id/profile/following', async(req, res) => {
  const userId = req.params.id;
  const data = await fetch(
    `http://${host}:${port}/api/users/${userId}/profile/following`
  );
  const { user, followerAmount, followingAmount } = await data.json();

  res.render('following', {
    user,
    followees: user.followees,
    followerAmount,
    followingAmount
  });
})

router.get('/users/:id/profile/followers', async(req, res) => {
  const userId = req.params.id;
  const data = await fetch(
    `http://${host}:${port}/api/users/${userId}/profile/followers`
  );
  const { user, followerAmount, followingAmount } = await data.json();

  res.render('followers', {
    user,
    followers: user.followers,
    followerAmount,
    followingAmount
  });
})

router.get('/stories/create', asyncHandler(async (req, res) => {
  const stories = await Story.findAll({})
  const genres = await Genre.findAll({})
  res.render('stories-create', {
      stories,
      genres,
    //   csrfToken: req.csrfToken()
    });
}));

router.get('/stories/:id/edit', asyncHandler(async (req, res) => {
    const storyId = req.params.id;
    const story = await Story.findByPk(storyId)
    const genres = await Genre.findAll({})
    res.render('edit-story', {
        story,
        genres,
        // csrfToken: req.csrfToken()
    });
}));

router.get('/stories/:id', asyncHandler(async (req, res) => {
    const storyId = req.params.id
    const story = await Story.findOne({
        where: {
            id: storyId
        },
        include: StoryGenre, Clap, Response
    });
    const data = await fetch(`http://${host}:${port}/api/stories/${storyId}/responses`);
    const { responses } = await data.json()

    const responseAmount = await Response.count({ where: { storyId }});
    const clapAmount = await Clap.count({ where: { storyId }});
    function monthName(mon) {
        return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'][mon - 1];
     }

     // Gets reading time estimate
    const stats = readingTime(story.body)
    const readTime = stats.text
    // Variables for created at date
    const monthNum = story.createdAt.slice(5,7);
    const month = monthName(monthNum);
    const year = story.createdAt.slice(0, 4);
    const date = month + " " + story.createdAt.slice(8,10) + ", " + year
    const userId = story.userId;
    const user = await User.findByPk(userId);

    // responses.forEach(response => {
    //   console.log(response.User)
    // })
    res.render('story', { story, user, date, readTime, clapAmount, responseAmount, responses});
}));


module.exports = router;
