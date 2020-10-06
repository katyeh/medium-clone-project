const express = require("express");
const router = express.Router();
const { asyncHandler } = require("../utils");
const { User, Follower} = require("../db/models");


router.post("/follow", asyncHandler(async(req, res) => {
    const { followerId, followeeId } = req.body;
    await Follower.create({
        followeeId,
        followerId
    });
    res.end();
}));

module.exports = router;
