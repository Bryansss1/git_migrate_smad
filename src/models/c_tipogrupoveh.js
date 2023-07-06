const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_tipogrupoveh', {
    cd_tipoveh: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_grupoveh: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'c_tipogrupoveh',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_tipogrupo_pkey",
        unique: true,
        fields: [
          { name: "cd_tipoveh" },
          { name: "cd_grupoveh" },
        ]
      },
    ]
  });
};
