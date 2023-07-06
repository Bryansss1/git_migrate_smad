const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_version', {
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
    tx_version: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    nu_centuria: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    tx_tipovehi: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    tx_usovehi: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    tx_transmision: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    tx_motor: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    nu_peso: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    nu_puestos: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    nu_capacicarga: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    cd_estatus: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "001"
    },
    cd_grupoveh: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "0000"
    }
  }, {
    sequelize,
    tableName: 'c_version',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_version_pk",
        unique: true,
        fields: [
          { name: "cd_tipo" },
          { name: "cd_marca" },
          { name: "cd_modelo" },
          { name: "cd_version" },
          { name: "nu_centuria" },
          { name: "tx_tipovehi" },
          { name: "tx_usovehi" },
          { name: "tx_transmision" },
          { name: "nu_peso" },
          { name: "nu_puestos" },
          { name: "nu_capacicarga" },
        ]
      },
    ]
  });
};
