const validUrl = require('valid-url');

const resourceStrings = require('../../common/resourceStrings');
const appConfig = require('../../core/configs/app-config');

const { business } = require('./business');
const RequestParams = require('./params/request');
const SuccessResponse = require('./responses/success');
const BadRequestResponse = require('../../common/responses/badRequest');
const InternalServerErrorResponse = require('../../common/responses/internalServerError');

async function squashUrlController(req, res) {
  try {
    const requestBody = new RequestParams(req.body);

    // check if url is in request
    if (requestBody.url == null) {
      return res
        .status(400)
        .send(
          new BadRequestResponse({ message: resourceStrings.INVALID_INPUT }),
        );
    }

    // validate url
    if (!validUrl.isUri(requestBody.url)) {
      return res
        .status(400)
        .send(new BadRequestResponse({ message: resourceStrings.INVALID_URL }));
    }

    // run business logic
    const token = business.storeTokenWithUrl(requestBody.url);

    // create a squashed url
    const squashedUrl = `${appConfig.service.appBasePath}/${token}`;

    // success response with squashed url
    const successResponse = new SuccessResponse(requestBody.url, squashedUrl);

    return res.send(successResponse);
  } catch (err) {
    return res.status(500).send(
      new InternalServerErrorResponse({
        message: resourceStrings.SERVER_ERROR,
      }),
    );
  }
}

module.exports = squashUrlController;
