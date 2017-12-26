// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const datakota = sequelizeClient.define('datakota', {
    dataprovinsiId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nama_kota:{
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = false;
      }
    }
  });

  datakota.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    //console.log(models);
    const Player = models.datakota;
    const Team  = models.dataprovinsi;
    const Source = models.datakota;
    const Secondary  = models.datakecamatan;
    Player.belongsTo(Team,{foreignKey: 'dataprovinsiId',sourceKey: 'dataprovinsiId',targetKey:'id'});
   // Source.hasMany(Secondary);
    //console.log(Player); 
    // Will add a teamId attribute to Player to hold the primary key value for Team    
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return datakota;
};
