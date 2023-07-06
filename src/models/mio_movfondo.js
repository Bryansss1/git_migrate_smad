const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mio_movfondo', {
    numeropoliza: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    movfondo: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cd_cptmvfondo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ind_credeb: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    montodebe: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    montohaber: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fechareg: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    serialcontrato: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    siniestro: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    detsiniestro: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    montodebepend: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mio_movfondo',
    schema: 'rms40',
    timestamps: false
  });
};
