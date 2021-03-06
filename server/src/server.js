const app = require('./api/v0/app');
const logger = require('./config/logger');

const PORT = process.env.PORT || 8080;

app.use((req, res) => {
  res.status(404).json({ error: '404 - page not found' });
  logger.error('Page not found');
});

app.listen(PORT, () => {
  logger.info(`Server running in ${process.env.NODE_ENV} on port ${PORT}`);
  logger.info('Press CTRL-C to stop\n');
});
