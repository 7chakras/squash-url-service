const bole = require('bole');
const appConfig = require('../configs/app-config');

const log = bole('server');

if (appConfig.service.environment === 'development') { bole.output({ level: 'debug', stream: process.stdout }); }

module.exports.logger = log;
