const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_vehicert_seg', {
    numeropoliza: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    certificado: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    placa: {
      type: DataTypes.STRING(12),
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
    tableName: 'e_vehicert_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_vehicert_seg_numeropoliza_idx",
        fields: [
          { name: "numeropoliza" },
          { name: "certificado" },
        ]
      },
      {
        name: "e_vehicert_seg_pk",
        unique: true,
        fields: [
          { name: "serialcontrato" },
          { name: "serialcertif" },
          { name: "placa" },
        ]
      },
    ]
  });
};
