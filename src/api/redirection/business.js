const { inMemoryStore } = require('../../utils/in-memory-store');


function findUrlByToken(token) {
  const record = inMemoryStore.findByToken(token);

  if (record) return record.url;
  return null;
}

module.exports.business = {
  findUrlByToken,
};
