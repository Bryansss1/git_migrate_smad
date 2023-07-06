const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_anexclau', {
    cd_anexclau: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    tipoanexclau: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    textoanexclau: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    }
  }, {
    sequelize,
    tableName: 'c_anexclau',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_anexclau_pkey",
        unique: true,
        fields: [
          { name: "cd_anexclau" },
        ]
      },
    ]
  });
};
