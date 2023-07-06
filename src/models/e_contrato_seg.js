const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_contrato_seg', {
    numeropoliza: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_tiposeguro: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    fechainicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fechafin: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fechaemite: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cd_sucursalinter: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_sucursalgestora: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    tipocontratoseguro: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    formapago: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    moneda: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    cd_nac_contratante: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    cedrif_contratante: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    correl_contratante: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: "001"
    },
    vigencia: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    serialcontrato: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ind_renovar: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "N"
    },
    fechaanul: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cd_motivanul: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: "0000"
    },
    fechaejecanul: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    serialanuexc: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    fechfinfrepago: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fechinifrepago: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    numpolanterior: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    serialemision: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'e_contrato_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_contrato_seg_idx",
        fields: [
          { name: "serialemision" },
        ]
      },
      {
        name: "e_contrato_seg_numeropoliza_idx",
        fields: [
          { name: "numeropoliza" },
        ]
      },
      {
        name: "e_contrato_seg_pk",
        unique: true,
        fields: [
          { name: "serialcontrato" },
        ]
      },
    ]
  });
};
