const logger = require('../../../config/logger');
const User = require('../models/User');

const sendCurrentUser = (req, res) => {
  try {
    logger.info(`Current user is @${req.user.username}`);
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
      let owner;

      if (user.id === req.user.id) {
        owner = true;
      } else {
        owner = false;
      }

      const response = {
        id: user.id,
        username: user.username,
        display_name: user.display_name,
        image_url: user.image_url,
        bio: user.bio,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        owner,
      };

      logger.info('User found');
      res.json(response);
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
