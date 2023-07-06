const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_contratoreaseg', {
    cd_contrato: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fechainivig: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fechafinvig: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    serie: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    moneda: {
      type: DataTypes.STRING(2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'c_contratoreaseg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_contratoreaseg_pkey",
        unique: true,
        fields: [
          { name: "cd_contrato" },
        ]
      },
    ]
  });
};
