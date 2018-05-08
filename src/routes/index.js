
//actions
const actions = require('../actions');

//scripts
const responseHandler = require('../scripts/responseHandler');

const localInterface = require('../scripts/localApi');

//our generic routing handler function
const dispatch = (res, handler, args) => {
  actions[handler](args, localInterface,
    (generalStatus, statusCode, payload) => {
      responseHandler(generalStatus, statusCode, payload, res);
    }
  );
};

const appRouter = (app) => {

  app.get('/test', (req, res) => {
    const args = {};

    dispatch(res, 'test', args);
  });

  app.get('*', (req, res) => {
    responseHandler('error', 'bad-request', null, res);
  });

}

module.exports = appRouter;