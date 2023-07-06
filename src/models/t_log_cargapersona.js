const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_log_cargapersona', {
    carga: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    numerolinea: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    linea: {
      type: DataTypes.STRING(600),
      allowNull: true
    },
    nivel: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 1,
      comment: "1= Validacion Basica, 2 = Carga en la Tabla Intermedia t_carga_persona"
    }
  }, {
    sequelize,
    tableName: 't_log_cargapersona',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "t_log_cargapersona_carga_idx",
        fields: [
          { name: "carga" },
          { name: "numerolinea" },
        ]
      },
    ]
  });
};
