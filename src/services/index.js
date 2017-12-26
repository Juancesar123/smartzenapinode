const dataprovinsi = require('./dataprovinsi/dataprovinsi.service.js');
const users = require('./users/users.service.js');
const datakota = require('./datakota/datakota.service.js');
const datakecamatan = require('./datakecamatan/datakecamatan.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(dataprovinsi);
  app.configure(users);
  app.configure(datakota);
  //   Object.keys(sequelize.models).forEach(function(modelName) {
  //     if ("associate" in sequelize.models[modelName]) {
  //         sequelize.models[modelName].associate();
  //     }
  // });
  app.configure(datakecamatan);
};
