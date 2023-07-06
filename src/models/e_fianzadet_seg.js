const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_fianzadet_seg', {
    numeropoliza: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    certificado: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    montocontrato: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    feccontrato: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fecjunta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    actajunta: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    expediente: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    tiempo: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_tipotiempo: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    objetofianza: {
      type: DataTypes.STRING(1000),
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
    },
    fechafiniquito: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    numerofiniquito: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'e_fianzadet_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_fianzadet_seg_pkey",
        unique: true,
        fields: [
          { name: "serialcontrato" },
          { name: "serialcertif" },
        ]
      },
    ]
  });
};
