const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_personafinan', {
    serialpersona: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    fecreg: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    activocorriente: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    activonocorriente: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    totalactivo: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    pasivocorriente: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    pasivonocorriente: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    totalpasivo: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    patrimonio: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ratiosolvencia: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    capitaltrabajo: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ratiodeliquidez: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    ind_aplicumu: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "S"
    }
  }, {
    sequelize,
    tableName: 'c_personafinan',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_personafinan_pkey",
        unique: true,
        fields: [
          { name: "serialpersona" },
          { name: "fecreg" },
        ]
      },
    ]
  });
};
