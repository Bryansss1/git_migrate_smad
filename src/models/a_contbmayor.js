const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('a_contbmayor', {
    serialmayor: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    comprobante: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    asiento: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    fechamov: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    comprobdef: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    saldoanterior: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    montodebe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    montohaber: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    saldoactnocontab: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    saldoactcontab: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    saldoacttotal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ind_cuadrado: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    ind_cerrado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "N"
    },
    fechacierre: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecharegistro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fechacontab: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    numcuenta: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    numauxiliar: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    serialcuenta: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "PRE"
    },
    mes: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    centuria: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'a_contbmayor',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "a_contbmayor_comprobante_idx",
        fields: [
          { name: "comprobante" },
          { name: "asiento" },
        ]
      },
      {
        name: "a_contbmayor_numcuenta_idx",
        fields: [
          { name: "numcuenta" },
          { name: "fechamov" },
          { name: "asiento" },
        ]
      },
      {
        name: "a_contbmayor_pk",
        unique: true,
        fields: [
          { name: "numcuenta" },
          { name: "comprobante" },
          { name: "asiento" },
        ]
      },
    ]
  });
};
