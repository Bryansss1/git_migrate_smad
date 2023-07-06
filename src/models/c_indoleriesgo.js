const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_indoleriesgo', {
    tipo: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    cd_indole: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "000"
    }
  }, {
    sequelize,
    tableName: 'c_indoleriesgo',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_indoleriesgo_pkey",
        unique: true,
        fields: [
          { name: "tipo" },
          { name: "cd_indole" },
        ]
      },
    ]
  });
};
