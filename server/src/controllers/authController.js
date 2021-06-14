const logger = require('../config/logger');

const logout = (req, res) => {
  req.logout();
  logger.info('User signed out');
  res.redirect('/');
};

module.exports = {
  logout,
};
