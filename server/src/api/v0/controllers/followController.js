const db = require('../../../config/db');
const logger = require('../../../config/logger');
const Follow = require('../models/Follow');

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
    const unfollow = await Follow.destroy({
      where: {
        user_id1: req.user.id,
        user_id2: req.body.userId,
      },
    });

    logger.info(`Unfollowed user: ${unfollow.user_id2}`);
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
    const ultimateQuery = `
      SELECT posts.message, posts."createdAt", users.display_name, users.username, users.image_url FROM posts
        INNER JOIN users ON posts.author_id = users.id
        WHERE author_id IN
        (SELECT user_id2 FROM followers WHERE user_id1 = ${req.user.id})
        ORDER BY "createdAt"  DESC;
      `;

    const [results] = await db.query(ultimateQuery);

    res.json(results);
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
