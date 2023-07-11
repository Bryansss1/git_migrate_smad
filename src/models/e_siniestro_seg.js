const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_siniestro_seg', {
    siniestro: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    numeropoliza: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      primaryKey:true
    },
    certificado: {
      type: DataTypes.DECIMAL,
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
    cd_nac_titular: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    cedrif_titular: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    correl_titular: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    montosiniestro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    montonoaprobado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    montopagado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    montopendiente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    serialsiniestro: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    fecregistro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
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
    montoliquidado: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    placa: {
      type: DataTypes.STRING(12),
      allowNull: true,
      defaultValue: "0"
    },
    montogastosadic: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    fechaanurchz: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cd_motivanurchz: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: "0000"
    },
    fechaejecanurchz: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ind_anurchz: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "N"
    },
    tipoanurchz: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    usuarioreg: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'e_siniestro_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_siniestro_seg_cedrif_titular_idx",
        fields: [
          { name: "cedrif_titular" },
        ]
      },
      {
        name: "e_siniestro_seg_pk",
        unique: true,
        fields: [
          { name: "siniestro" },
        ]
      },
      {
        name: "e_siniestro_seg_placa_idx",
        fields: [
          { name: "placa" },
        ]
      },
      {
        name: "e_siniestro_seg_serialaseg_idx",
        fields: [
          { name: "serialaseg" },
        ]
      },
      {
        name: "e_siniestro_seg_serialcontrato_idx",
        fields: [
          { name: "serialcontrato" },
          { name: "serialcertif" },
        ]
      },
      {
        name: "e_siniestro_seg_serialsiniestro_idx",
        fields: [
          { name: "serialsiniestro" },
        ]
      },
    ]
  });
};
