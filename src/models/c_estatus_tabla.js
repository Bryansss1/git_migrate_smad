const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_estatus_tabla', {
    nombre_tabla: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    cd_tablaestatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
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
    tableName: 'c_estatus_tabla',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_estatus_tabla_pkey",
        unique: true,
        fields: [
          { name: "nombre_tabla" },
          { name: "cd_tablaestatus" },
        ]
      },
    ]
  });
};
