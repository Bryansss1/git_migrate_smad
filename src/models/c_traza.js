const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_traza', {
    linea: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    mensaje: {
      type: DataTypes.STRING(400),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'c_traza',
    schema: 'rms40',
    timestamps: false
  });
};
