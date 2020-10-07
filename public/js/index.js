const express = require('express');

const db = require('../../db/models');
const { asyncHandler } = require('../../utils');
const { Genre, Story } = db;
const router = express.Router();

const createStoryForm = document.querySelector('.create-story-form');

createStoryForm
const res = await fetch('/api/index', {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(
            "READIUM_ACCESS_TOKEN"
        )}`,
    },
});



module.exports = router;
