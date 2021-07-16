const logger = require('../../../config/logger');
const Post = require('../models/Post');
const User = require('../models/User');
const Comment = require('../models/Comment');

const createComment = async (req) => {
  try {
    const comment = await Comment.create({
      body: req.body.body,
      post_id: req.body.postId,
      creator_id: req.user.id,
    });

    logger.info(`Created comment: ${comment.body}`);
  } catch (err) {
    logger.error(err);
  }
};

const getCommentsByCreatorId = async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: { creator_id: req.params.creatorId },
      include: [
        {
          model: Post,
          required: true,
          include: [
            {
              model: User,
              required: true,
            },
          ],
        },
        {
          model: User,
          required: true,
        },
      ],
      order: [['createdAt', 'DESC']],
    });

    res.json(comments);
  } catch (err) {
    logger.error(err);
  }
};

const getCommentsByPostId = async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: { post_id: req.params.postId },
    });

    res.json(comments);
  } catch (err) {
    logger.error(err);
  }
};

module.exports = {
  createComment,
  getCommentsByCreatorId,
  getCommentsByPostId,
};
