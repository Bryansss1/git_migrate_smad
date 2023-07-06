const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_clasifadmin', {
    cd_clasif: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    fecreg: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    cd_tipoclase: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    ind_manual: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "S"
    }
  }, {
    sequelize,
    tableName: 'c_clasifadmin',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_clasifadmin_pk",
        unique: true,
        fields: [
          { name: "cd_tipoclase" },
          { name: "cd_clasif" },
        ]
      },
    ]
  });
};
