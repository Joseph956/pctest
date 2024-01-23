module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        title: DataTypes.STRING,       
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
        Post.hasMany(models.Comment);
    };
    return Post;
}