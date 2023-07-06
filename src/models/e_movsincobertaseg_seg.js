const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_movsincobertaseg_seg', {
    siniestro: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    detsiniestro: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    movcobertaseg: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    serialaseg: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    serialcobert: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    reclamado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    aprobado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    noaprobado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    fecregistro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    montoliquidado: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    deducible: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    porcreembolso: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    ind_deducible: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: "0"
    },
    sumadisponible: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    serialpagoreserv: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    fechamodif: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    nombreusuario: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    hora: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'e_movsincobertaseg_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_movsincobertaseg_seg_pkey",
        unique: true,
        fields: [
          { name: "siniestro" },
          { name: "detsiniestro" },
          { name: "movcobertaseg" },
        ]
      },
    ]
  });
};
