const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/post', (req, res, next) => res.render('post/post-form'));

module.exports = router;
