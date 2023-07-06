const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_municipio', {
    cd_pais: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_estado: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_ciudad: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_municipio: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'c_municipio',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_municipio_pkey",
        unique: true,
        fields: [
          { name: "cd_pais" },
          { name: "cd_estado" },
          { name: "cd_ciudad" },
          { name: "cd_municipio" },
        ]
      },
    ]
  });
};
