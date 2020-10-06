const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { Response } = db;
const { check, validationResult } = require('espress-validator');
const { asyncHandler, handleValidationErrors } = require('../utils');
const { requireAuth } = require('../auth');

router.use(requireAuth);

const validateResponse = [
    check('body')
        .exists({ checkFalsy: true })
        .withMessage("Response can't be empty.")
        .isLength({ max: 255 })
        .withMessage("Response can't be longer than 255 characters.")
];

router.get('/', asyncHandler(async (req, res) => {
    const responses = await Response.findAll({
        include: [{ model: User, as: "user", attributes: ["username"] }],
        order: [["createdAt", "DESC"]],
        attributes: ["body"],
    });
    res.json({ responses });
}));

module.exports = router;
