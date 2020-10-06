const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { Response } = db;
const { asyncHandler } = require('../utils');

router.get('/', asyncHandler(async (req, res) => {
    const responses = await Response.findAll({
        include: [{ model: User, as: "user", attributes: ["username"] }],
        order: [["createdAt", "DESC"]],
        attributes: ["body"],
    });
    res.json({ responses });
}));

module.exports = router;
