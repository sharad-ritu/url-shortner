const express = require('express');
const app = express();
require('dotenv').config();
const urlRoutes = require('./routes/url');
const connectToMongoDB = require('./connection/connect');
const PORT = 5000;

app.use(express.json());
app.use('/url', urlRoutes);

const start = async () => {
    try {
        await connectToMongoDB(process.env.MONGO_URI);
        app.listen(PORT, () =>
            console.log(`Server is listening on port ${PORT}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();