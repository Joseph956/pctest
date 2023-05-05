const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
require('vue.config');

//lancement du framework d'application Web
const app = express();


app.use(cors());
app.use(express.json());

//Configuration des cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
module.exports = app;

// const port = 3001;
