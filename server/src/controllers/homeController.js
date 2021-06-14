const logger = require('../config/logger');

const sayHello = (req, res) => {
  logger.debug(req.user);
  res.send('Hello');
};

const profile = (req, res) => {
  res.json(req.user);
};

module.exports = { sayHello, profile };
