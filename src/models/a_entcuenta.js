const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('a_entcuenta', {
    entfinan: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cuenta: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    moneda: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    cd_sucursal: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    tipocuenta: {
      type: DataTypes.STRING(10),
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
    tableName: 'a_entcuenta',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "a_entcuenta_pkey",
        unique: true,
        fields: [
          { name: "entfinan" },
          { name: "cuenta" },
        ]
      },
    ]
  });
};
