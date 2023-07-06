const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('h_prima', {
    idprimas: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    idfecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    idoficina: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    idarea: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    idinter: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    idcontrato: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    fechaejec: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    mtoprimacob: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    mtoprimanetanu: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    mtoprimapen: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    mtoprimaemi: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    mtoprimaanu: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    mtoprimadev: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    mtoprimadevpag: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    mtoprimacobnetdevpag: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    mtoprimadevg: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    mtoprimaxdevg: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cantpolemi: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cantpolcob: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cantpolpen: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cantpolanu: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cantpolvig: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    porcprimcobtotemi: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    porcprimpentotemi: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    porcprimanutotemi: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    incprimemipant: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    incprimcobpant: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    incprimpenpant: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    incprimanupant: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    incprimcobnetapant: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    inccomprimcobpant: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    promemicob: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    comprimemi: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    comprimcob: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    comprimpen: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    comprimanu: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    comiliq: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'h_prima',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "h_prima_idarea_idx",
        fields: [
          { name: "idarea" },
        ]
      },
      {
        name: "h_prima_idcontrato_idx",
        fields: [
          { name: "idcontrato" },
        ]
      },
      {
        name: "h_prima_idfecha_idx",
        fields: [
          { name: "idfecha" },
        ]
      },
      {
        name: "h_prima_idinter_idx",
        fields: [
          { name: "idinter" },
        ]
      },
      {
        name: "h_prima_idoficina_idx",
        fields: [
          { name: "idoficina" },
        ]
      },
      {
        name: "h_prima_pkey",
        unique: true,
        fields: [
          { name: "idprimas" },
        ]
      },
    ]
  });
};
