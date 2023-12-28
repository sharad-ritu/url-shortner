//Statefull
// const sessionIdToUserMap = new Map();

// function setUser(id, user) {
//     sessionIdToUserMap.set(id, user);
// }

// function getUser(id) {
//     return sessionIdToUserMap.get(id);
// }

// module.exports = {
//     setUser,
//     getUser,
// }

//Stateless
const jwt = require('jsonwebtoken');

const secret = 'gandu-gandu-###';

function setUser(user) {
    return jwt.sign(user, secret);
}

function getUser() {

}