const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_forma_notabla', {
    nocampo: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'c_forma_notabla',
    schema: 'rms40',
    timestamps: false
  });
};
