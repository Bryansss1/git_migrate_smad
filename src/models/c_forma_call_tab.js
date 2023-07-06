const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_forma_call_tab', {
    nombre_pantalla: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    nombreimagen: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    linea: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    orden: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    txhref: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'c_forma_call_tab',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_forma_call_tab_un",
        unique: true,
        fields: [
          { name: "nombre_pantalla" },
          { name: "nombreimagen" },
        ]
      },
    ]
  });
};
