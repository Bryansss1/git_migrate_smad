const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('h_siniestro', {
    idsiniestro: {
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
    mtosindec: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    mtosinpag: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    mtosinpenact: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cantsindec: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cantsinpag: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cantsinpen: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    porcsinicob: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    porcsinidecemi: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    porcsinidecemianu: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    incsinidecpant: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    incsinipagpant: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    mtosinpagnetrec: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    mtoutilidad: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    mtosinpenant: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'h_siniestro',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "h_siniestro_idarea_idx",
        fields: [
          { name: "idarea" },
        ]
      },
      {
        name: "h_siniestro_idcontrato_idx",
        fields: [
          { name: "idcontrato" },
        ]
      },
      {
        name: "h_siniestro_idfecha_idx",
        fields: [
          { name: "idfecha" },
        ]
      },
      {
        name: "h_siniestro_idinter_idx",
        fields: [
          { name: "idinter" },
        ]
      },
      {
        name: "h_siniestro_idoficina_idx",
        fields: [
          { name: "idoficina" },
        ]
      },
      {
        name: "h_siniestro_pkey",
        unique: true,
        fields: [
          { name: "idsiniestro" },
        ]
      },
    ]
  });
};
