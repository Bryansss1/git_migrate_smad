const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_forma_preload_tab', {
    nombre_pantalla: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    transaccion: {
      type: DataTypes.STRING(3),
      allowNull: false,
      comment: "CONsulta, LISta, MODificar e INCluir"
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    }
  }, {
    sequelize,
    tableName: 'c_forma_preload_tab',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_forma_preload_tab_pkey",
        unique: true,
        fields: [
          { name: "nombre_pantalla" },
        ]
      },
    ]
  });
};
