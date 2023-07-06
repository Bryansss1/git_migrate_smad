const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('portal_usuario', {
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    clave: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
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
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rol: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    telefono_celular: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'portal_usuario',
    schema: 'rms40',
    timestamps: false
  });
};
