const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_valgen_header', {
    cd_valgen: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'c_valgen_header',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_valgen_header_pk",
        unique: true,
        fields: [
          { name: "cd_valgen" },
        ]
      },
      {
        name: "c_valgen_header_pkey",
        unique: true,
        fields: [
          { name: "cd_valgen" },
        ]
      },
    ]
  });
};
