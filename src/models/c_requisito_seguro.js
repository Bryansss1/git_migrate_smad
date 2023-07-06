const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_requisito_seguro', {
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
    cd_requisito: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    ind_oblig: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "N"
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    tiporequisito: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'c_requisito_seguro',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_requisito_seguro_pkey",
        unique: true,
        fields: [
          { name: "cd_tiposeguro" },
          { name: "cd_versionseguro" },
          { name: "cd_subversionseguro" },
          { name: "cd_requisito" },
        ]
      },
    ]
  });
};
