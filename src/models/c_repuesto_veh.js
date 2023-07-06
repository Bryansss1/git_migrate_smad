const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_repuesto_veh', {
    cd_repuesto: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    posicion: {
      type: DataTypes.STRING(4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'c_repuesto_veh',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_repuesto_veh_phey",
        unique: true,
        fields: [
          { name: "cd_repuesto" },
        ]
      },
    ]
  });
};
