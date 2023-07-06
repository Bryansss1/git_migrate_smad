const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_siniinterfazsigesp', {
    fecregistro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    numeropoliza: {
      type: DataTypes.DECIMAL,
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
    cd_motivo: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    siniestro: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    detsiniestro: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    montopagado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    fecenvio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fecreverso: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    serialcontrato: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    numsol: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ind_automatico: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    usuario: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    equipoip: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    textorchz: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    serialsinisigesp: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    concepto: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    numerointerno: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'e_siniinterfazsigesp',
    schema: 'rms40',
    timestamps: false
  });
};
