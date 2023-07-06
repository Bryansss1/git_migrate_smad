const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_acep_reaseg', {
    codreaseg: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    serialpersona: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    codsuper: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    fecharegistro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    personacontacto: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cd_pais1: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    numtelef1: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    cd_pais2: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    numtelef2: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    ind_nacional: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "S"
    }
  }, {
    sequelize,
    tableName: 'c_acep_reaseg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_acep_reaseg_pkey",
        unique: true,
        fields: [
          { name: "codreaseg" },
        ]
      },
    ]
  });
};
