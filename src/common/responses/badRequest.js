/* eslint-disable */

const BaseResponse = require('./baseResponse');

class BadRequestResponse extends BaseResponse {
  constructor(obj) {
    super(obj);
  }
}

module.exports = BadRequestResponse;
