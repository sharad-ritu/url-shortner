const mongoose = require('mongoose');

const connectToMongoDB = (con_str) => {
    return mongoose.connect(con_str);
};

module.exports = connectToMongoDB;