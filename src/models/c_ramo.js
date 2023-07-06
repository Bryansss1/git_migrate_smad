const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_ramo', {
    cd_ramo: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey:true
    },
    descripcion: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    cd_ramosuper: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    ind_oblig: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: "N"
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    cd_areaseg: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_tiporamo: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'c_ramo',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_ramo_pkey",
        unique: true,
        fields: [
          { name: "cd_ramo" },
        ]
      },
    ]
  });
};
