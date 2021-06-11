const Sequelize = require('sequelize');

const { DB_URI } = process.env;

const db = new Sequelize(DB_URI);

module.exports = db;
