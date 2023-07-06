const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_bien', {
    cd_bien: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(90),
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "000"
    }
  }, {
    sequelize,
    tableName: 'c_bien',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_bien_pkey",
        unique: true,
        fields: [
          { name: "cd_bien" },
        ]
      },
    ]
  });
};
