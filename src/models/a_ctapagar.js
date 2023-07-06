const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('a_ctapagar', {
    ctapagar: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_nac_pagar: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    cedrif_pagar: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    correl_pagar: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    tipopago: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    moneda: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    montopago: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    montodifpago: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    montopagado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    fecharegistro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fechapago: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cd_sucursal: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_centrocosto: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    observacion: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ind_siniestro: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    ind_genautomatico: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'a_ctapagar',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "a_ctapagar_pkey",
        unique: true,
        fields: [
          { name: "ctapagar" },
        ]
      },
    ]
  });
};
