const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_prima_autocasco', {
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
    cd_marca: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    cd_modelo: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    cd_version: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    nu_centuria: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    prima: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    tasa: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    }
  }, {
    sequelize,
    tableName: 'c_prima_autocasco',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_prima_auto_pkey",
        unique: true,
        fields: [
          { name: "cd_tiposeguro" },
          { name: "cd_versionseguro" },
          { name: "cd_subversionseguro" },
          { name: "cd_ramo" },
          { name: "cd_cobert" },
          { name: "cd_marca" },
          { name: "cd_modelo" },
          { name: "cd_version" },
          { name: "nu_centuria" },
        ]
      },
    ]
  });
};
