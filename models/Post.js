const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model

class Post extends Model {}
Post.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    blog_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    blog_text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    created_at: {
        type: Date,
    }
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
}
)

module.exports = Post