const logger = require('../config/logger');

const logout = (req, res) => {
  req.logout();
  logger.info('User signed out');
  res.redirect('/login');
};

module.exports = {
  logout,
};
