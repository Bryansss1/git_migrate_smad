const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_carga_parent', {
    carga: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
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
    cd_parent: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    fecharegistro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 't_carga_parent',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "t_carga_parent_pkey",
        unique: true,
        fields: [
          { name: "carga" },
          { name: "cd_tiposeguro" },
          { name: "cd_versionseguro" },
          { name: "cd_subversionseguro" },
          { name: "cd_ramo" },
          { name: "cd_cobert" },
          { name: "cd_parent" },
        ]
      },
    ]
  });
};
