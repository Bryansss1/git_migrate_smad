const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_logusuario', {
    usuario: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    hora: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    serialloguser: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    serialtabla: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    serialfuncproc: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    accion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      comment: "1 = Consulta, 2=Crear, 3=Update, 4= Borrar, 5= Proceso"
    },
    ip: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(700),
      allowNull: false
    },
    nombcampo1: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    valorcampo1: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    nombcampo2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    valorcampo2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    nombcampo3: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    valorcampo3: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    nombcampo4: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    valorcampo4: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    nombcampo5: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    valorcampo5: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    nombcampo6: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    valorcampo6: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    nombcampo7: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    valorcampo7: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    }
  }, {
    sequelize,
    tableName: 'c_logusuario',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_logusuario_usuario_idx",
        fields: [
          { name: "usuario" },
          { name: "fecha" },
        ]
      },
    ]
  });
};
