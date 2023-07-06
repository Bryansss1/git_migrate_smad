const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_detsinisalud_seg', {
    siniestro: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    detsiniestro: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_motivo: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    fecocurrencia: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    horaocurrencia: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    minuocurrencia: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    fecnotificacion: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    horanotificacion: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    minunotificacion: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    fecconstitucion: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    horaconstitucion: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    minuconstitucion: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    cd_sucursalrecep: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_nac_prov: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    cedrif_prov: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    correl_prov: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_enfermedad: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_detenfermedad: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_tratamiento: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    serialdetsini: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    fecregistro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    montosiniestro: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    montonoaprobado: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    montopagado: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    montopendiente: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
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
    montogastosadic: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    clave: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    fechaclave: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    usuarioclave: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    horaclave: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    serialaseg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    serialcontrato: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    serialcertif: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    cd_stsalterno: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: "000"
    },
    observesp: {
      type: DataTypes.STRING(4500),
      allowNull: true
    },
    usuarioreg: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    movfondo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    cd_enfermegre: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "000"
    },
    cd_detenfermegre: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "000"
    },
    cd_tratamiegre: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "000"
    }
  }, {
    sequelize,
    tableName: 'e_detsinisalud_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_detsiniestro_seg_pkey",
        unique: true,
        fields: [
          { name: "siniestro" },
          { name: "detsiniestro" },
        ]
      },
    ]
  });
};
