const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('a_contbcierre', {
    centuria: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    mes: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    fechaejec: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecharegistro: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_DATE')
    },
    fechamodif: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    usuarioreg: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    usuariomod: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    cantdesc: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    cantcuadrado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    cantsinctbl: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    cantctbl: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    canttotalcomp: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'a_contbcierre',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "a_contbcierre_pkey",
        unique: true,
        fields: [
          { name: "centuria" },
          { name: "mes" },
        ]
      },
    ]
  });
};
