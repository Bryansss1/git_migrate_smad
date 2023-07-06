const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_cobbenef_seguro', {
    cd_tiposeguro: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_versionseguro: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_subversionseguro: {
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
    cd_benef: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_detbenef: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    fecregistro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'c_cobbenef_seguro',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_cobbenef_seguro_pkey",
        unique: true,
        fields: [
          { name: "cd_tiposeguro" },
          { name: "cd_versionseguro" },
          { name: "cd_subversionseguro" },
          { name: "cd_ramo" },
          { name: "cd_cobert" },
          { name: "cd_benef" },
          { name: "cd_detbenef" },
        ]
      },
    ]
  });
};
