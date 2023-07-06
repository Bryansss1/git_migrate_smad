const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_siniinterfazsepsolicitud', {
    fecregistro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    serialsinisigesp: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    numsol: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    montopagado: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    montofacturado: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cuenta: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    proveedor: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    concepto: {
      type: DataTypes.STRING(6000),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'e_siniinterfazsepsolicitud',
    schema: 'rms40',
    timestamps: false
  });
};
