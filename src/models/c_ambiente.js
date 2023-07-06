const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_ambiente', {
    nombre: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'c_ambiente',
    schema: 'rms40',
    timestamps: false
  });
};
