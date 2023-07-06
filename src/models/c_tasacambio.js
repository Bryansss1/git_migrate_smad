const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_tasacambio', {
    moneda: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tasa: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    }
  }, {
    sequelize,
    tableName: 'c_tasacambio',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_tasacambio_moneda_idx",
        unique: true,
        fields: [
          { name: "moneda" },
          { name: "fecha" },
        ]
      },
    ]
  });
};
