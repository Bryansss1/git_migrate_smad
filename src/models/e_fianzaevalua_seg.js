const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_fianzaevalua_seg', {
    numeropoliza: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    certificado: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    evaluacion: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    montoevaluacion: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    fecevaluacion: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    porcejecu: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    fecregistro: {
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
    }
  }, {
    sequelize,
    tableName: 'e_fianzaevalua_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_fianzaevalua_seg_pkey",
        unique: true,
        fields: [
          { name: "serialcontrato" },
          { name: "serialcertif" },
          { name: "evaluacion" },
        ]
      },
    ]
  });
};
