const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_opcion_menu', {
    id: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    indmenu: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    txhref: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    }
  }, {
    sequelize,
    tableName: 'c_opcion_menu',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_opcion_menu_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
