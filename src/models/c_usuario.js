const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_usuario', {
    nombreusuario: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    cd_nacionalidad: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    cedrif: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    correlativo: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    clave: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    nivel: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "0001"
    },
    tipousuario: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "A"
    },
    cd_sucursal: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "000"
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    }
  }, {
    sequelize,
    tableName: 'c_usuario',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_usuario_pkey",
        unique: true,
        fields: [
          { name: "nombreusuario" },
        ]
      },
    ]
  });
};
