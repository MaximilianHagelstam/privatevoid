const { DataTypes } = require('sequelize');
const db = require('../config/db');

const User = db.define('User', {
  githubId: {
    type: DataTypes.TEXT,
    primaryKey: true,
    allowNull: false,
  },
  displayName: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = User;
