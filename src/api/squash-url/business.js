const { inMemoryStore } = require('../../utils/in-memory-store');
const { utils } = require('../../utils/randomizer');

function storeTokenWithUrl(url) {
  // generate a 8 char random string
  const token = utils.generateRandomString({
    length: 8,
    charset: 'alphabetic',
  });

  const data = { url, token };

  // store it in memory db
  inMemoryStore.store(data);

  return token;
}

module.exports.business = {
  storeTokenWithUrl,
};
