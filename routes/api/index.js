const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('hihi')
  res.render('main');
});

module.exports = router;