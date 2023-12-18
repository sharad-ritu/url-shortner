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

    return res.json({id: shortID});
};

const HandleRedirect = async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push: {
                vistiHistory: {
                    timestamp: Date.now(),
                },
            },
        }
    );
    res.redirect(entry.redirectURL);
};

module.exports = {GenerateNewShortURL, HandleRedirect};