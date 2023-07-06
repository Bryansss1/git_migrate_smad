const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_marca', {
    cd_tipo: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    cd_marca: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    tx_marca: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(4),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'c_marca',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "marca_pkey",
        unique: true,
        fields: [
          { name: "cd_tipo" },
          { name: "cd_marca" },
        ]
      },
    ]
  });
};
