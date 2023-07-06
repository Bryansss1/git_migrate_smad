const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_pagodettec_seg', {
    siniestro: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    detsiniestro: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    numpagotec: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    numpagodettec: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    serialpagoreserv: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    montoliquidado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    montoapagar: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    montopendiente: {
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
    }
  }, {
    sequelize,
    tableName: 'e_pagodettec_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_pagodettec_seg_pkey",
        unique: true,
        fields: [
          { name: "numpagotec" },
          { name: "numpagodettec" },
        ]
      },
      {
        name: "e_pagodettec_seg_serialpagoreserv_idx",
        fields: [
          { name: "serialpagoreserv" },
        ]
      },
      {
        name: "e_pagodettec_seg_siniestro_idx",
        fields: [
          { name: "siniestro" },
          { name: "detsiniestro" },
          { name: "numpagotec" },
          { name: "numpagodettec" },
        ]
      },
    ]
  });
};
