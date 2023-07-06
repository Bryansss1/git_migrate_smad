const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_inspcert_seg', {
    numinspec: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    placa: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    numeropoliza: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    certificado: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    serialcontrato: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    serialcertif: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'e_inspcert_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_inspcert_seg_pk",
        unique: true,
        fields: [
          { name: "numinspec" },
          { name: "placa" },
          { name: "serialcontrato" },
          { name: "serialcertif" },
        ]
      },
      {
        name: "e_inspcert_seg_serialcontrato_idx",
        fields: [
          { name: "serialcontrato" },
          { name: "serialcertif" },
        ]
      },
    ]
  });
};
