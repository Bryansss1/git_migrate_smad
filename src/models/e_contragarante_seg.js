const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_contragarante_seg', {
    numeropoliza: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    certificado: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_nac_contragr: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    cedrif_contragr: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    correl_contragr: {
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
    },
    porcpart: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 100
    }
  }, {
    sequelize,
    tableName: 'e_contragarante_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_contragarante_seg_idx",
        fields: [
          { name: "numeropoliza" },
          { name: "certificado" },
        ]
      },
      {
        name: "e_contragarante_seg_pk",
        unique: true,
        fields: [
          { name: "serialcontrato" },
          { name: "serialcertif" },
          { name: "cd_nac_contragr" },
          { name: "cedrif_contragr" },
          { name: "correl_contragr" },
        ]
      },
    ]
  });
};
