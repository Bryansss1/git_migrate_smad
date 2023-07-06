const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('n_sinisecuelas', {
    sum: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'n_sinisecuelas',
    schema: 'rms40',
    timestamps: false
  });
};
