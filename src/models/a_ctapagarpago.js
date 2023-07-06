const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('a_ctapagarpago', {
    ctapagar: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ctapagarpago: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    tipodoc: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    entfinan: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cuenta: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    numerodoc: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    monto: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    fechapago: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'a_ctapagarpago',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "a_ctapagarpago_pkey",
        unique: true,
        fields: [
          { name: "ctapagar" },
          { name: "ctapagarpago" },
        ]
      },
    ]
  });
};
