const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_tipocttoreaseg', {
    cd_tipoctto: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cd_tipocttorea: {
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
    tableName: 'c_tipocttoreaseg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_tipocttoreaseg_pkey",
        unique: true,
        fields: [
          { name: "cd_tipoctto" },
        ]
      },
    ]
  });
};
