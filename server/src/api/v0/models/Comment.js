const { DataTypes } = require('sequelize');
const db = require('../../../config/db');

const Comment = db.define('comments', {
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  creator_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Comment;
