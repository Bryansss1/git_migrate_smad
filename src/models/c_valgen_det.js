const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_valgen_det', {
    cd_valgen: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_valdet: {
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
    },
    orden: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'c_valgen_det',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_valgen_det_pk",
        unique: true,
        fields: [
          { name: "cd_valgen" },
          { name: "cd_valdet" },
        ]
      },
      {
        name: "c_valgen_det_pkey",
        unique: true,
        fields: [
          { name: "cd_valgen" },
          { name: "cd_valdet" },
        ]
      },
    ]
  });
};
