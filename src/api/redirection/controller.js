const { business } = require('./business');

const resourceStrings = require('../../common/resourceStrings');
const NotFoundResponse = require('../../common/responses/notFound');
const InternalServerErrorResponse = require('../../common/responses/internalServerError');

async function redirectionController(req, res) {
  try {
    const token = req.params.hash;

    // run business logic
    const url = business.findUrlByToken(token);

    if (!url) {
      return res
        .status(404)
        .send(new NotFoundResponse({ message: resourceStrings.NOT_FOUND }));
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

module.exports = redirectionController;
