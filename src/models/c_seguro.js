const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_seguro', {
    cd_tiposeguro: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_versionseguro: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    cd_subversionseguro: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    tipocontratoseguro: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    areaseg: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    ind_pagasinipend: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "N"
    },
    ind_renuevasegpend: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "R"
    },
    ind_fraccionable: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "N"
    },
    ind_financiable: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "N"
    },
    fechacracion: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    ind_cotiz: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    ind_web: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    diascobro: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    diasreclamo: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    diasanul: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    ind_inspeccion: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "N"
    },
    descsubversion: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    nombrecuadro: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nombrecertif: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nombrerelacion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ind_periopend: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "N"
    },
    diasvalinspecc: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'c_seguro',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_seguro_pkey",
        unique: true,
        fields: [
          { name: "cd_tiposeguro" },
          { name: "cd_versionseguro" },
          { name: "cd_subversionseguro" },
        ]
      },
    ]
  });
};
