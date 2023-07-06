const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_repbalcomprob', {
    numrep: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    numcuenta: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    numauxiliar: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    saldoant: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    totaldebe: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    totalhaber: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    saldo: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 't_repbalcomprob',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "t_repbalcomprob_numrep_idx",
        fields: [
          { name: "numrep" },
          { name: "numcuenta" },
        ]
      },
    ]
  });
};
