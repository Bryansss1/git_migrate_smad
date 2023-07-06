const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_aerocert_seg', {
    numeropoliza: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    certificado: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_marca: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    cd_modelo: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    matricula: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    serialcasco: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    bandera: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    anoconstruc: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_uso: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    cd_motor: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    cd_tipo: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    aerobase: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    territorlimite: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cantpilotos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    cantpasaj: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    cantmotores: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    horasvuelo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false
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
    tableName: 'e_aerocert_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_aerocert_seg_pkey",
        unique: true,
        fields: [
          { name: "serialcontrato" },
          { name: "serialcertif" },
        ]
      },
    ]
  });
};
