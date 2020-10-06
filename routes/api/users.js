const express = require("express");
const bcrypt = require('bcrypt');
const { User } = require("../../db/models");

const router = express();

router.get("/:id", async (req, res) => {});

router.post("/", async (req, res) => {
  const { fullName, username, email, password } = req.body;

  console.log(req.body);
  // const user = await User.create({});
});
router.get("/token", async (req, res) => {});

module.exports = router;