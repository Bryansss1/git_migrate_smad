const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_movreasegcontratodet', {
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
    cd_tipoctto: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    serialreaseg: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    orden: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    movdetreaseg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    movreasegcontratodet: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    sumacolocada: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    sumadistribuida: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    sumarestante: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    sumadistribuirnac: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    sumarestantenac: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    primadistribuida: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    primadistribuidanac: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    retencion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    comision: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    impmunic: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    partbenef: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    gastosreaseg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    otrdeducc: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    notas: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fechareg: {
      type: DataTypes.DATEONLY,
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
    tableName: 'e_movreasegcontratodet',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_movreasegcontratodet_pkey",
        unique: true,
        fields: [
          { name: "serialcontrato" },
          { name: "serialcertif" },
          { name: "movoperprima" },
          { name: "cd_contrato" },
          { name: "cd_ramoreaseg" },
          { name: "cd_tipoctto" },
          { name: "movreasegcontratodet" },
        ]
      },
    ]
  });
};
