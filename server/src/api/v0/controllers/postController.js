const logger = require('../../../config/logger');
const Post = require('../models/Post');
const User = require('../models/User');
const Comment = require('../models/Comment');
const Like = require('../models/Like');

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

const getPosts = async (req, res) => {
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

const getPostById = async (req, res) => {
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

const getPostsByAuthorId = async (req, res) => {
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

const checkOwner = async (req, res) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });

    let owner;

    if (post.author_id === req.user.id) {
      owner = true;
    } else {
      owner = false;
    }

    res.json({ owner });
  } catch (err) {
    logger.error(err);
  }
};

const removePostById = async (req) => {
  try {
    const { postId } = req.body;

    await Comment.destroy({
      where: { post_id: postId },
    });

    await Like.destroy({
      where: { post_id: postId },
    });

    await Post.destroy({
      where: { id: postId },
    });

    logger.info(`Post with id ${postId} removed`);
  } catch (err) {
    logger.error(err);
  }
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  getPostsByAuthorId,
  checkOwner,
  removePostById,
};
