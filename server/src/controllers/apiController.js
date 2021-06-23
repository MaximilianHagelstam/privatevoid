const logger = require('../config/logger');
const Post = require('../models/Post');
const User = require('../models/User');

const createPost = async (req) => {
  try {
    const newPost = {
      message: req.body.message,
      author_id: req.user.id,
    };

    const post = await Post.create(newPost);

    logger.debug(JSON.stringify(post));
    logger.info('Post created');
  } catch (err) {
    logger.error(`Error creating post: ${err}`);
  }
};

const readPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();

    logger.debug(JSON.stringify(posts));
    res.json(posts);
    logger.info('Posts read');
  } catch (err) {
    logger.error(`Error reading posts: ${err}`);
  }
};

const sendCurrentUser = (req, res) => {
  const { user } = req;

  logger.debug(JSON.stringify(user));
  res.json(user);
};

const sendUserById = async (req, res) => {
  const userId = req.params.id;

  const user = await User.findByPk(userId);

  logger.debug(JSON.stringify(user));
  res.json(user);
};

module.exports = { createPost, readPosts, sendCurrentUser, sendUserById };
