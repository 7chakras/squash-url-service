const app = require('./index');

const appConfig = require('./src/core/configs/app-config');
const { logger } = require('./src/core/loggers/console-logger');

app.listen(appConfig.service.port, (error) => {
  if (error) {
    logger.error('Unable to listen for connections', error);
    process.exit(10);
  }

  logger.info('server started on', `${appConfig.service.environment}`, ':', `${appConfig.service.port}`);
});
