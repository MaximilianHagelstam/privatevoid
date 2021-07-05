const { DataTypes } = require('sequelize');
const db = require('../config/db');

const User = db.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  username: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
  },
  display_name: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  image_url: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = User;
