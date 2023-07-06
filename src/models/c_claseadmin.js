const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_claseadmin', {
    cd_clase: {
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
      allowNull: false,
      defaultValue: "CLASEMVADM"
    },
    cd_clasif: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'c_claseadmin',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_claseadmin_pk",
        unique: true,
        fields: [
          { name: "cd_tipoclase" },
          { name: "cd_clasif" },
          { name: "cd_clase" },
        ]
      },
    ]
  });
};
