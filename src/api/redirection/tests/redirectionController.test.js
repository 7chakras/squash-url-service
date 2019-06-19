/* eslint-disable */
const should = require('should');
const sinon = require('sinon');
const RedirectionController = require('../controller');
const { business } = require('../business');

const resourceStrings = require('../../../common/resourceStrings');
const NotFoundResponse = require('../../../common/responses/notFound');

describe('Redirection Controller Tests:', () => {
  let request;
  let response;
  let controller;

  beforeEach(() => {
    response = {
      status: sinon.spy(),
      send: sinon.spy(),
      json: sinon.spy(),
      redirect: sinon.spy(),
    };

    controller = RedirectionController();
  });

  describe('Get', () => {
    let findUrlByTokenStub;

    afterEach(() => {
      findUrlByTokenStub.restore();
    });

    it('when the supplied token is not found in memory it responds with 404', () => {
      request = {
        params: { hash: 'tuxtoi' },
      };
      findUrlByTokenStub = sinon.stub(business, 'findUrlByToken').returns(null);

      controller.get(request, response);

      response.status.calledWith(404).should.equal(true);

      response.send
        .calledWith(
          new NotFoundResponse({ message: resourceStrings.NOT_FOUND }),
        )
        .should.equal(true);
    });
    it('when the supplied token is found in memory it successfully redirects', () => {
      request = {
        params: { hash: 'tuxtoi' },
      };

      const mockUrl = 'http://bit.ly';

      findUrlByTokenStub = sinon
        .stub(business, 'findUrlByToken')
        .returns(mockUrl);

      controller.get(request, response);

      response.redirect.calledWith(mockUrl).should.equal(true);
    });
  });
});
