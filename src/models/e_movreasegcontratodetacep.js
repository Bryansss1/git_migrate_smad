const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_movreasegcontratodetacep', {
    serialcontrato: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    serialcertif: {
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
    cd_tipoctto: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    serialpersona: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    serialreaseg: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    movreasegcontratodetacep: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    suma: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    prima: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    sumanac: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    primanac: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    participacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    impuesto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false
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
    tableName: 'e_movreasegcontratodetacep',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_movreasegcontratodetacep_pkey",
        unique: true,
        fields: [
          { name: "serialcontrato" },
          { name: "serialcertif" },
          { name: "movoperprima" },
          { name: "cd_contrato" },
          { name: "cd_ramoreaseg" },
          { name: "cd_tipoctto" },
          { name: "serialpersona" },
          { name: "movreasegcontratodetacep" },
        ]
      },
    ]
  });
};
