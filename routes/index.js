const express = require('express');
const router = express.Router();
const csrf = require("csurf");
const csrfProtection = csrf({cookie: true});
const { asyncHandler } = require("../utils");


router.get('/', csrfProtection, asyncHandler(async(req, res) => {
  res.render('splash', { csrfToken: req.csrfToken() });
}));

module.exports = router;
