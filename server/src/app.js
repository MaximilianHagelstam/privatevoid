require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('cookie-session');
const passport = require('passport');

const db = require('./config/db');
const User = require('./models/User');
const Post = require('./models/Post');
const Comment = require('./models/Comment');
const Like = require('./models/Like');
const Follow = require('./models/Follow');
const logger = require('./config/logger');

const home = require('./routes/homeRoutes');
const api = require('./routes/apiRoutes');
const auth = require('./routes/authRoutes');

require('./config/passport')(passport);

const app = express();

const DAY = 24 * 60 * 60 * 1000;

const { CLIENT_HOME } = process.env;

// Configure e  xpress
app.use(
  cors({
    origin: CLIENT_HOME,
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

// Likes-User-Post relationship
Post.hasMany(Like, { foreignKey: 'post_id' });
Like.belongsTo(Post, { foreignKey: 'post_id' });
User.hasMany(Like, { foreignKey: 'user_id' });
Like.belongsTo(User, { foreignKey: 'user_id' });

// Follow-User relationship
User.hasMany(Follow, { foreignKey: 'following_user_id' });
Follow.belongsTo(User, { foreignKey: 'following_user_id' });
User.hasMany(Follow, { foreignKey: 'followed_user_id' });
Follow.belongsTo(User, { foreignKey: 'followed_user_id' });

// Routes
app.use('/', home);
app.use('/api', api);
app.use('/auth', auth);

module.exports = app;
