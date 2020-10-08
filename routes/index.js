const express = require('express');
const router = express.Router();
const csrf = require("csurf");
const csrfProtection = csrf({cookie: true});
const { asyncHandler } = require("../utils");


router.get('/', asyncHandler(async(req, res) => {
  res.render('splash' /*, { csrfToken: req.csrfToken() } */);
}));

// router.get('/login', (req, res) => {
//   res.render('log-in');
// })

// router.get('/', (req, res) => {
//   res.render('main');
// });
module.exports = router;
