const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_bien_aseg', {
    numeropoliza: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    certificado: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_tiposeguro: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_versionseguro: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_subversionseguro: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_bien: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    monto: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    fechainicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fechafin: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tiporiesgo: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    porcriesgo: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(450),
      allowNull: true
    },
    serialcontrato: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    serialcertif: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    serialbien: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    serialanuexc: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
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
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'e_bien_aseg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_bien_aseg_idx",
        fields: [
          { name: "serialemision" },
        ]
      },
      {
        name: "e_bien_aseg_numeropoliza_idx",
        fields: [
          { name: "numeropoliza" },
          { name: "certificado" },
          { name: "cd_tiposeguro" },
          { name: "cd_versionseguro" },
          { name: "cd_subversionseguro" },
          { name: "cd_bien" },
        ]
      },
      {
        name: "e_bien_aseg_pkey",
        unique: true,
        fields: [
          { name: "serialcontrato" },
          { name: "serialcertif" },
          { name: "cd_bien" },
        ]
      },
      {
        name: "e_bien_aseg_serialbien_idx",
        fields: [
          { name: "serialbien" },
        ]
      },
    ]
  });
};
