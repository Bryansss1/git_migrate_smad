const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('a_ingreso', {
    ctacobrar: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ingreso: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    tipodoc: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    numerodoc: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    entfinan: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cuenta: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    monto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    fechacobro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'a_ingreso',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "a_ingreso_pk",
        unique: true,
        fields: [
          { name: "ctacobrar" },
          { name: "ingreso" },
        ]
      },
    ]
  });
};
