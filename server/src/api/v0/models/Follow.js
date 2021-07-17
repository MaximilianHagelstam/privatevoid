const { DataTypes } = require('sequelize');
const db = require('../../../config/db');

const Follow = db.define(
  'followers',
  {
    user_id1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    user_id2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  },
  { timestamps: false }
);

module.exports = Follow;
