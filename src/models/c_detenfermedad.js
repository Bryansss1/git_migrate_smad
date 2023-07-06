const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_detenfermedad', {
    cd_enfermedad: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_detenfermedad: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(300),
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
    tableName: 'c_detenfermedad',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_detenfermedad_pkey",
        unique: true,
        fields: [
          { name: "cd_enfermedad" },
          { name: "cd_detenfermedad" },
        ]
      },
    ]
  });
};
