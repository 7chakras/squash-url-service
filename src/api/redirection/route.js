const route = require('express').Router();
const redirectionController = require('./controller');

route.get('/:hash', redirectionController);

module.exports = route;
