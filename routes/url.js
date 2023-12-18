const express = require('express');

const router = express.Router();

const { GenerateNewShortURL, HandleRedirect } = require('../controllers/url');

router.post('/', GenerateNewShortURL);

router.get('/:shortId', HandleRedirect);

module.exports = router;