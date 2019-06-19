const path = require('path');

function notFound(req, res) {
  res.sendFile(path.resolve(__dirname, 'not-found.html'));
}

module.exports = notFound;
