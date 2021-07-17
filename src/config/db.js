const Sequelize = require('sequelize');

const { PG_DATABASE, PG_USERNAME, PG_PASSWORD, PG_HOST, PG_PORT } = process.env;

if (process.env.NODE_ENV === 'production') {
  const db = new Sequelize(process.env.PROD_DB_URL);

  module.exports = db;
} else {
  const db = new Sequelize(PG_DATABASE, PG_USERNAME, PG_PASSWORD, {
    dialect: 'postgres',
    host: PG_HOST,
    port: PG_PORT,
    logging: false,
  });

  module.exports = db;
}
