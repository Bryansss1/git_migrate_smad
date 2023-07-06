const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_conductor_seg', {
    numeropoliza: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    certificado: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_nacionalidad: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    cedrif: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    correlativo: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    fechainicio: {
      type: DataTypes.DATEONLY,
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
    tableName: 'e_conductor_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_conductor_seg_pkey",
        unique: true,
        fields: [
          { name: "numeropoliza" },
          { name: "certificado" },
          { name: "cd_nacionalidad" },
          { name: "cedrif" },
          { name: "correlativo" },
        ]
      },
      {
        name: "e_conductor_seg_serialcontrato_idx",
        fields: [
          { name: "serialcontrato" },
          { name: "serialcertif" },
        ]
      },
    ]
  });
};
