const express = require("express");
const { User } = require("../../db/models");
const { asyncHandler, hashPassword } = require("../../utils");

const router = express();

router.get("/:id", asyncHandler(async (req, res, next) => {

}));

router.post("/", asyncHandler(async (req, res, next) => {
  const { fullName, username, email, password } = req.body;
  console.log('hi')

  const hashedPassword = await hashPassword(password);
  const user = await User.create({
    fullName,
    username,
    email,
    hashedPassword
  });
}));

router.get("/token", asyncHandler(async (req, res, next) => {

}));

module.exports = router;