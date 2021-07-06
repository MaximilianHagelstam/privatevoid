const logger = require('../../../config/logger');
const Post = require('../models/Post');
const User = require('../models/User');
const Comment = require('../models/Comment');

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

const readCommentsByCreatorId = async (req, res) => {
  try {
    const { creatorId } = req.params;

    const comments = await Comment.findAll({
      where: { creator_id: creatorId },
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

    logger.debug(JSON.stringify(comments));
    logger.info('Comments read');
  } catch (err) {
    logger.error(`Error reading comments: ${err}`);
  }
};

module.exports = {
  createComment,
  readCommentsByCreatorId,
};
