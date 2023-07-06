const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_reasegcontratodetacep', {
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
    liquidacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    impmunic: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    comision: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    aportesudeaseg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    otrasdeducc: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    primanetadeduc: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    primanetaislr: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'e_reasegcontratodetacep',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_reasegcontratodetacep_pkey",
        unique: true,
        fields: [
          { name: "serialcontrato" },
          { name: "serialcertif" },
          { name: "movoperprima" },
          { name: "cd_contrato" },
          { name: "cd_ramoreaseg" },
          { name: "cd_tipoctto" },
          { name: "serialpersona" },
        ]
      },
    ]
  });
};
