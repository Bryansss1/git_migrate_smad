const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_menu', {
    nombreusuario: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    id: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      primaryKey: true
    },
    nivel: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    orden: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    padre: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    }
  }, {
    sequelize,
    tableName: 'c_menu',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_menu_pkey",
        unique: true,
        fields: [
          { name: "nombreusuario" },
          { name: "id" },
        ]
      },
    ]
  });
};
