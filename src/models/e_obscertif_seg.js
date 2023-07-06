const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_obscertif_seg', {
    numeropoliza: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    certificado: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    fechainicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    observacion: {
      type: DataTypes.STRING(250),
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
    tableName: 'e_obscertif_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_obscertif_seg_serialcontrato_idx",
        fields: [
          { name: "serialcontrato" },
          { name: "serialcertif" },
        ]
      },
      {
        name: "e_observacion_seg_pkey",
        unique: true,
        fields: [
          { name: "numeropoliza" },
          { name: "certificado" },
          { name: "fechainicio" },
        ]
      },
    ]
  });
};
