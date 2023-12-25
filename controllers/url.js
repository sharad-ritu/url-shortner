const shortid = require('shortid');
const URL = require('../models/url');

const GenerateNewShortURL = async (req, res) => {
    const body = req.body;
    if(!body.url)
    {
        res.status(400).json({error: 'URL is required'});
    }
    const shortID = shortid();
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
    });

    res.render('home', { id: shortID});
};

const HandleRedirect = async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            },
        }
    );
    res.redirect(entry.redirectURL);
};

const HandleAnalytics = async (req, res) => {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    });
};

const getUrls = async (req, res) => {
    const allUrls = await URL.find({});
    return res.render('home', { urls: allUrls});
};

module.exports = {GenerateNewShortURL, HandleRedirect, HandleAnalytics, getUrls};