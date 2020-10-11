const express = require("express");
const { check } = require('express-validator');
const { User, Follower, Story, Clap, Response } = require("../../db/models");
const { asyncHandler, hashPassword, handleValidationErrors } = require("../../utils");
const { getUserToken, requireAuth } = require('../../auth');
const csrf = require("csurf");
const csrfProtection = csrf({cookie: true});

const router = express();

const userValidation = [
  check("fullName")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a valid name.")
    .isLength({ max: 55 })
    .withMessage("Name cannot be over 55 characters long.")
    .custom((value) => {
      if (value.split(" ").length < 2) {
        throw new Error(
          "You must enter both first name and last name, separated by a space."
        );
      }
      return true;
    })
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("Name must only contain alphabets."),
];

const usernameValidation = [
  check("username")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a valid username.")
    .isLength({ min: 5 })
    .withMessage("Username must be longer than 5 characters.")
    .isLength({ max: 40 })
    .withMessage("Username cannot be over 40 characters long.")
    .matches(/^\w+$/)
    .withMessage(
      "Username must only contain alphabets, numbers, and _(underscores)."
    )
    .custom((value) => {
      return User.findOne({ where: { username: value } }).then((user) => {
        if (user) {
          throw new Error(
            "The provided username is already used by another account."
          );
        }
        return true;
      });
    }),
];

const emailAndPasswordValidation = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please enter a valid email.")
    .isLength({ max: 55 })
    .withMessage("Email address cannot be over 55 characters long.")
    .custom((value) => {
      return User.findOne({ where: { email: value } }).then((user) => {
        if (user) {
          throw new Error(
            "The provided email address is already used by another account."
          );
        }
        return true;
      });
    }),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a valid password.")
    .isLength({ min: 8 })
    .withMessage("Password must be longer than 8 characters.")
    .custom((value) => {
      if (value.split(" ").length > 1) {
        throw new Error("Password cannot have spaces.");
      }
      return true;
    })
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, "g")
    .withMessage(
      "Password must have at least one lower-case letter, upper-case letter, number, and special character(!@#$%^&*)."
    ),
  check("confirmPassword")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value to confirm password.")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("The password fields must match.");
      }
      return true;
    }),
];

const userNotFoundError = id => {
  const err = new Error('User not found.');
  err.errors = [`User with id of ${id} could not be found.`];
  err.title = 'User not found';
  err.status = 404;
  return err;
};

router.post("/",
  userValidation,
  usernameValidation,
  emailAndPasswordValidation,
  handleValidationErrors,
  asyncHandler(async (req, res, next) => {
  let { fullName, username, email, password, picUrl } = req.body;

  const hashedPassword = await hashPassword(password.trim());

  fullName = fullName.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');

  if (!picUrl) {
    picUrl = "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"
  }

  const user = await User.create({
    fullName: fullName.trim(),
    username: username.trim(),
    email: email.toLowerCase().trim(),
    picUrl,
    hashedPassword
  });

  const token = getUserToken(user);
  res.status(201).json({
    user: { id: user.id },
    token,
  });
}));

router.get('/:id/main', asyncHandler(async (req, res, next) => {
  const followingUsers = await Follower.findAll({
    where: {
      followerId: req.params.id
    },
    limit: 8
  });

  res.json({
    followingUsers,
  });
}))

router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res, next) => {
    // TODO: Must validate token to check if the user has authority to view the info!

    const user = await User.findOne({
      where: { id: req.params.id },
    });

    if (user) {
      res.json({ user: { fullName: user.fullName, email: user.email, picUrl: user.picUrl } });
    } else {
      next(userNotFoundError(req.params.id));
    }
  })
);

router.delete('/:id(\\d+)', asyncHandler(async (req, res, next) => {
  // TODO: Must validate token to check if the user has authority to delete the user info!!

  const user = await User.findOne({
    where: { id: req.params.id },
  });

  if (user) {
    await user.destroy();
    res.json({ message: `Deleted user with username of ${user.username}.` });
  } else {
    next(userNotFoundError(req.params.id));
  }
}));

router.post("/token",
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a valid email address.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a valid password.'),
  asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email },
    });

    if (!user || !user.validatePassword(password)) {
      const err = new Error("Login failed.");
      err.status = 401;
      err.title = "Login failed";
      err.errors = ["The provided credentials were invalid."];
      return next(err);
    }

    const token = getUserToken(user);
    res.json({token, user: { id: user.id, picUrl: user.picUrl } });
}));

router.post("/follow", asyncHandler(async(req, res) => {
    const { followerId, followeeId } = req.body;
    await Follower.create({
        followeeId,
        followerId
    });
    res.end();
}));

router.get("/:id/profile", asyncHandler(async(req, res) => {
  const id = req.params.id;
  const userAndStories = await User.findByPk(id,{
    include: Story
  })
  console.log(userAndStories);
  const followerAmount = await Follower.count({where: {followeeId: id}})
  const followingAmount = await Follower.count({where: {followerId: id}})
  res.json({userAndStories, followingAmount, followerAmount})
}))

router.get("/:id/profile/claps", asyncHandler(async(req, res) => {
  const userId = req.params.id;
  const user = await User.findByPk(userId);

  const clapAndStories = await Clap.findAll({
    where: { userId },
    include: [ { model: Story, include: [{ model: User, as: "user" }] }  ]
  })

  const storyIds = clapAndStories.map(obj => {
    return obj.Story.id
  })

  // const clapAmount = storyIds.map(async id => {
  //   let count = await Clap.count({ where: { storyId: id }});
  //   return count;
  // })

  // await clapAmount;

  // console.log(clapAmount)

  const followerAmount = await Follower.count({where: {followeeId: userId}})
  const followingAmount = await Follower.count({where: {followerId: userId}})
  res.json({user, clapAndStories, followingAmount, followerAmount})
}))

router.get("/:id/profile/responses", asyncHandler(async(req, res) => {
  const userId = req.params.id;
  const user = await User.findByPk(userId);
  const responseAndStories = await Response.findAll({
    where: { userId },
    include: [ { model: Story, include: [{ model: User, as: "user" }] }  ]
  })

  // console.log(responseAndStories)
  const followerAmount = await Follower.count({where: {followeeId: userId}})
  const followingAmount = await Follower.count({where: {followerId: userId}})
  res.json({user, responseAndStories, followingAmount, followerAmount})
}));

router.get("/:id/profile/following", asyncHandler(async(req, res) => {
  const followerId = req.params.id;
  const user = await User.findOne({
    where: { id: followerId },
    include: [ { model: User, as: "followees"} ]
  })
  const followerAmount = await Follower.count({where: {followeeId: followerId}})
  const followingAmount = await Follower.count({where: {followerId: followerId}})
  res.json({user, followerAmount, followingAmount});
}));

router.get("/:id/profile/followers", asyncHandler(async(req, res) => {
  const followeeId = req.params.id;
  const user = await User.findOne({
    where: { id: followeeId },
    include: [ { model: User, as: "followers"} ]
  })
  const followerAmount = await Follower.count({where: {followeeId: followeeId}})
  const followingAmount = await Follower.count({where: {followerId: followeeId}})
  res.json({user, followerAmount, followingAmount});
}));

module.exports = router;
