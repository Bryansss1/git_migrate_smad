const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_biencobert_seg', {
    numeropoliza: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    certificado: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
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
    cd_bien: {
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
    prima: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    tasa: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    suma: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    fechainicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fechafin: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    deducible: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    numprima: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    numprimadet: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    serialcobert: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    serialcontrato: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    serialcertif: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    serialbien: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    porccomision: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    serialanuexc: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    tgr_off: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    recacontrato: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    desccontrato: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    recacertif: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    desccertif: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    recacobert: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    desccobert: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    primaneta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    cd_motivexc: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: "0000"
    },
    fechaexc: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fechaejecexc: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ind_modif: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    serialemision: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    porcriesgo: {
      type: DataTypes.STRING(7),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'e_biencobert_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_biencobert_seg_idx",
        fields: [
          { name: "serialemision" },
        ]
      },
      {
        name: "e_biencobert_seg_numeropoliza_idx",
        fields: [
          { name: "numeropoliza" },
          { name: "certificado" },
          { name: "cd_tiposeguro" },
          { name: "cd_versionseguro" },
          { name: "cd_subversionseguro" },
          { name: "cd_bien" },
          { name: "cd_ramo" },
          { name: "cd_cobert" },
        ]
      },
      {
        name: "e_biencobert_seg_pk",
        unique: true,
        fields: [
          { name: "serialcontrato" },
          { name: "serialcertif" },
          { name: "cd_tiposeguro" },
          { name: "cd_versionseguro" },
          { name: "cd_subversionseguro" },
          { name: "cd_bien" },
          { name: "cd_ramo" },
          { name: "cd_cobert" },
        ]
      },
      {
        name: "e_biencobert_seg_serialbien_idx",
        fields: [
          { name: "serialbien" },
        ]
      },
      {
        name: "e_biencobert_seg_serialcobert_idx",
        fields: [
          { name: "serialcobert" },
        ]
      },
      {
        name: "e_biencobert_seg_serialcontrato_idx",
        fields: [
          { name: "serialcontrato" },
          { name: "serialcertif" },
          { name: "cd_ramo" },
          { name: "cd_cobert" },
        ]
      },
    ]
  });
};
