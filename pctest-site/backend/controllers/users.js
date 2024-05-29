const db = require("../models");
const User = db.User;
// const Role = db.Role;
// const Message = db.Message;

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
    User.sync({ alter: true }).then(() => {
        console.log('All tables created');
        return User.findAll({
            user: (req.body.user) ? req.body.user : null,
            attributes: ['id', 'firstname', 'lastname', 'email', 'phone', 'isAdmin', 'createdAt', 'RoleId'],
            include: [
                {
                    model: db.Message,
                    attributes: ['title', 'content', 'createdAt', 'updatedAt', 'UserId'],
                    order: [["createdAt", "DESC"]],
                    include: [{
                        model: db.User,
                        attributes: ['firstname', 'lastname', 'email'],
                    }]
                }],
            order: [['createdAt', 'DESC']],
        });
    }).then((user) => {
        if (!user) {
            return res.status(404).json({
                message: "Les profils utilisateurs n'ont pas été trouvés !",
            });
        } else {
            res.status(200).json(user)
        }
    }).catch((error) => {
        res.status(500).json({
            message:
                error.message ||
                "Une erreur s'est produite lors de la récupération des fiches utilisateurs.",
        });
    });
};
exports.getOneUser = async (req, res) => {  // ok
    const userId = req.params.id;
    console.log('userId : ', userId);
    User.findOne({
        where: {
            id: userId
        },
        model: db.User,
        attributes: ['id', 'firstname', 'lastname', 'email', 'phone', 'isAdmin', 'createdAt', 'updatedAt'],
        include: [
            {
                model: db.Message,
                attributes: ['id', 'title', 'content', 'createdAt', 'updatedAt'],
            }

        ],

    }).then((user) => {
        if (!user) {
            return res.status(404).send({
                message: "User not found with id " + userId
            });
        } else {
            return res.status(200).json(user);


        }
    }).catch((err) => {
        return res.status(500).send({
            message: "Error retrieving User with id=" + userId
        });
    });
};
exports.getPublishedUser = async (req, res) => {  // ok
    const userId = req.params.id;
    console.log('-------> Contenu :userId : ', userId);
    User.findOne({
        where: {
            id: userId
        },
        model: db.User,
        attributes: ['id', 'firstname', 'lastname', 'email', 'phone', 'isAdmin', 'RoleId',  'createdAt'],
        include: [
            {
                model: db.Message,
                attributes: ['id', 'title', 'content', 'userId'],
                order: [["createdAt", "DESC"]],
            }

        ],
    }).then((user) => {
        if (!user) {
            console.log("-------> Contenu : user", user);
            return res.status(404).send({
                message: "User not found with id " + userId
            });
            // return res.status(401).json({
            //     message: "Le profil utilisateur n'a pas été trouvé !",
            // });
        } else {
            res.status(200).json(user)
        }
    }).catch((error) => {
        res.status(500).json({
            message:
                error.message ||
                "Une erreur s'est produite lors de la création des fiches utilisateurs.",
        });
    });

};