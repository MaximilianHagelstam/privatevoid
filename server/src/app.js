const dotenv = require('dotenv');

dotenv.config();

const express = require('express');
const db = require('./config/db');
const logger = require('./config/logger');

const home = require('./routes/homeRoutes');
const api = require('./routes/apiRoutes');

const app = express();

// Configure express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Test db connection
db.authenticate()
  .then(() => {
    logger.info('Connected to DB');
  })
  .catch((err) => {
    logger.error(`Error connecting to DB: ${err}`);
  });

// Routes
app.use('/', home);
app.use('/api', api);

module.exports = app;
