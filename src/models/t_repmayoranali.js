const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_repmayoranali', {
    numrep: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    numcuenta: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    numauxiliar: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tipo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fechamov: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    comprobante: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    saldoantini: {
      type: DataTypes.DECIMAL,
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
    saldoact: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 't_repmayoranali',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "t_repmayoranali_pkey",
        unique: true,
        fields: [
          { name: "numrep" },
          { name: "numcuenta" },
          { name: "comprobante" },
        ]
      },
    ]
  });
};
