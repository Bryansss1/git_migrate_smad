const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_contratoramorea', {
    cd_contrato: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_ramoreaseg: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    notas: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'c_contratoramorea',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_contratoramorea_pkey",
        unique: true,
        fields: [
          { name: "cd_contrato" },
          { name: "cd_ramoreaseg" },
        ]
      },
    ]
  });
};
