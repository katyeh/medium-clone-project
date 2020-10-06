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

const responseNotFound = (id) => {
    const err = Error(`Response with the id of ${id} could not be found.`);
    err.title = "Response not found.";
    err.status = 404;
    return err;
};

router.delete('/:id(\\d+)',
    asyncHandler(async (req, res, next) => {
        const responseId = parseInt(req.params.id, 10);
        const response = await Response.findByPk(responseId);

        if (response) {
            await response.destroy();
            res.status(204).end();
        } else {
            next(responseNotFound(responseId));
        }
    }))

module.exports = router;
