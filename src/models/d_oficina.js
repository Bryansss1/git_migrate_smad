const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('d_oficina', {
    idoficina: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    oficina: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'd_oficina',
    schema: 'rms40',
    timestamps: false
  });
};
