const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User Model
class User extends Model {}
User.init({
    // table column definitions go here
},
{
    // table configuration
})

module.exports = User;