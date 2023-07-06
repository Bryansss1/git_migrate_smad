const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_marca_aero', {
    cd_marca: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(4),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'c_marca_aero',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_marca_aero_pkey",
        unique: true,
        fields: [
          { name: "cd_marca" },
        ]
      },
    ]
  });
};
