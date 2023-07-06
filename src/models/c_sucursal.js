const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_sucursal', {
    cd_sucursal: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cd_region: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_telef1: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    numtelef1: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cd_telef2: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    numtelef2: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    email1: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    personacontacto: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    cd_pais: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cd_estado: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cd_ciudad: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cd_municipio: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cd_postal: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    direccion_fiscal: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    }
  }, {
    sequelize,
    tableName: 'c_sucursal',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_sucursal_pkey",
        unique: true,
        fields: [
          { name: "cd_sucursal" },
        ]
      },
    ]
  });
};
