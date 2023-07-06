const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_recadesc_seguro', {
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
    cd_recadesc: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    monto: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    porcentaje: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    aplicasobre: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    indtipo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ind_oblig: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'c_recadesc_seguro',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_recadesc_seguro_pkey",
        unique: true,
        fields: [
          { name: "cd_tiposeguro" },
          { name: "cd_versionseguro" },
          { name: "cd_subversionseguro" },
          { name: "cd_recadesc" },
        ]
      },
    ]
  });
};
