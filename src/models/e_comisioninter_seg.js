const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_comisioninter_seg', {
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
    numprimadet: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_tipomov: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    cd_ramo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cd_cobert: {
      type: DataTypes.STRING(10),
      allowNull: true
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
    porccomis: {
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
    serialcontrato: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    serialcertif: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    serialaseg: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    serialcobert: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_inter: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    porcpart: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'e_comisioninter_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_comisioninter_seg_pk",
        unique: true,
        fields: [
          { name: "cd_inter" },
          { name: "numprima" },
          { name: "numprimadet" },
          { name: "serialcobert" },
        ]
      },
    ]
  });
};
