const logger = require('../config/logger');

const logout = (req, res) => {
  req.logout();
  logger.info('User signed out');
  res.redirect(process.env.CLIENT_HOME);
};

const successRedirect = (req, res) => {
  res.redirect(`${process.env.CLIENT_HOME}/home`);
};

module.exports = {
  logout,
  successRedirect,
};
