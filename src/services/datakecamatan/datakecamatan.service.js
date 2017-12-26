// Initializes the `datakecamatan` service on path `/datakecamatan`
const createService = require('feathers-sequelize');
const createModel = require('../../models/datakecamatan.model');
const hooks = require('./datakecamatan.hooks');
const filters = require('./datakecamatan.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'datakecamatan',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/datakecamatan', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('datakecamatan');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
