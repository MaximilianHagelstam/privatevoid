const logger = require('../../../config/logger');
const User = require('../models/User');

const sendCurrentUser = (req, res) => {
  try {
    logger.info(`Current user is: @${JSON.stringify(req.user.username)}`);
    res.json(req.user);
  } catch (err) {
    logger.error(err);
  }
};

const getUserByUsername = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { username: req.params.searchedUsername },
    });

    if (user === null) {
      logger.info('User not found');
      res.status(404).json({ message: 'User not found' });
    } else {
      logger.info('User found');
      res.json(user);
    }
  } catch (err) {
    logger.error(err);
  }
};

const findUserIdFromUsername = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { username: req.params.username },
    });

    logger.info(`Username @${req.params.username} has the id ${user.id}`);
    res.json({ authorId: user.id });
  } catch (err) {
    logger.error(err);
  }
};

const editUserSettings = async (req) => {
  try {
    await User.update(
      { display_name: req.body.displayName, bio: req.body.bio },
      { where: { id: req.user.id } }
    );
  } catch (err) {
    logger.error(err);
  }
};

module.exports = {
  sendCurrentUser,
  getUserByUsername,
  findUserIdFromUsername,
  editUserSettings,
};
