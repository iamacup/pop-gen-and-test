
// actions
const actions = require('../actions');

// scripts
const responseHandler = require('../scripts/responseHandler');

const localInterface = require('../scripts/localAPI');

// our generic routing handler function
const dispatch = (res, handler, args) => {
  actions[handler](
    args, localInterface,
    (generalStatus, statusCode, payload) => {
      responseHandler(generalStatus, statusCode, payload, res);
    },
  );
};

const appRouter = (app) => {
  app.get('/generate-population', (req, res) => {
    const args = {};

    dispatch(res, 'generatePopulation', args);
  });

  app.get('*', (req, res) => {
    responseHandler('error', 'bad-request', null, res);
  });
};

module.exports = appRouter;
