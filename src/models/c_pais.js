const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_pais', {
    cd_pais: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    dominio: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'c_pais',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_pais_pkey",
        unique: true,
        fields: [
          { name: "cd_pais" },
        ]
      },
    ]
  });
};
