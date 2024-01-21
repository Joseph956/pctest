const db = require("../models");
const Post = db.posts;
const Op = db.Sequelize.Op;
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

// Create and Save a new Post
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Post
    const post = {
        title: req.body.title,
        surname: req.body.surname,
        firstname: req.body.firstname,
        email: req.body.email,
        phone: req.body.phone,
        subject: req.body.subject,
        message: req.body.message,
    };
    // Save Post in the database
    Post.create(post)
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