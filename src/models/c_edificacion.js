const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_edificacion', {
    descripcion: {
      type: DataTypes.STRING(320),
      allowNull: false
    },
    cd_edificacion: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    altura: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    observacion: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    }
  }, {
    sequelize,
    tableName: 'c_edificacion',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_edificacion_pk",
        unique: true,
        fields: [
          { name: "cd_edificacion" },
        ]
      },
    ]
  });
};
