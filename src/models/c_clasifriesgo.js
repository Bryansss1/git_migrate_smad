const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_clasifriesgo', {
    cd_riesgo: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "000"
    }
  }, {
    sequelize,
    tableName: 'c_clasifriesgo',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_clasifriesgo_pkey",
        unique: true,
        fields: [
          { name: "cd_riesgo" },
        ]
      },
    ]
  });
};
