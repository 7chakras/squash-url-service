/* eslint-disable */
const should = require('should');
const assert = require('assert');
const sinon = require('sinon');
const { inMemoryStore } = require('../../../utils/in-memory-store');
const { business } = require('../business');

describe('Redirection Business Access layer:', () => {
  describe('findUrlByToken', () => {
    let findByTokenStub;

    afterEach(() => {
      findByTokenStub.restore();
    });

    it('when the supplied token is found it responds with corresponding url', () => {
      const mockUrl = { url: 'https://bit.ly' };
      findByTokenStub = sinon
        .stub(inMemoryStore, 'findByToken')
        .returns(mockUrl);

      const url = business.findUrlByToken('xyut5');
      url.should.equal(mockUrl.url);
    });

    it('when the supplied token is found it responds with null', () => {
      findByTokenStub = sinon.stub(inMemoryStore, 'findByToken').returns(null);

      const url = business.findUrlByToken('xyut5');
      assert.equal(url, null);
    });
  });
});
