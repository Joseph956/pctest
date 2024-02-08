const db = require("../models");
const User = db.users;
const Message = db.messages;
const dotenv = require('dotenv');
dotenv.config();

// Create and Save a new User
exports.createUser = async (req, res) => {
    let userObject = req.body;
    console.log('CONTENU : req.body')
    console.log(req.body)
    try {
        userObject = JSON.parse(userObject);
        const user = new User({
            ...userObject

        })
        await user.save()
        res.status(201).json({
            message: 'L\'utilisateur a été créé !!!'
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the User."
        });
    };
};

exports.getAllUsers = async (req, res) => {
    User.findAll({
        user: (req.body.user),
        attributes: ['id', 'firstname', 'lastname', 'email', 'phone', 'isAdmin', 'createdAt', 'updatedAt'],
        include: [{
            model: db.messages,
            attributes: ['id', 'title', 'content', 'createdAt', 'updatedAt'],
        }]
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error retrieving User with id=" + id
        })
    })
};
