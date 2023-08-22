const { Syham } = require('./syham.class');
const createModel = require('../../models/syham.model');
const hooks = require('./syham.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/syham', new Syham(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('syham');

  service.hooks(hooks);
};