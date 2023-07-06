const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('a_entfinan', {
    entfinan: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    observacion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    serialpersona: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    fecharegistro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'a_entfinan',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "a_entfinan_pkey",
        unique: true,
        fields: [
          { name: "entfinan" },
        ]
      },
    ]
  });
};
