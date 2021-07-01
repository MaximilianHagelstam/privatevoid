const Sequelize = require('sequelize');

const { PG_DATABASE, PG_USERNAME, PG_PASSWORD, PG_HOST, PG_PORT } = process.env;

const connectionString = `postgres://${PG_USERNAME}:${PG_PASSWORD}@${PG_HOST}:${PG_PORT}/${PG_DATABASE}`;

const db = new Sequelize(connectionString);

module.exports = db;
