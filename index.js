const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// interceptor for general logging and request modification
app.use(require('./src/core/middlewares/requestInterceptor'));
// api routes entry point
app.use('/api', require('./src/api/squash-url/route'));
// hash route entry point
app.use(require('./src/api/redirection/route'));

app.use(
  '/docs/swagger',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    explorer: true,
  }),
);

module.exports = app;
