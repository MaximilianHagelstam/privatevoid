require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('cookie-session');
const passport = require('passport');
const morgan = require('morgan');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const db = require('../../config/db');
const User = require('./models/User');
const Post = require('./models/Post');
const Comment = require('./models/Comment');
const Like = require('./models/Like');
const Follow = require('./models/Follow');
const logger = require('../../config/logger');

const apiRoutes = require('./routes/index');

require('../../config/passport')(passport);

const app = express();

const DAY = 24 * 60 * 60 * 1000;

const { CLIENT_HOME } = process.env;

// Configure express
app.use(morgan('dev'));
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

// Swagger setup
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'PrivateVoid API',
      version: '0.0.1',
      description: 'API that handles the backend for PrivateVoid',
      contact: {
        name: 'Maximilian Hagelstam',
        email: 'maximilian.hagelstam@gmail.com',
      },
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT',
      },
    },
    servers: [
      {
        url: 'http://localhost:8080/api/v0',
        description: 'Local server',
      },
    ],
  },
  apis: ['./src/api/v0/routes/*.js'],
};

const specs = swaggerJsDoc(options);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

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
User.hasMany(Follow, { foreignKey: 'user_id2' });
Follow.belongsTo(User, { foreignKey: 'user_id2' });
User.hasMany(Follow, { foreignKey: 'user_id1' });
Follow.belongsTo(User, { foreignKey: 'user_id1' });

// Routes
/**
 * @swagger
 * /:
 *   get:
 *     description: Get all books
 *     responses:
 *       200:
 *         description: Success
 *
 */
app.get('/', (req, res) => {
  res.send('Hello');
});

app.use('/api/v0', apiRoutes);

module.exports = app;
