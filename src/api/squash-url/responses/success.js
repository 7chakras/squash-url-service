const BaseResponse = require('../../../common/responses/baseResponse');

class SuccessResponse extends BaseResponse {
  constructor(url, token, squashedUrl) {
    super({ url, token, squashedUrl });
  }
}

module.exports = SuccessResponse;
