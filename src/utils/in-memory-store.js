/* In memory store to simulate db storage */

const db = [];

function store(value) {
  db.push(value);
}

function retrieveAll() {
  return db;
}

function findByToken(token) {
  const record = db.find(item => item.token === token);
  return record;
}

module.exports.inMemoryStore = {
  store,
  retrieveAll,
  findByToken,
};
