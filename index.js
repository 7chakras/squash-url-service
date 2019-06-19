const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(require('./src/core/middlewares/requestInterceptor'));
app.use('/api', require('./src/api/squash-url/route'));
app.use(require('./src/api/redirection/route'));
// app.use(require('./src/core/error/not-found'));

module.exports = app;
