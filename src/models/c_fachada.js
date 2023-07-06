const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_fachada', {
    cd_fachada: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(320),
      allowNull: false
    },
    factorn: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    }
  }, {
    sequelize,
    tableName: 'c_fachada',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_fachada_pkey",
        unique: true,
        fields: [
          { name: "cd_fachada" },
        ]
      },
    ]
  });
};
