const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('a_facturatercero', {
    ctapagar: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    factura: {
      type: DataTypes.DECIMAL,
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
    fecharegistro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    control: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'a_facturatercero',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "a_facturatercero_pkey",
        unique: true,
        fields: [
          { name: "ctapagar" },
          { name: "factura" },
        ]
      },
    ]
  });
};
