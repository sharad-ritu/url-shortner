const express = require('express');

const router = express.Router();

const { GenerateNewShortURL } = require('../controllers/url');

router.post('/', GenerateNewShortURL);

module.exports = router;