const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_forma_proceso_tab', {
    nombre_pantalla: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    orden: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    etiqueta: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    nombreimagen: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    indtxthref: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    instruccion: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    retornapantmodif: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "S"
    },
    retornapantlista: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'c_forma_proceso_tab',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_forma_proceso_tab_pk",
        unique: true,
        fields: [
          { name: "nombre_pantalla" },
          { name: "orden" },
        ]
      },
    ]
  });
};
