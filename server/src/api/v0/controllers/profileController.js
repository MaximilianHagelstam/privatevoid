const logger = require('../../../config/logger');
const User = require('../models/User');

const sendCurrentUser = (req, res) => {
  const { user } = req;

  logger.debug(JSON.stringify(user));
  res.json(user);
};

const readUserByUsername = async (req, res) => {
  try {
    const { searchedUsername } = req.params;

    const user = await User.findOne({ where: { username: searchedUsername } });

    logger.debug(JSON.stringify(user));

    if (user === null) {
      res.status(404).json({ message: 'User not found' });

      logger.info('User not found');
    } else {
      res.json(user);

      logger.info('User found');
    }
  } catch (err) {
    logger.error(`Error finding user: ${err}`);
  }
};

const findUserIdFromUsername = async (req, res) => {
  const { username } = req.params;

  const user = await User.findOne({
    where: { username },
  });

  res.json({ authorId: user.id });
};

const editUserSettings = async (req) => {
  try {
    await User.update(
      { display_name: req.body.displayName, bio: req.body.bio },
      { where: { id: req.user.id } }
    );

    logger.info('Settings updated');
  } catch (err) {
    logger.error(`Error updating settings: ${err}`);
  }
};

module.exports = {
  sendCurrentUser,
  readUserByUsername,
  findUserIdFromUsername,
  editUserSettings,
};
