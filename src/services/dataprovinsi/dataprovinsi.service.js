// Initializes the `dataprovinsi` service on path `/dataprovinsi`
const createService = require('feathers-sequelize');
const createModel = require('../../models/dataprovinsi.model');
const hooks = require('./dataprovinsi.hooks');
const filters = require('./dataprovinsi.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'dataprovinsi',
    Model
  };

  // Initialize our service with any options it requires
  app.use('/dataprovinsi', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('dataprovinsi');

  service.hooks(hooks);
  

  if (service.filter) {
    service.filter(filters);
  }
};
