const logger = require('../../../config/logger');
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
      order: [['createdAt', 'DESC']],
    });

    logger.debug(JSON.stringify(posts));
    res.json(posts);
    logger.info('Posts read');
  } catch (err) {
    logger.error(`Error reading posts: ${err}`);
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

    res.json(post);

    logger.debug(JSON.stringify(post));
    logger.info('Post read');
  } catch (err) {
    logger.error(`Error reading post: ${err}`);
  }
};

const readPostsByAuthorId = async (req, res) => {
  try {
    const { authorId } = req.params;

    const posts = await Post.findAll({
      where: { author_id: authorId },
      include: [
        {
          model: User,
          required: true,
        },
      ],
      order: [['createdAt', 'DESC']],
    });

    res.json(posts);

    logger.debug(JSON.stringify(posts));
    logger.info('Posts read');
  } catch (err) {
    logger.error(`Error reading posts: ${err}`);
  }
};

module.exports = {
  createPost,
  readPosts,
  readPostById,
  readPostsByAuthorId,
};
