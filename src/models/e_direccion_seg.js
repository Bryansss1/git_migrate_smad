const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_direccion_seg', {
    numeropoliza: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    certificado: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_tipodirecc: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_pais: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_estado: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_ciudad: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_municipio: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING(500),
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
    },
    norte: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    sur: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    este: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    oeste: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'e_direccion_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_direccion_seg_numeropoliza_idx",
        fields: [
          { name: "numeropoliza" },
          { name: "certificado" },
          { name: "cd_tipodirecc" },
        ]
      },
      {
        name: "e_direccion_seg_pk",
        unique: true,
        fields: [
          { name: "serialcontrato" },
          { name: "serialcertif" },
          { name: "cd_tipodirecc" },
        ]
      },
      {
        name: "e_direccion_seg_serialcontrato_idx",
        fields: [
          { name: "serialcontrato" },
          { name: "serialcertif" },
        ]
      },
    ]
  });
};
