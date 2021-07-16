const logger = require('../../../config/logger');
const Post = require('../models/Post');
const User = require('../models/User');
const Like = require('../models/Like');

const likePost = async (req) => {
  try {
    await Like.create({
      user_id: req.user.id,
      post_id: req.body.postId,
    });

    logger.info(`User ${req.user.id} likes post ${req.body.postId}`);
  } catch (err) {
    logger.error(err);
  }
};

const unLikePost = async (req) => {
  try {
    await Like.destroy({
      where: {
        user_id: req.user.id,
        post_id: req.body.postId,
      },
    });

    logger.info(`Unliked post: ${req.body.postId}`);
  } catch (err) {
    logger.error(err);
  }
};

const checkIfUserLikedPost = async (req, res) => {
  try {
    const like = await Like.findOne({
      where: { user_id: req.user.id, post_id: req.params.postId },
    });

    if (like === null) {
      logger.info(`User ${req.user.id} dosen't like post ${req.params.postId}`);
      res.json({ liked: false });
    } else {
      logger.info(`User ${req.user.id} likes post ${req.params.postId}`);
      res.json({ liked: true });
    }
  } catch (err) {
    logger.error(err);
  }
};

const getLikesByCreatorId = async (req, res) => {
  try {
    const likes = await Like.findAll({
      where: { user_id: req.params.creatorId },
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
      ],
    });

    res.json(likes);
  } catch (err) {
    logger.error(err);
  }
};

const getLikesByPostId = async (req, res) => {
  try {
    const likes = await Like.findAll({
      where: { post_id: req.params.postId },
    });

    res.json(likes);
  } catch (err) {
    logger.error(err);
  }
};

module.exports = {
  likePost,
  unLikePost,
  checkIfUserLikedPost,
  getLikesByCreatorId,
  getLikesByPostId,
};
