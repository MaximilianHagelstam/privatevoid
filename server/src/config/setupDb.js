require('dotenv').config();
const { Client } = require('pg');
const logger = require('./logger');

const { PG_DATABASE, PG_USERNAME, PG_PASSWORD, PG_HOST, PG_PORT } = process.env;

const client = new Client({
  user: PG_USERNAME,
  host: PG_HOST,
  database: PG_DATABASE,
  password: PG_PASSWORD,
  port: PG_PORT,
});

client.connect();

const query = `
CREATE TABLE users (
  id int PRIMARY KEY,
  username text UNIQUE NOT NULL,
  display_name text NOT NULL,
  image_url text NOT NULL,
  "createdAt" date NOT NULL,
  "updatedAt" date NOT NULL,
  bio text
);

CREATE TABLE posts (
  id serial PRIMARY KEY,
  message text NOT NULL,
  "createdAt" date NOT NULL,
  "updatedAt" date NOT NULL,
  author_id int REFERENCES users(id) NOT NULL
);

CREATE TABLE comments (
  id serial PRIMARY KEY,
  body text NOT NULL,
  "createdAt" date NOT NULL,
  "updatedAt" date NOT NULL,
  post_id int REFERENCES posts(id) NOT NULL,
  creator_id int REFERENCES users(id) NOT NULL
);
`;

client
  .query(query)
  .then(() => {
    logger.info('Tables is successfully created');
  })
  .catch((err) => {
    logger.error(err);
  })
  .finally(() => {
    client.end();
  });
