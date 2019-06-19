const route = require('express').Router();
const redirectionController = require('./controller');

const controller = redirectionController();

route.get('/:hash', controller.get);

module.exports = route;
