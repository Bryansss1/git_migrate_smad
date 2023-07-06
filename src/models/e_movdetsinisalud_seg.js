const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_movdetsinisalud_seg', {
    siniestro: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    detsiniestro: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    movdetsinisalud: {
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
    tableName: 'e_movdetsinisalud_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_movdetsinisalud_seg_pk",
        unique: true,
        fields: [
          { name: "siniestro" },
          { name: "detsiniestro" },
          { name: "movdetsinisalud" },
        ]
      },
    ]
  });
};
