const db = require('../models');
const User = db.User;
const Role = db.Role;
const { jsonWebTokenError } = require('jsonwebtoken');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

exports.signUp = (req, res, next) => {
    let newEmail = req.body.email;
    User.findOne({
        where: {
            email: newEmail
        },
        attributes: ['email'],
    }).then(user => {
        if (!user) {
            bcrypt.hash(req.body.password, 10)
                .then(hash => {
                    const user = new User({
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        phone: req.body.phone,
                        email: req.body.email,
                        password: hash,
                    });
                    Role.findOne({
                        where: { role: "user" },
                        defaults: {
                            role: "user"
                        }
                    }).then(role => {
                        if (role != null) {
                            console.log('Creation de l\'utilisateur : ', user);
                            user.isAdmin = role.id;
                            User.create({
                                firstname: req.body.firstname,
                                lastname: req.body.lastname,
                                phone: req.body.phone,
                                email: req.body.email,
                                password: hash,
                                isAdmin: role.id
                            }).then(function (newUser) {
                                res.status(201).json({ newUser, message: "Compte créé !!! " });
                            }).catch(function (error) {
                                if (error.parent.code === 'ER_DUP_ENTRY') {
                                    //here you can handle this error;
                                } else {
                                    // here you can handle other errors;:
                                    res.status(400).json({ error, message: "Votre compte n'\a pas été créé !!!" })
                                }
                            })
                        } else {
                            res.status(400).json({ error, message: "Le rôle utilisateur ne peut pas être défini !!! " });
                        }
                    }).catch((error) => {
                        res.status(400).json({ error, message: "Le rôle utilisateur n'\a pas été trouvé !!! " });
                    });
                }).catch((error) => {
                    res.status(400).json({ error, message: "Le mot de passe n'\est pas défini !!! " });
                });
        } else {
            res.status(400).json({
                error, message: "Cet email est déjà utilisé !!! "
            })
        }
    }).catch(error => res.status(409).json({
        error, message: 'Cet utilisateur existe déjà !!! '
    }));
};
exports.signIn = (req, res) => {
    let email = req.body.email;
    if (email === email) {
        console.log('email : ', req.body.email);
        User.findOne({
            where: {
                email: req.body.email,
            }
        }).then((user) => {
            if (!user) {
                return res.status(401).json({
                    error, message: "Vous n'êtes pas autorisé à vous connecter sur ce compte utilisateur !!!"
                });
            } else {
                bcrypt.compare(req.body.password, user.password)
                    .then((valid) => {
                        console.log(req.body.password, user.password);
                        if (!valid) {
                            return res.status(403).json({
                                error, message: "'Vous n'\avez pas les droits necessaires pour vous connecter  !!!'"
                            });
                        }
                        //GET LOGGED USER ROLE
                        Role.findOne({
                            where: { id: user.isAdmin }
                        }).then(isAdmin => {

                            res.status(200).json({
                                userId: user.id,
                                Role: isAdmin,
                                token: jwt.sign({
                                    userId: user.id,
                                    Role: isAdmin,
                                },
                                    process.env.RANDOM_TOKEN_SECRET, { expiresIn: '24h' })
                            });
                        })
                    }).catch((error) => {
                        console.log(error);
                        res.status(401).json({
                            error, message: "Votre mot de passe n'\est pas valide !!! "
                        })
                    });

            }
        }).catch((error) => res.status(400).json({
            error, message: "Cet email n'\existe pas !!! "
        }));

    } else {
        res.status(500).json({ error, message: "Ooops erreur server !!!" });
    }

};