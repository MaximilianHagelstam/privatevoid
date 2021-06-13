const logger = require('../config/logger');

const sayHello = (req, res) => {
  logger.debug(req.user);
  res.send('Hello');
};

module.exports = { sayHello };
