const BaseResponse = require('../../../common/responses/baseResponse');

class SuccessResponse extends BaseResponse {
  constructor(url, squashedUrl) {
    super({ url, squashedUrl });
  }
}

module.exports = SuccessResponse;
