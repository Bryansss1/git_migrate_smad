const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_recadesc', {
    cd_recadesc: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    indtipo: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    }
  }, {
    sequelize,
    tableName: 'c_recadesc',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_recadesc_pkey",
        unique: true,
        fields: [
          { name: "cd_recadesc" },
        ]
      },
    ]
  });
};
