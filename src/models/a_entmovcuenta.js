const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('a_entmovcuenta', {
    entfinan: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cuenta: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    moventcuenta: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    tipomovbanc: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    fechaoperacion: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    referencia: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    montodebe: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    montohaber: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    saldo: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mes: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    centuria: {
      type: DataTypes.DECIMAL,
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
    }
  }, {
    sequelize,
    tableName: 'a_entmovcuenta',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "a_entmovcuenta_pkey",
        unique: true,
        fields: [
          { name: "entfinan" },
          { name: "cuenta" },
          { name: "moventcuenta" },
        ]
      },
    ]
  });
};
