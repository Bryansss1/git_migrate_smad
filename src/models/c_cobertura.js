const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_cobertura', {
    cd_ramo: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_cobert: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    cd_cobertsuper: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    ind_oblig: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "N"
    },
    ind_tipcobert: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "R"
    },
    ind_basica: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "N"
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    }
  }, {
    sequelize,
    tableName: 'c_cobertura',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_cobertura_pkey",
        unique: true,
        fields: [
          { name: "cd_ramo" },
          { name: "cd_cobert" },
        ]
      },
    ]
  });
};
