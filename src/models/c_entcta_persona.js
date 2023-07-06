const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_entcta_persona', {
    serialpersona: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    numseccta: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    tipocta: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "000"
    },
    moneda: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    entfinan: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    numctawallet: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    predeterminada: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: "000"
    }
  }, {
    sequelize,
    tableName: 'c_entcta_persona',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_entcta_persona_pkey",
        unique: true,
        fields: [
          { name: "serialpersona" },
          { name: "numseccta" },
        ]
      },
    ]
  });
};
