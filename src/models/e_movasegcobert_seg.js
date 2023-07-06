const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_movasegcobert_seg', {
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
    cd_nac_aseg: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    cedrif_aseg: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    correl_aseg: {
      type: DataTypes.DECIMAL,
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
    movcobert: {
      type: DataTypes.DECIMAL,
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
    fechamodif: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    nombreusuario: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    hora: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    serialcobert: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    serialaseg: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    serialcontrato: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    serialcertif: {
      type: DataTypes.DECIMAL,
      allowNull: false
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
      allowNull: true
    },
    fechaexc: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fechaejecexc: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    serialanuexc: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    porccomision: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'e_movasegcobert_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_movasegcobert_seg_pkey",
        unique: true,
        fields: [
          { name: "numeropoliza" },
          { name: "certificado" },
          { name: "cd_tiposeguro" },
          { name: "cd_versionseguro" },
          { name: "cd_subversionseguro" },
          { name: "cd_ramo" },
          { name: "cd_cobert" },
          { name: "movcobert" },
        ]
      },
      {
        name: "e_movasegcobert_seg_serialcontrato_2idx",
        fields: [
          { name: "serialcontrato" },
          { name: "serialcertif" },
          { name: "numprima" },
          { name: "numprimadet" },
        ]
      },
      {
        name: "e_movasegcobert_seg_serialcontrato_idx",
        fields: [
          { name: "serialcontrato" },
          { name: "serialcertif" },
          { name: "serialcobert" },
          { name: "serialaseg" },
        ]
      },
    ]
  });
};
