const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_proceso_seguro', {
    cd_tiposeguro: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_versionseguro: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_subversionseguro: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    nombreproceso: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    cd_tipoproceso: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    orden: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    firmareporte: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    ind_codbarra: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    textoaprobsuper: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    numaprobsuper: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fechaaprobsuper: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "000"
    }
  }, {
    sequelize,
    tableName: 'c_proceso_seguro',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_proceso_seguro_pkey",
        unique: true,
        fields: [
          { name: "cd_tiposeguro" },
          { name: "cd_versionseguro" },
          { name: "cd_subversionseguro" },
          { name: "nombreproceso" },
        ]
      },
    ]
  });
};
