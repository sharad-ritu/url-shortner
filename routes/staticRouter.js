const express = require('express');
const router = express.Router();
const { getUrls } = require('../controllers/url');

router.get('/', getUrls);

module.exports = router;