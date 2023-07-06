const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_facturatec_seg', {
    factura: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_nac: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    cedrif: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    correl: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    moneda: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    monto: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    montomondnac: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    tasacambio: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_sucursal: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    fechaemision: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fechacobro: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fechavence: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fechaanul: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cd_motivanul: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    fechaejecanul: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    serialfactec: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    serialpersona: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    ctacobrar: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    tipofact: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'e_facturatec_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_facturatec_seg_pkey",
        unique: true,
        fields: [
          { name: "factura" },
        ]
      },
      {
        name: "e_facturatec_seg_serialfactec_idx",
        fields: [
          { name: "serialfactec" },
        ]
      },
      {
        name: "e_facturatec_seg_serialpersona_idx",
        fields: [
          { name: "serialpersona" },
        ]
      },
    ]
  });
};
