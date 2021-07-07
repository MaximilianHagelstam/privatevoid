const db = require('../../../config/db');
const logger = require('../../../config/logger');

const createListOfFollowing = async (userId) => {
  const [results] = await db.query(
    `SELECT user_id2 FROM followers WHERE user_id1 = ${userId}`
  );

  const followingArray = results.map((data) => data.user_id2);
  logger.info(`User ${userId} follows users [${followingArray}]`);

  return followingArray;
};

module.exports = {
  createListOfFollowing,
};
