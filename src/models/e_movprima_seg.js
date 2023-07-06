const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_movprima_seg', {
    numeropoliza: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    certificado: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    numprima: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    nummovprima: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_tipomov: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    fechainicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fechafin: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fechareg: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    monto: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    montocomision: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    tasacambio: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    montomondnac: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    montocomisionmondnac: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    montorecargo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    montodescuento: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    montoprimaneta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
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
      allowNull: false,
      defaultValue: 0
    },
    fechamodif: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    nombreusuario: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    hora: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'e_movprima_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_movprima_seg_pkey",
        unique: true,
        fields: [
          { name: "serialcontrato" },
          { name: "serialcertif" },
          { name: "numprima" },
          { name: "nummovprima" },
        ]
      },
    ]
  });
};
