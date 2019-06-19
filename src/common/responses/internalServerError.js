class InternalServerErrorResponse {
  constructor(obj) {
    this.code = '500';
    this.message = obj.message;
  }
}

module.exports = InternalServerErrorResponse;
