const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_rol', {
    cd_rol: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    ind_proveedor: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    }
  }, {
    sequelize,
    tableName: 'c_rol',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_rol_pkey",
        unique: true,
        fields: [
          { name: "cd_rol" },
        ]
      },
    ]
  });
};
