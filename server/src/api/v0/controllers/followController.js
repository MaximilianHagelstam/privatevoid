const { Op } = require('sequelize');
const logger = require('../../../config/logger');
const Follow = require('../models/Follow');
const Post = require('../models/Post');
const User = require('../models/User');
const { createListOfFollowing } = require('../services/createListOfFollowing');

const followUser = async (req) => {
  try {
    const follow = await Follow.create({
      user_id1: req.user.id,
      user_id2: req.body.userId,
    });

    logger.info(`Followed user: ${follow.user_id2}`);
  } catch (err) {
    logger.error(err);
  }
};

const unfollowUser = async (req) => {
  try {
    await Follow.destroy({
      where: {
        user_id1: req.user.id,
        user_id2: req.body.userId,
      },
    });

    logger.info(`Unfollowed user: ${req.body.userId}`);
  } catch (err) {
    logger.error(err);
  }
};

const checkIfUserFollowsUser = async (req, res) => {
  try {
    const follow = await Follow.findOne({
      where: { user_id1: req.user.id, user_id2: req.params.userId },
    });

    if (follow === null) {
      logger.info(`${req.user.id} dosen't follow ${req.params.userId}`);
      res.json({ followed: false });
    } else {
      logger.info(`${req.user.id} follows ${req.params.userId}`);
      res.json({ followed: true });
    }
  } catch (err) {
    logger.error(err);
  }
};

const getPostsByFollowing = async (req, res) => {
  try {
    const following = await createListOfFollowing(req.user.id);

    const posts = await Post.findAll({
      where: {
        author_id: { [Op.in]: following },
      },
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

module.exports = {
  followUser,
  unfollowUser,
  checkIfUserFollowsUser,
  getPostsByFollowing,
};
