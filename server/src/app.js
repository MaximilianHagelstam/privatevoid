require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('cookie-session');
const passport = require('passport');

const db = require('./config/db');
const User = require('./models/User');
const Post = require('./models/Post');
const Comment = require('./models/Comment');
const logger = require('./config/logger');

const home = require('./routes/homeRoutes');
const api = require('./routes/apiRoutes');
const auth = require('./routes/authRoutes');

require('./config/passport')(passport);

const app = express();

const DAY = 24 * 60 * 60 * 1000;

// Configure express
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    name: 'session',
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: DAY,
    },
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

// User-Post relationship
User.hasMany(Post, { foreignKey: 'author_id' });
Post.belongsTo(User, { foreignKey: 'author_id' });

// User-Comment-Post relationship
Post.hasMany(Comment, { foreignKey: 'post_id' });
Comment.belongsTo(Post, { foreignKey: 'post_id' });
User.hasMany(Comment, { foreignKey: 'creator_id' });
Comment.belongsTo(User, { foreignKey: 'creator_id' });

// Routes
app.use('/', home);
app.use('/api', api);
app.use('/auth', auth);

module.exports = app;
