const logger = require('../../../config/logger');
const Post = require('../models/Post');
const User = require('../models/User');
const Comment = require('../models/Comment');

const createPost = async (req) => {
  try {
    const post = await Post.create({
      message: req.body.message,
      author_id: req.user.id,
    });

    logger.info(`Posted: ${post.message}`);
  } catch (err) {
    logger.error(err);
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
      order: [['createdAt', 'DESC']],
    });

    res.json(posts);
  } catch (err) {
    logger.error(err);
  }
};

const readPostById = async (req, res) => {
  try {
    const postId = Number(req.params.postId);

    const post = await Post.findByPk(postId, {
      include: [
        {
          model: User,
          required: true,
        },
        {
          model: Comment,
          required: false,
          include: [
            {
              model: User,
              required: true,
            },
          ],
        },
      ],
    });

    logger.info(`Found post with id ${postId}`);
    res.json(post);
  } catch (err) {
    logger.error(err);
  }
};

const readPostsByAuthorId = async (req, res) => {
  try {
    const posts = await Post.findAll({
      where: { author_id: req.params.authorId },
      include: [
        {
          model: User,
          required: true,
        },
      ],
      order: [['createdAt', 'DESC']],
    });

    logger.info(`Found post from user ${req.params.authorId}`);
    res.json(posts);
  } catch (err) {
    logger.error(err);
  }
};

module.exports = {
  createPost,
  readPosts,
  readPostById,
  readPostsByAuthorId,
};
