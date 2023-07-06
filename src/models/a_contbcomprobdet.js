const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('a_contbcomprobdet', {
    comprobante: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    asiento: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    numcuenta: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    id_1: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    id_2: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    id_3: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    id_4: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    id_5: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    id_6: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    id_7: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    id_8: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    id_9: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    id_10: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    id_11: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    id_12: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    id_13: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    id_14: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    numauxiliar: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: "0000000000000000"
    },
    montohaber: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    montodebe: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    tipodoc: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    fecharegistro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    serialcuenta: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    comprobdef: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    fechamov: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'a_contbcomprobdet',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "a_contbcomprobdet_pkey",
        unique: true,
        fields: [
          { name: "comprobante" },
          { name: "asiento" },
          { name: "numcuenta" },
        ]
      },
    ]
  });
};
