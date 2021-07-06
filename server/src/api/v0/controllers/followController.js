const db = require('../../../config/db');
const logger = require('../../../config/logger');
const Follow = require('../models/Follow');

const followUser = async (req) => {
  try {
    const newFollow = {
      user_id1: req.user.id,
      user_id2: req.body.userId,
    };

    const follow = await Follow.create(newFollow);

    logger.debug(JSON.stringify(follow));
    logger.info('Follow created');
  } catch (err) {
    logger.error(`Error creating follow: ${err}`);
  }
};

const unfollowUser = async (req) => {
  try {
    const newUnfollow = {
      user_id1: req.user.id,
      user_id2: req.body.userId,
    };

    const unfollow = await Follow.destroy({ where: newUnfollow });

    logger.debug(JSON.stringify(unfollow));
    logger.info('Follow removed');
  } catch (err) {
    logger.error(`Error removing follow: ${err}`);
  }
};

const checkIfUserFollowsUser = async (req, res) => {
  const follow = await Follow.findOne({
    where: { user_id1: req.user.id, user_id2: req.params.userId },
  });

  if (follow === null) {
    res.json({ followed: false });
  } else {
    res.json({ followed: true });
  }
};

const readPostsByFollowing = async (req, res) => {
  try {
    const ultimateQuery = `
      SELECT posts.message, posts."createdAt", users.display_name, users.username, users.image_url FROM posts
        INNER JOIN users ON posts.author_id = users.id
        WHERE author_id IN
        (SELECT user_id2 FROM followers WHERE user_id1 = ${req.user.id})
        ORDER BY "createdAt"  DESC;
      `;

    const [results] = await db.query(ultimateQuery);

    logger.debug(JSON.stringify(results));
    res.json(results);
    logger.info('Posts read');
  } catch (err) {
    logger.error(`Error reading posts: ${err}`);
  }
};

module.exports = {
  followUser,
  unfollowUser,
  checkIfUserFollowsUser,
  readPostsByFollowing,
};
