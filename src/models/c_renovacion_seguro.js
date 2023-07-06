const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_renovacion_seguro', {
    cd_tiposegurodesde: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_versionsegurodesde: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_subversionsegurodesde: {
      type: DataTypes.STRING(10),
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
    cd_tiposegurohasta: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_versionsegurohasta: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_subversionsegurohasta: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    fecharegistro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'c_renovacion_seguro',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_renovacion_seguro_pkey",
        unique: true,
        fields: [
          { name: "cd_tiposegurodesde" },
          { name: "cd_versionsegurodesde" },
          { name: "cd_subversionsegurodesde" },
          { name: "fechainicio" },
          { name: "fechafin" },
        ]
      },
    ]
  });
};
