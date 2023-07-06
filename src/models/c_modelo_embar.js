const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_modelo_embar', {
    cd_marca: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    cd_modelo: {
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
    tableName: 'c_modelo_embar',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_modelo_embar_pkey",
        unique: true,
        fields: [
          { name: "cd_marca" },
          { name: "cd_modelo" },
        ]
      },
    ]
  });
};
