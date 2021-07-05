const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Follow = db.define(
  'followers',
  {
    following_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    followed_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  },
  { timestamps: false }
);

module.exports = Follow;
