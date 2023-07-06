const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_recadesc_seg', {
    numeropoliza: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    certificado: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    indtipo: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_recadesc: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    monto: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    porcentaje: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    aplicasobre: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
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
    }
  }, {
    sequelize,
    tableName: 'e_recadesc_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_recadesc_seg_numeropoliza_idx",
        fields: [
          { name: "numeropoliza" },
          { name: "certificado" },
          { name: "indtipo" },
          { name: "cd_recadesc" },
        ]
      },
      {
        name: "e_recadesc_seg_pk",
        unique: true,
        fields: [
          { name: "serialcontrato" },
          { name: "serialcertif" },
          { name: "indtipo" },
          { name: "cd_recadesc" },
        ]
      },
    ]
  });
};
