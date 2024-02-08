const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
// const Config = require('./config/config');


dotenv.config();
require('./config/config');

//configuration des routes
const authRoutes = require('./routes/auth');
const messageRoutes = require('./routes/messages');
const userRoutes = require('./routes/users');

//lancement du framework d'application Web
const app = express();


app.use(cors());
app.use(express.json());


//Configuration des cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Credentials', true);
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// Gestion des erreurs serveur (dev)
app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);

    res.status(500).json({
        message: "erreur serveur pctest-site",
        error: err
    });
});
//config database sequelize
const db = require('./models');
const User = db.users;
const Message = db.messages;
db.sequelize.sync()
    .then(() => {
        // initial();
        console.log('La base de donnee est connecte');
    })
    .catch((err) => {
        console.log(err);
    });

    // function initial() {
    //     User.findOrCreate({
    //         where: {
    //             email: "admin@gmail.com"
    //         },
    //         defaults: {
    //             firstname: "admin",
    //             lastname : "admin",
    //             email: "admin@gmail.com",
    //             phone: "0000000000",
    //             isAdmin: true
                
    //         }
    //     }).then((data) => {
    //         console.log(data[1]);
    //     }).catch((err) => {
    //         console.log(err);
    //     });
        
    // };
module.exports = app;

// const port = 3001;
