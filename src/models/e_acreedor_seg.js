const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_acreedor_seg', {
    numeropoliza: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    certificado: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_nac_acreedor: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    cedrif_acreedor: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    correl_acreedor: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    fechainicio: {
      type: DataTypes.DATEONLY,
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
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    }
  }, {
    sequelize,
    tableName: 'e_acreedor_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_acreedor_seg_idx",
        fields: [
          { name: "numeropoliza" },
          { name: "certificado" },
        ]
      },
      {
        name: "e_acreedor_seg_pkey",
        unique: true,
        fields: [
          { name: "serialcontrato" },
          { name: "serialcertif" },
        ]
      },
    ]
  });
};
