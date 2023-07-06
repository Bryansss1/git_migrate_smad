const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_tipo_objeto', {
    cd_tipo: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    tx_tipo: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(4),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'c_tipo_objeto',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_tipo_objeto_pkey",
        unique: true,
        fields: [
          { name: "cd_tipo" },
          { name: "tx_tipo" },
        ]
      },
    ]
  });
};
