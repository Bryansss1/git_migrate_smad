const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_patince_seg', {
    numeropoliza: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    certificado: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    tipoindole: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    cd_indole: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_riesgo: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    prevencion: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    tipestructura: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    tiptecho: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    tippared: {
      type: DataTypes.STRING(4),
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
    }
  }, {
    sequelize,
    tableName: 'e_patince_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_patince_seg_pkey",
        unique: true,
        fields: [
          { name: "serialcontrato" },
          { name: "serialcertif" },
        ]
      },
    ]
  });
};
