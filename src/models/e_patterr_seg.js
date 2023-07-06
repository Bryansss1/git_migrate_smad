const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_patterr_seg', {
    numeropoliza: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    certificado: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_edificacion: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    cd_fachada: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    pisos: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    zonasismica: {
      type: DataTypes.STRING(2),
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
      allowNull: false
    },
    tiempoconstruc: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'e_patterr_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_patterr_seg_pkey",
        unique: true,
        fields: [
          { name: "serialcontrato" },
          { name: "serialcertif" },
        ]
      },
    ]
  });
};
