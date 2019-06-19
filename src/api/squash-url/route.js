const route = require('express').Router();
const squashUrlController = require('./controller');

route.post('/squash-url', squashUrlController);

module.exports = route;
