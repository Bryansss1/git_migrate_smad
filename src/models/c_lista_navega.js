const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_lista_navega', {
    nombreusuario: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    menu: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    secuencia: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    principal: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    enlace: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    nombre_pantalla: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    nombre_tabla: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    tipopantalla: {
      type: DataTypes.STRING(2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'c_lista_navega',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_lista_navega_pkey",
        unique: true,
        fields: [
          { name: "nombreusuario" },
          { name: "menu" },
          { name: "secuencia" },
        ]
      },
    ]
  });
};
