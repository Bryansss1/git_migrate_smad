const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_beneficio', {
    cd_benef: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fecregistro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: "001"
    }
  }, {
    sequelize,
    tableName: 'c_beneficio',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_beneficio_pkey",
        unique: true,
        fields: [
          { name: "cd_benef" },
        ]
      },
    ]
  });
};
