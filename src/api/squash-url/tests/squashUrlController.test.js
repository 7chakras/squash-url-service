const should = require("should");
const sinon = require("sinon");
const SquashUrlController = require("../controller");
const { business } = require("../business");
const appConfig = require("../../../core/configs/app-config");

const resourceStrings = require("../../../common/resourceStrings");
const BadRequestResponse = require("../../../common/responses/badRequest");
const SuccessResponse = require("../../../api/squash-url/responses/success");

describe("Squash URL Controller Tests:", () => {
  let request;
  let response;
  let controller;

  beforeEach(function() {
    response = {
      status: sinon.spy(),
      send: sinon.spy(),
      json: sinon.spy()
    };

    controller = SquashUrlController();
  });

  describe("Post", () => {
    it("when url is empty responds with bad request with 400 status code", () => {
      request = {
        body: {}
      };
      controller.post(request, response);

      response.status.calledWith(400).should.equal(true);

      response.send
        .calledWith(
          new BadRequestResponse({ message: resourceStrings.INVALID_INPUT })
        )
        .should.equal(true);
    });

    it("when url is invalid responds with bad request with 400 status code", () => {
      request = {
        body: { url: "mock//" }
      };

      controller.post(request, response);

      response.status.calledWith(400).should.equal(true);

      response.send
        .calledWith(
          new BadRequestResponse({ message: resourceStrings.INVALID_URL })
        )
        .should.equal(true);
    });

    it("when url is valid and responds back with squashed url", () => {
      request = {
        body: { url: "http://bit.ly" }
      };

      let mockedToken = "xjuyrO";

      sinon.stub(business, "storeTokenWithUrl").returns(mockedToken);
      sinon.stub(appConfig, "service").value({ appBasePath: 'testmode'});
      

      controller.post(request, response);

      response.send
        .calledWith(new SuccessResponse(request.body.url, 'testmode/xjuyrO'))
        .should.equal(true);
    });
  });
});
