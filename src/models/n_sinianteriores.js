const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('n_sinianteriores', {
    case: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'n_sinianteriores',
    schema: 'rms40',
    timestamps: false
  });
};
