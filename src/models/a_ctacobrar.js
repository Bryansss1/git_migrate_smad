const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('a_ctacobrar', {
    ctacobrar: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_nac_cobrar: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    cedrif_cobrar: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    correl_cobrar: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    tipocobro: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    montocobro: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    montodiferencia: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    fechacobro: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    moneda: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    montocobrado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    cd_sucursal: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "0000"
    },
    observacion: {
      type: DataTypes.STRING(750),
      allowNull: true
    },
    fecharegistro: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ind_prima: {
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
    tableName: 'a_ctacobrar',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "a_ctacobrar_pkey",
        unique: true,
        fields: [
          { name: "ctacobrar" },
        ]
      },
    ]
  });
};
