const { business } = require('./business');

const resourceStrings = require('../../common/resourceStrings');
const NotFoundResponse = require('../../common/responses/notFound');
const InternalServerErrorResponse = require('../../common/responses/internalServerError');

function RedirectionController() {
  function get(req, res) {
    try {
      // retrieve the token from url
      const token = req.params.hash;

      // run business logic to find token in memory
      const url = business.findUrlByToken(token);

      if (!url) {
        res.status(404);
        return res.send(new NotFoundResponse({ message: resourceStrings.NOT_FOUND }));
      }

      return res.redirect(url);
    } catch (err) {
      return res.status(500).send(
        new InternalServerErrorResponse({
          message: resourceStrings.SERVER_ERROR,
        }),
      );
    }
  }
  return { get };
}
module.exports = RedirectionController;
