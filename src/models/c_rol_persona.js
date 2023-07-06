const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_rol_persona', {
    cd_nacionalidad: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    cedrif: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    correlativo: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_rol: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    }
  }, {
    sequelize,
    tableName: 'c_rol_persona',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_rol_persona_pkey",
        unique: true,
        fields: [
          { name: "cd_nacionalidad" },
          { name: "cedrif" },
          { name: "correlativo" },
          { name: "cd_rol" },
        ]
      },
    ]
  });
};
