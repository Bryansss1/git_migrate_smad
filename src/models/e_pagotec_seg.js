const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_pagotec_seg', {
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
    cd_tipopagotec: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    moneda: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    cd_nac_pagar: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    cedrif_pagar: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    correl_pagar: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_rol: {
      type: DataTypes.STRING(10),
      allowNull: false
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
    fecaprobpago: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    cd_subclasepago: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    ctapagar: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    transfsisext: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'e_pagotec_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_pagotec_seg_ctapagar_idx",
        fields: [
          { name: "ctapagar" },
        ]
      },
      {
        name: "e_pagotec_seg_pkey",
        unique: true,
        fields: [
          { name: "numpagotec" },
        ]
      },
      {
        name: "e_pagotec_seg_siniestro_idx",
        fields: [
          { name: "siniestro" },
          { name: "detsiniestro" },
          { name: "numpagotec" },
        ]
      },
    ]
  });
};
