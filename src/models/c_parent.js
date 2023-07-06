const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_parent', {
    cd_parent: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    genero: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    ind_maternidad: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ind_titular: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'c_parent',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_parent_pkey",
        unique: true,
        fields: [
          { name: "cd_parent" },
        ]
      },
    ]
  });
};
