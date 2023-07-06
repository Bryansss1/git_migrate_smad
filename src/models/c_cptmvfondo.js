const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_cptmvfondo', {
    cd_cptmvfondo: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    ind_credeb: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "000"
    }
  }, {
    sequelize,
    tableName: 'c_cptmvfondo',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_cptmvfondo_pkey",
        unique: true,
        fields: [
          { name: "cd_cptmvfondo" },
        ]
      },
    ]
  });
};
