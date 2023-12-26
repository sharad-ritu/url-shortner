const { getUser } = require('../services/auth');

const isLoggedIn = async (req, res, next) => {
    const uid = req.cookies?.userId;
    if(!uid) return res.redirect('/login');

    const user = getUser(uid);

    if (!user) return res.redirect('/login');

    req.user = user;
    next();
};

module.exports = { isLoggedIn };