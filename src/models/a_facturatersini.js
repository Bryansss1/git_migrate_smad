const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('a_facturatersini', {
    siniestro: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    detsiniestro: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    factura: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    numcontrol: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    cd_nac_fact: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    cedrif_fact: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    correl_fact: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    fechafactura: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fechavence: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    moneda: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    montofactura: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    montofacmondnac: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    tasacambio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 1
    },
    porciva: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    montoiva: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    montonetomondnac: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    fecharegistro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    transfsisext: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    fecharecep: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    facturaglobal: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    usuario: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'a_facturatersini',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "a_facturatersini_pkey",
        unique: true,
        fields: [
          { name: "siniestro" },
          { name: "detsiniestro" },
          { name: "factura" },
        ]
      },
    ]
  });
};
