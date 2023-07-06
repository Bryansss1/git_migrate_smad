const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_sinifactinterfazsigesp', {
    serialsinisigesp: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
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
    montofactura: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    numsol: {
      type: DataTypes.STRING(16),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'e_sinifactinterfazsigesp',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_sinifactinterfazsigesp_pkey",
        unique: true,
        fields: [
          { name: "serialsinisigesp" },
          { name: "siniestro" },
          { name: "detsiniestro" },
          { name: "factura" },
        ]
      },
    ]
  });
};
