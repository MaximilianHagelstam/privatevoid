const logger = require('../config/logger');

const logout = (req, res) => {
  req.logout();
  logger.info('User signed out');
  res.redirect(process.env.CLIENT_HOME_PAGE);
};

const successRedirect = (req, res) => {
  res.redirect(`${process.env.CLIENT_HOME_PAGE}profile`);
};

module.exports = {
  logout,
  successRedirect,
};
