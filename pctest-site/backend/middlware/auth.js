const db = require ("../models");
const User = db.users;
const Message = db.messages;
const Op = db.Sequelize.Op;
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports.token = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.RANDOM_TOKEN_SECRET);
        const userId = decodedToken.userId;
        const user = decodedToken.user;
        User.findOne({
            where: {
                token: token,
                userId: userId,
                user: user
            }
        })
            .then(user => {
                if (user) {
                    req.user = userId;
                    req.token = token;
                    req.user = User;
                    next();
                } else {
                    res.status(401).json({
                        message: "Unauthorized 01"
                    });
                }
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message
                });
            });
    } else {
        res.status(401).json({
            message: "Unauthorized 02"
        });
    }
};