const { v4: uuidv4 } = require('uuid');
const User = require('../models/user');
const { setUser } = require('../services/auth');
const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    await User.create({
        name,
        email,
        password,
    });
    return res.render('login');
};

const handleLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({
        email,
        password,
    });
    if (!user) {
        return res.render('login', { error: 'Invalid username or password.' });
    }
    //const sessionId = uuidv4();
    const token = setUser(user);
    res.cookie('userId', token);
    return res.redirect('/');
};

module.exports = { createUser, handleLogin };