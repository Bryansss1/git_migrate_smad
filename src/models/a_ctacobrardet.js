const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('a_ctacobrardet', {
    ctacobrar: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    numprima: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    monto: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    fechacobro: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    cd_clase: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "0000"
    },
    cd_subclase: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "0000"
    },
    orden: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ctacobrardet: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'a_ctacobrardet',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "a_ctacobrardet_numprima_idx",
        fields: [
          { name: "numprima" },
        ]
      },
      {
        name: "a_ctacobrardet_pk",
        unique: true,
        fields: [
          { name: "ctacobrar" },
          { name: "ctacobrardet" },
          { name: "cd_clase" },
          { name: "cd_subclase" },
        ]
      },
    ]
  });
};
