const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_forma_programa_tab', {
    nombre_pantalla: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    nombre_programa: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    orden_ejecucion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    tipo_programa: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    tipollamado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: "1=Validación Basica, 2=Guardar (crear) , 3=Update, 4= Borrar"
    }
  }, {
    sequelize,
    tableName: 'c_forma_programa_tab',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_forma_programa_tab_pkey",
        unique: true,
        fields: [
          { name: "nombre_pantalla" },
          { name: "nombre_programa" },
        ]
      },
    ]
  });
};
