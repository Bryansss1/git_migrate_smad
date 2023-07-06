const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_sincobertaseg_seg', {
    siniestro: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    detsiniestro: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    serialaseg: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    serialcobert: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    reclamado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    aprobado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    noaprobado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    fecregistro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    montoliquidado: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    deducible: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    porcreembolso: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    ind_deducible: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: "0"
    },
    sumadisponible: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    serialpagoreserv: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    diasplazoespera: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'e_sincobertaseg_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_sincobertaseg_seg_pk",
        unique: true,
        fields: [
          { name: "siniestro" },
          { name: "detsiniestro" },
          { name: "serialcobert" },
        ]
      },
      {
        name: "e_sincobertaseg_seg_serialaseg_idx",
        fields: [
          { name: "serialaseg" },
        ]
      },
      {
        name: "e_sincobertaseg_seg_serialcobert_idx",
        fields: [
          { name: "serialcobert" },
        ]
      },
      {
        name: "e_sincobertaseg_seg_serialpagoreserv_idx",
        fields: [
          { name: "serialpagoreserv" },
        ]
      },
      {
        name: "e_sincobertauto_seg_serialcobert_idx",
        fields: [
          { name: "serialcobert" },
        ]
      },
    ]
  });
};
