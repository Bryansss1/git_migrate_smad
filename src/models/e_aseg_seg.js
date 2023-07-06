const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_aseg_seg', {
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
    cd_parent: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    fechainicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fechafin: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    serialaseg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    fechaemite: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
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
    serialpersona: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    serialanuexc: {
      type: DataTypes.DECIMAL,
      allowNull: true,
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
    serialemision: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    edad_bio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    edad_act: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'e_aseg_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_aseg_seg_asegunicocert_idx",
        unique: true,
        fields: [
          { name: "serialcontrato" },
          { name: "serialcertif" },
          { name: "cd_tiposeguro" },
          { name: "cd_versionseguro" },
          { name: "cd_subversionseguro" },
          { name: "cd_nac_aseg" },
          { name: "cedrif_aseg" },
          { name: "correl_aseg" },
        ]
      },
      {
        name: "e_aseg_seg_idx",
        fields: [
          { name: "serialemision" },
        ]
      },
      {
        name: "e_aseg_seg_pk",
        unique: true,
        fields: [
          { name: "serialcontrato" },
          { name: "serialaseg" },
        ]
      },
      {
        name: "e_aseg_seg_serialaseg_idx",
        fields: [
          { name: "serialaseg" },
        ]
      },
      {
        name: "e_aseg_seg_serialcontrato_idx",
        fields: [
          { name: "serialcontrato" },
          { name: "serialcertif" },
        ]
      },
    ]
  });
};
