const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_comcob_int', {
    cd_inter: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_ramo: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_cobert: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    tasa: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    fechadesde: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fechahasta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "000"
    }
  }, {
    sequelize,
    tableName: 'c_comcob_int',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_comcob_int_pkey",
        unique: true,
        fields: [
          { name: "cd_inter" },
          { name: "cd_ramo" },
          { name: "cd_cobert" },
          { name: "fechadesde" },
        ]
      },
    ]
  });
};
