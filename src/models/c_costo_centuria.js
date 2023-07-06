const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_costo_centuria', {
    cd_tipo: {
      type: DataTypes.STRING(4),
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
    mt_costomin: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    mt_costo: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    mt_costomax: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(4),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'c_costo_centuria',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_costo_centuria_cd_tipo_idx",
        unique: true,
        fields: [
          { name: "cd_tipo" },
          { name: "cd_marca" },
          { name: "cd_modelo" },
          { name: "cd_version" },
          { name: "nu_centuria" },
        ]
      },
      {
        name: "c_costo_centuria_pk",
        unique: true,
        fields: [
          { name: "cd_tipo" },
          { name: "cd_marca" },
          { name: "cd_modelo" },
          { name: "cd_version" },
          { name: "nu_centuria" },
        ]
      },
    ]
  });
};
