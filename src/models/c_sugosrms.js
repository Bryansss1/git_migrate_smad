const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_sugosrms', {
    cod_registro: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descrip_ciap: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cod_cie: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descrip_cie: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cod_cie2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descrip_cie2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cod_cie3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descrip_cie3: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'c_sugosrms',
    schema: 'rms40',
    timestamps: false
  });
};
