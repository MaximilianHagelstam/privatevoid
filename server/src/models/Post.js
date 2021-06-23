const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Post = db.define('posts', {
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  author_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Post;
