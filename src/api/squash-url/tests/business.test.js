const sinon = require('sinon');
const { inMemoryStore } = require('../../../utils/in-memory-store');
const { utils } = require('../../../utils/randomizer');
const { business } = require('../business');

describe('Squash Url Business Access layer:', () => {
  describe('storeTokenWithUrl', () => {
    let generateRandomStringStub;


    afterEach(() => {
      generateRandomStringStub.restore();
    });

    it('generates a random token and stores it', () => {
      const mockToken = 'xysjsioi';

      generateRandomStringStub = sinon
        .stub(utils, 'generateRandomString')
        .returns(mockToken);

      inMemoryStore.store = sinon.spy();
      const token = business.storeTokenWithUrl('http://bit.ly');

      inMemoryStore.store.calledWith({ url: 'http://bit.ly', token: mockToken }).should.equal(true);


      token.should.equal(mockToken);
    });
  });
});
