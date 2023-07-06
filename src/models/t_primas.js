const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_primas', {
    idprimas: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    idfecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    idoficina: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    oficina: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    idarea: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    area: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    idinter: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    intermediario: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    idcontrato: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    anno: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    trimestre: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mtoprimacob: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mtoprimanetanu: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mtoprimapen: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mtoprimaemi: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mtoprimaanu: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mtoprimadev: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mtoprimadevpag: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mtoprimacobnetdevpag: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mtoprimadevg: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mtoprimaxdevg: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 't_primas',
    schema: 'rms40',
    timestamps: false
  });
};
