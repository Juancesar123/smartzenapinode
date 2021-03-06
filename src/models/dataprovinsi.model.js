// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const dataprovinsi = sequelizeClient.define('dataprovinsi', {
    namaprovinsi: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  dataprovinsi.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    const Player = models.datakota;
    const Team  = models.dataprovinsi;
    Team.hasMany(Player); 
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return dataprovinsi;
};
