const db = require("../models");
const User = db.User;
const Role = db.Role;
const Message = db.Message;
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
// Retrieve all Users from the database.
// Récupère tous les utilisateurs de la base de données.
exports.getAllUsers = async (req, res) => {  // ok
    try {
        console.log('Fetching all users');
        const user = await User.findAll({
            attributes: ['id', 'firstname', 'lastname', 'email', 'phone', 'isAdmin', 'createdAt', 'updatedAt'],
            include: [{
                model: db.Message,
                attributes: ['id', 'title', 'content', 'createdAt', 'updatedAt'],
            }],
        }).then((user) => {
            if (!user) {
                console.log('User not found with id ' + req.body.user);
            } else {
                res.status(200).json(user)
            }           
        }).catch((err) => {        
            return res.status(404).send({
               message: err.message || "User not found with id " + req.body.user
            });
        });
        console.log('Sending users data');
        res.send(user);
    } catch (err) {
        console.log('Error retrieving User with id=' + req.body.user + ': ' + err.message);
        res.status(500).send({
            message: err.message || "Error retrieving User with id=" + req.body.user
        });
    }
};