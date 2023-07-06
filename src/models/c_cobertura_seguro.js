const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_cobertura_seguro', {
    cd_tiposeguro: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_versionseguro: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_subversionseguro: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_ramo: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_cobert: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    primaminima: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    primamaxima: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    tasaminima: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    tasamaxima: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    sumaminima: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    sumamaxima: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    ind_oblig: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "N"
    },
    ind_tipcobert: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "R"
    },
    ind_basica: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "N"
    },
    ind_agotamiento: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "N"
    },
    ind_sumadelabase: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "N"
    },
    porcdedusuma: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    porcdeduperdida: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    montodedusuma: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    montodeduperdida: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    diasplazoespera: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    diasperiodogracia: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    porcreembolso: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    ind_suma: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "CO"
    },
    ind_rutina: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "NO"
    },
    nombrerutina: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cd_ramodepen: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "000"
    },
    cd_cobertdepen: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "000"
    },
    porcsumadepen: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    tasadepen: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    primadepen: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    ordencalculo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ordenpresentacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    porccomision: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ind_edadactuarial: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ind_anulable: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ind_prima: {
      type: DataTypes.STRING(2),
      allowNull: true,
      comment: "Cobra Prima"
    },
    ind_devuelve: {
      type: DataTypes.STRING(2),
      allowNull: true,
      comment: "Devuelve Prima"
    },
    ind_liqsumpasaj: {
      type: DataTypes.STRING(2),
      allowNull: true,
      comment: "Liquida Suma por Pasajeros"
    },
    ind_calcprima: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ind_acumreaseg: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ind_agotacob: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ind_deducible: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "MS"
    },
    ind_reqprima: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "S"
    },
    ind_reqsuma: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "S"
    },
    ind_reqdedu: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "S"
    },
    ind_reqtasa: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "N"
    },
    nombrerutinasini: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ordencalculosini: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    ind_inspeccion: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    edadmaxsuscrip: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ind_pagapend: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "N"
    },
    ind_aprobpend: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "N"
    },
    ind_primamayorsuma: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "N"
    },
    cd_ramoreaseg: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "0000000000"
    },
    diasvalinspecc: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    primamincobrar: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'c_cobertura_seguro',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_cobertura_seguro_pkey",
        unique: true,
        fields: [
          { name: "cd_tiposeguro" },
          { name: "cd_versionseguro" },
          { name: "cd_subversionseguro" },
          { name: "cd_ramo" },
          { name: "cd_cobert" },
        ]
      },
    ]
  });
};
