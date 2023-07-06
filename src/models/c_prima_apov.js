const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_prima_apov', {
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
    cd_ramo: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_cobert: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    primapuesto: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    tasapuesto: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    maxpuestos: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    suma: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'c_prima_apov',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_prima_apov_pkey",
        unique: true,
        fields: [
          { name: "cd_tiposeguro" },
          { name: "cd_versionseguro" },
          { name: "cd_subversionseguro" },
          { name: "cd_ramo" },
          { name: "cd_cobert" },
        ]
      },
    ]
  });
};
