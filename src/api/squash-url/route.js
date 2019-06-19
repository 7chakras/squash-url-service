const route = require('express').Router();
const squashUrlController = require('./controller');

const controller = squashUrlController();

route.post('/squash-url', controller.post);

module.exports = route;
