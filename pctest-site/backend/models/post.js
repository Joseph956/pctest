module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        title: DataTypes.STRING,
        surname: DataTypes.STRING,
        firstname: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        subject: DataTypes.STRING,
        message: DataTypes.STRING,
    }, {
        freezeTableName: true
    }, {
        associate: function (models) {
            // associations can be defined here
            db.Post.hasMany(db.Comment);
        },
        hooks: {
            beforeCreate: (post, options) => {
                if (post.email) {
                    post.email = post.email.toLowerCase();

                }

            }
        }
    });

    Post.associate = function (models) {
        // associations can be defined here
    };
    return Post;
}