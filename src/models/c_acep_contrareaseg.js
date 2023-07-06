const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_acep_contrareaseg', {
    cd_contrato: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_ramoreaseg: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_tipoctto: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    serialpersona: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    participacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    impuesto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'c_acep_contrareaseg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_acep_contrareaseg_pkey",
        unique: true,
        fields: [
          { name: "cd_contrato" },
          { name: "cd_ramoreaseg" },
          { name: "cd_tipoctto" },
          { name: "serialpersona" },
        ]
      },
    ]
  });
};
