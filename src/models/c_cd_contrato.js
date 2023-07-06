const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_cd_contrato', {
    cd_contrato: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'c_cd_contrato',
    schema: 'rms40',
    timestamps: false
  });
};
