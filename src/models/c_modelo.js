const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_modelo', {
    cd_tipo: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    cd_marca: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    cd_modelo: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    tx_modelo: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    cd_clasif: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'c_modelo',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "modelo_pkey",
        unique: true,
        fields: [
          { name: "cd_tipo" },
          { name: "cd_marca" },
          { name: "cd_modelo" },
        ]
      },
    ]
  });
};
