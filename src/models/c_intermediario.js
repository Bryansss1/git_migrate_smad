const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_intermediario', {
    cd_inter: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_nacionalidad: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    cedrif: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    correlativo: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_super: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "000"
    },
    tipointer: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_sucursal: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    ind_comision: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "NO"
    },
    ind_retencion: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "NO"
    },
    fecing: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    }
  }, {
    sequelize,
    tableName: 'c_intermediario',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_intermediario_pk",
        unique: true,
        fields: [
          { name: "cd_inter" },
        ]
      },
    ]
  });
};
