require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');

const db = require('./config/db');
const logger = require('./config/logger');

const home = require('./routes/homeRoutes');
const api = require('./routes/apiRoutes');
const auth = require('./routes/authRoutes');

require('./config/passport')(passport);

const app = express();

// Configure express
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

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
app.use('/auth', auth);

module.exports = app;
