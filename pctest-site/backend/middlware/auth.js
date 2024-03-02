const db = require ("../models");
const User = db.User;
const Message = db.Message;
const jwt = require('jsonwebtoken');
const emailSchema = require('validator');
const passwrdValidator = require('password-validator');
require('dotenv').config(); 

module.exports.token = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.RANDOM_TOKEN_SECRET);
        console.log('secret is', decodedToken);
        const userId = decodedToken.userId;
        User.findOne({ where: { id: userId } }).then((user) => {
            if (user) {
                req.token = token;
                req.user = userId;
                next();
            } else {
                return res.status(401).send({
                    message: "Aucun utilisateur trouvé avec ce jeton !",
                });
            }
        });
    } catch (error) {
        res.status(403).json({ error: error + 'Requête non authentifiée !' });
    }
};
module.exports.email = (req, res, next) => {
    if (emailSchema.isEmail(req.body.email)) {
        next();
    } else {
        return res.status(400).json({
            message: "Veuillez saisir un email valide !!!"
        });
    }
};
const passwdSchema = new passwrdValidator();
passwdSchema
    .is().min(8).is().max(100).has().uppercase(1).has().lowercase(1)
    .has().digits(2).has().not().spaces()
    .is().not().oneOf(['Passw0rd', 'Password123']);
module.exports.passwd = (req, res, next) => {
    if (passwdSchema.validate(req.body.password)) {
        next();
    } else {
        return res.status(400).json({
            message: "Mot de passe faible, au moins 8 caractères dont deux chiffres, une lettre majuscule et minuscule."
        })
    }
};
const confirmPasswdSchema = new passwrdValidator();
confirmPasswdSchema
    .is().min(8).is().max(100).has().uppercase(1).has().lowercase(1)
    .has().digits(2).has().not().spaces().is().not().oneOf(['Passw0rd', 'Password123']);
module.exports.confirmPasswd = (req, res, next) => {
    if (confirmPasswdSchema.validate(req.body.newPasswd)) {
        next();
    } else {
        return res.status(400).json({
            message: "Mot de passe faible, au moins 8 caractères dont un chiffre, une lettre majuscule, et minuscule"
        })
    }
};