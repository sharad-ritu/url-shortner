const express = require('express');

const router = express.Router();

const { GenerateNewShortURL, HandleRedirect, HandleAnalytics } = require('../controllers/url');

router.post('/', GenerateNewShortURL);

router.get('/:shortId', HandleRedirect);

router.get('/analytics/:shortId', HandleAnalytics);

module.exports = router;