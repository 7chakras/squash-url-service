const { logger } = require('../loggers/console-logger');

function requestInterceptor(req, res, next) {
  logger.info(req);
  next();
}

module.exports = requestInterceptor;
