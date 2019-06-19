const randomstring = require('randomstring');

function generateRandomString(options) {
  return randomstring.generate(options);
}

module.exports.utils = {
  generateRandomString,
};
