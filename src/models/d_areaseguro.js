const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('d_areaseguro', {
    idarea: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    area: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'd_areaseguro',
    schema: 'rms40',
    timestamps: false
  });
};
