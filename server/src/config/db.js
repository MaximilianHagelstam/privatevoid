const Sequelize = require('sequelize');

const { PG_DATABASE, PG_USERNAME, PG_PASSWORD, PG_HOST, PG_PORT } = process.env;

const db = new Sequelize(PG_DATABASE, PG_USERNAME, PG_PASSWORD, {
  dialect: 'postgres',
  host: PG_HOST,
  port: PG_PORT,
  logging: false,
});

module.exports = db;
