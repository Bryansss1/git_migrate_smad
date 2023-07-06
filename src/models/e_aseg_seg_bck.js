const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_aseg_seg_bck', {
    numeropoliza: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    certificado: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cd_tiposeguro: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cd_versionseguro: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cd_subversionseguro: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cd_nac_aseg: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    cedrif_aseg: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    correl_aseg: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cd_parent: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    fechainicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fechafin: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    serialaseg: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fechaemite: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    serialcontrato: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    serialcertif: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    serialpersona: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    serialanuexc: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cd_motivexc: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    fechaexc: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fechaejecexc: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    serialemision: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    edad_bio: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    edad_act: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'e_aseg_seg_bck',
    schema: 'rms40',
    timestamps: false
  });
};
