const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_movreasegcontrato', {
    serialcontrato: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    serialcertif: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    numeropoliza: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    certificado: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    movoperprima: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_contrato: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_ramoreaseg: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    serialreaseg: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    movreasegcontrato: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    sumadistribuir: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    sumadistribuida: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    primadistribuir: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    primadistribuida: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    fechareg: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    fechamodif: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    nombreusuario: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    hora: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING(2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'e_movreasegcontrato',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_movreasegcontrato_pkey",
        unique: true,
        fields: [
          { name: "serialcontrato" },
          { name: "serialcertif" },
          { name: "movoperprima" },
          { name: "cd_contrato" },
          { name: "cd_ramoreaseg" },
          { name: "movreasegcontrato" },
        ]
      },
    ]
  });
};
