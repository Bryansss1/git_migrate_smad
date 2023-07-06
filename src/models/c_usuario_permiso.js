const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_usuario_permiso', {
    cd_permiso: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    nombreusuario: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    cd_ramo: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "0000000000"
    },
    cd_cobert: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "0000000000"
    },
    cd_region: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "0000000000"
    },
    montominimo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    montomaximo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    cd_pais: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cd_estado: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    }
  }, {
    sequelize,
    tableName: 'c_usuario_permiso',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_usuario_permiso_pk",
        unique: true,
        fields: [
          { name: "cd_permiso" },
          { name: "nombreusuario" },
        ]
      },
    ]
  });
};
