// Initializes the `datakota` service on path `/datakota`
const createService = require('feathers-sequelize');
const createModel = require('../../models/datakota.model');
const hooks = require('./datakota.hooks');
const filters = require('./datakota.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'datakota',
    Model,
  };

  // Initialize our service with any options it requires
  app.use('/datakota', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('datakota');

  service.hooks(hooks);
//   service.datakota.findAll({
//     include: [{
//         model: dataprovinsi,
//        // where: { state: Sequelize.col('project.state') }
//     }]
// })
  if (service.filter) {
    service.filter(filters);
  }
};
