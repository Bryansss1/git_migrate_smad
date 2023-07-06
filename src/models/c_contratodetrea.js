const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_contratodetrea', {
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
    orden: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    montocapacidad: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    pleno: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 1
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
    aportesuper: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    epi: {
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
    arrasperd: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    trascartprim: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    trascartsini: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    sinicontado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    cuentas: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    enviocuentas: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    pagocuentas: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    comisadic: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    exclu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    avisocancel: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    notas: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    reaseguro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    indretenprot: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "0"
    },
    indtrascartprim: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "0"
    },
    indtrascartsini: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "0"
    },
    otrdeducc: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'c_contratodetrea',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_contratodetrea_pk",
        unique: true,
        fields: [
          { name: "cd_contrato" },
          { name: "cd_ramoreaseg" },
          { name: "cd_tipoctto" },
        ]
      },
    ]
  });
};
