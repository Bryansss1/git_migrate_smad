const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('d_intermediario', {
    idinter: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    tipointer: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'd_intermediario',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "d_intermediario_pk",
        unique: true,
        fields: [
          { name: "idinter" },
        ]
      },
    ]
  });
};
