const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_anexclau_seg', {
    numeropoliza: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    certificado: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    tipoanexclau: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_anexclau: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    textoanexclau: {
      type: DataTypes.STRING(2000),
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
    tableName: 'e_anexclau_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_anexclau_seg_numeropoliza_idx",
        fields: [
          { name: "numeropoliza" },
          { name: "certificado" },
          { name: "tipoanexclau" },
          { name: "cd_anexclau" },
        ]
      },
      {
        name: "e_anexclau_seg_pk",
        unique: true,
        fields: [
          { name: "serialcontrato" },
          { name: "serialcertif" },
          { name: "tipoanexclau" },
          { name: "cd_anexclau" },
        ]
      },
    ]
  });
};
