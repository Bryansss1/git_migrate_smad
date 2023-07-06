const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('factor_fachada', {
    codprod: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    codramo: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    codplan: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    revplan: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    tipofach: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    factfach: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'factor_fachada',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "factor_fachada_pkey",
        unique: true,
        fields: [
          { name: "codprod" },
          { name: "codplan" },
          { name: "revplan" },
          { name: "codramo" },
          { name: "tipofach" },
        ]
      },
    ]
  });
};
