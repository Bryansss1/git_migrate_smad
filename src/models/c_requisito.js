const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_requisito', {
    cd_requisito: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ind_oblig: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "N"
    },
    tiporequisito: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    }
  }, {
    sequelize,
    tableName: 'c_requisito',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_requisito_pkey",
        unique: true,
        fields: [
          { name: "cd_requisito" },
        ]
      },
    ]
  });
};
