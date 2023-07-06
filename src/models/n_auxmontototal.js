const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('n_auxmontototal', {
    sum: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'n_auxmontototal',
    schema: 'rms40',
    timestamps: false
  });
};
