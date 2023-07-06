const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_forma_script_tab', {
    nombre_pantalla: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    texto: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    }
  }, {
    sequelize,
    tableName: 'c_forma_script_tab',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_forma_script_tab_un",
        unique: true,
        fields: [
          { name: "nombre_pantalla" },
        ]
      },
    ]
  });
};
