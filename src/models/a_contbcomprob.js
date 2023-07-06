const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('a_contbcomprob', {
    comprobante: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    fechamov: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    montohaber: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    montodebe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    descripcion: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    ind_cuadrado: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    fecharegistro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "PRE"
    },
    tipocomprob: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    comprobdef: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    fechacontab: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    centuria: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    mes: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ind_generado: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "M"
    }
  }, {
    sequelize,
    tableName: 'a_contbcomprob',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "a_contbcomprob_centuria_mes_idx",
        fields: [
          { name: "centuria" },
          { name: "mes" },
        ]
      },
      {
        name: "a_contbcomprob_pkey",
        unique: true,
        fields: [
          { name: "comprobante" },
        ]
      },
    ]
  });
};
