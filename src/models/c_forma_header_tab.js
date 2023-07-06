const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_forma_header_tab', {
    nombre_pantalla: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    titulo: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    subtitulo: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    onclicksumit: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N",
      comment: "S, si el botton sumit maneja un evento onclick"
    },
    buttondel: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    ordentexto: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    buttonudp: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "S"
    },
    buttonclr: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "S"
    },
    buttonlstconsultar: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    buttonlstincluir: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    limitrecord: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 40
    },
    buttonguardar: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "S"
    },
    llamapantallamodif: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "S"
    },
    insertestandar: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "S"
    },
    updateestandar: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "S"
    },
    wherecondition: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    deleteestandar: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "S"
    },
    whereadicadmlista: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    serialpantalla: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    onclicksumitupd: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    textoonclicksumitupd: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'c_forma_header_tab',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_forma_header_tab_pkey",
        unique: true,
        fields: [
          { name: "nombre_pantalla" },
        ]
      },
    ]
  });
};
