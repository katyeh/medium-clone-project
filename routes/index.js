const express = require('express');
const router = express.Router();

router.get('/stories/create', (req, res) => {
  res.render('stories-create');
});

module.exports = router;
