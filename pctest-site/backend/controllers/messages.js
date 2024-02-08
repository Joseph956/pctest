const db = require("../models");
const Message = db.messages;
// const Op = db.Sequelize.Op;
const dotenv = require('dotenv');
dotenv.config();

// Create and Save a new Post
exports.createMessage = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Message
    // let messageObject = req.body;
    const message = new Message({
        // ...messageObject
        title: req.body.title,
        content: req.body.content,
    });
    // Save Message in the database
    Message.create(message)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Post."
            });
        });
};