const express = require('express');
const router = express.Router();
const { getUrls } = require('../controllers/url');

router.get('/', getUrls);
router.get('/register', (req, res) => {
    return res.render('register');
});

router.get('/login', (req, res) => {
    return res.render('login');
});

module.exports = router;