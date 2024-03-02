'use strict';
const Sequelize = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();
// require("dotenv").config();
const fs = require('fs');
const path = require('path');
// const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];


//Connect to database
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

//Add models
const db = {};
// db.ROLES = ['user', 'admin', 'moderator'];
db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Require models
db.User = require('../models/user')(sequelize, Sequelize);
db.Messages = require('../models/message')(sequelize, Sequelize);
db.Role = require('../models/role')(sequelize, Sequelize);

//Load models
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

//Associate models
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


module.exports = db;
