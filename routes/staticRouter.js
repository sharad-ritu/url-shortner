const express = require('express');
const router = express.Router();
const { getUrls } = require('../controllers/url');

router.get('/', getUrls);
router.get('/register', (req, res) => {
    return res.render('register');
});

module.exports = router;