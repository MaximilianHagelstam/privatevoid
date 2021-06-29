const logger = require('../config/logger');
const Post = require('../models/Post');
const User = require('../models/User');
const Comment = require('../models/Comment');

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
    const posts = await Post.findAll({
      include: [
        {
          model: User,
          required: true,
        },
      ],
    });

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

const createComment = async (req) => {
  try {
    const newComment = {
      body: req.body.body,
      post_id: req.body.postId,
      creator_id: req.user.id,
    };

    const comment = await Comment.create(newComment);

    logger.debug(JSON.stringify(comment));
    logger.info('Comment created');
  } catch (err) {
    logger.error(`Error creating comment: ${err}`);
  }
};

const readPostById = async (req, res) => {
  try {
    const postId = Number(req.params.postId);
    // const post = await Post.findByPk(postId);

    const post = await Post.findByPk(postId, {
      include: [
        {
          model: User,
          required: true,
        },
      ],
    });

    res.json(post);

    logger.debug(JSON.stringify(post));
    logger.info('Post read');
  } catch (err) {
    logger.error(`Error reading post: ${err}`);
  }
};

module.exports = {
  createPost,
  readPosts,
  sendCurrentUser,
  createComment,
  readPostById,
};
