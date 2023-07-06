const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_primafondodet_seg', {
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
      allowNull: false,
      defaultValue: 0
    },
    serialcertif: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    serialaseg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    serialcobert: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    movoperprima: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    serialanuexc: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    serialfactec: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    factura: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    numprimadev: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    numprimadevdet: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ctapagar: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ctacobrar: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    suma: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'e_primafondodet_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_primafondodet_seg_ctacobrar_idx",
        fields: [
          { name: "ctacobrar" },
        ]
      },
      {
        name: "e_primafondodet_seg_ctapagar_idx",
        fields: [
          { name: "ctapagar" },
        ]
      },
      {
        name: "e_primafondodet_seg_factura_idx",
        fields: [
          { name: "factura" },
        ]
      },
      {
        name: "e_primafondodet_seg_numprima_idx",
        fields: [
          { name: "numprima" },
        ]
      },
      {
        name: "e_primafondodet_seg_pkey",
        unique: true,
        fields: [
          { name: "numeropoliza" },
          { name: "certificado" },
          { name: "numprima" },
          { name: "numprimadet" },
        ]
      },
      {
        name: "e_primafondodet_seg_serialcontrato_idx",
        fields: [
          { name: "serialcontrato" },
          { name: "serialcertif" },
          { name: "numprima" },
          { name: "numprimadet" },
        ]
      },
    ]
  });
};
