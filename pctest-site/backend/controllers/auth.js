const db = require("../models");
// const Sequelize = db.Sequelize
const User = db.Users;
const { jsonWebTokenError } = require('jsonwebtoken');
const jwt = require('jsonwebtoken');
// const Op = db.Sequelize.Op;
// const { User } = db.sequelize.models;
const dotenv = require('dotenv');
dotenv.config();

exports.signUp = (req, res) => {
    console.log(signUp);
    let newMail = req.body.email
    User.findOne({
        where: {
            email: newMail
        },
        attributes: ['email'],
    })
        .then(user => {
            if (!user) {
                const user = new User({
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    phone: req.body.phone,

                });
                console.log("Console log : user")
                console.log(user)
                user.create({
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    phone: req.body.phone,
                }).then(newUser => {
                    res.status(201).json({ newUser, message: "Compte créé !!! " });
                }).catch(err => {
                    res.status(500).json({ message: err.message || "Failed! Email is already in use!" });
                })
            }

        }).catch(err => {
            return res.status(400).send({
                message: "Failed! Email is already in use!"
            });
        })


        .then(data => {
            res.send(data);
        }).catch({
            message: err.message || "Some error occurred while creating the User."
        })
};