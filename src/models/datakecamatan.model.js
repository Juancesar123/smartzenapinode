// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const datakecamatan = sequelizeClient.define('datakecamatan', {
    namakecamatan: {
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

  datakecamatan.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    const Player = models.datakecamatan;
    const Team  = models.datakota;
    Player.belongsTo(Team,{foreignKey: 'datakotaId',sourceKey: 'datakotaId',targetKey:'id'});
    //console.log(Player); 
   
  };

  return datakecamatan;
};
