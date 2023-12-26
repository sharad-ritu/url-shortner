const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

const urlRoutes = require('./routes/url');
const staticRoutes = require('./routes/staticRouter'); 
const userRoutes = require('./routes/user');

const connectToMongoDB = require('./connection/connect');
const PORT = 5000;

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/url', urlRoutes);
app.use('/', staticRoutes);
app.use('/user', userRoutes);

app.get('/home', (req, res) => {
    res.render('home');
})

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