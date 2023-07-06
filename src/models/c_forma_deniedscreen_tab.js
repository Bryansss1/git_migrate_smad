const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_forma_deniedscreen_tab', {
    nombre_pantalla: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    nombreusuario: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    etiquetaproc: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "NO APLICA"
    },
    accion: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'c_forma_deniedscreen_tab',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_forma_deniedscreen_tab_pk",
        unique: true,
        fields: [
          { name: "nombre_pantalla" },
          { name: "nombreusuario" },
          { name: "tipo" },
          { name: "etiquetaproc" },
        ]
      },
    ]
  });
};
