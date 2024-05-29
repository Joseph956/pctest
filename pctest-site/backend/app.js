const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { sequelize } = require('../../pctest-site/backend/models');
dotenv.config();
require('./config/config');

//configuration helmet
const helmet = require('helmet');

//configuration des routes
const authRoutes = require('./routes/auth');
const messageRoutes = require('./routes/messages');
const userRoutes = require('./routes/users');

//lancement du framework d'application Web
const app = express();


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

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

// stocke le jeton "JWT" dans la session.
app.use(session({
    name: "sessionId",
    secret: process.env.COOKIE_SESSION,
    secure: true, //garantie que le navigateur envoie le cookie sur https uniquement.
    httpOnly: true, //Evite les attaques Cross-site-scripting.
    cookie: { maxAge: 600000 }//jeton stocké pendant 10 min
}));




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
const db = require('../../pctest-site/backend/models');
const bcrypt = require("bcrypt");
const User = db.User;
const Role = db.Role;
const Message = db.Message;
db.sequelize.sync()
    .then(() => {
        initial();
        console.log('La base de donnee est connecte');
    })
    .catch((err) => {
        console.log(err);
    });

function initial() {
    // CREATE USER ROLE;
    Role.findOrCreate({
        where: { role: "user" },
        defaults: {
            role: "user"
        }
    });
    // CREATE ADMIN ROLE;
    Role.findOrCreate({
        where: { role: "admin" },
        defaults: {
            role: "admin"
        }
    }).then(createdRole => {
        User.findOrCreate({
            where: {
                email: "admin@gmail.com",
            },
            defaults: {
                firstname: "admin",
                lastname: "admin",
                email: "admin@gmail.com",
                phone: "0000000000",
                password: "Admin4548$",
                password: bcrypt.hashSync("Admin4548$", 4),
                isAdmin: createdRole[0].id,
                RoleId: createdRole[0].id
            }
        }).then(createdUser => {
            console.log('admin : ', createdUser);
        }).catch((err) => {
            console.log(err);
        });

    }).catch((err) => {
        console.log(err);
    })

};
module.exports = app;

// const port = 3001;
