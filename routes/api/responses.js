const express = require('express');
const router = express.Router();
const db = require('../../db/models');
const { Response, User } = db;
const { asyncHandler } = require('../../utils');
const { requireAuth } = require('../../auth');

router.use(requireAuth);
router.get('/', requireAuth, asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const responses = await Response.findAll({
      where: { userId },
      include: [{ model: User, attributes: ["username"] }],
      order: [["createdAt", "DESC"]],
      attributes: ["body"],

    });
    res.json({ 'Success': "successful" });
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
