module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        surname: DataTypes.STRING,
        firstname: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
    }, {
        freezeTableName: true,
    }

    );
    User.associate = function (models) {
        // associations can be defined here
        User.hasMany(models.Post, {
            onDelete: 'cascade',
            hooks: true
        });

    };
    return User;
};

