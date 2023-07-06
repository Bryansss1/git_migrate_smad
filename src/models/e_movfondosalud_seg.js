const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_movfondosalud_seg', {
    numeropoliza: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    movfondo: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_cptmvfondo: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    ind_credeb: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    montodebe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    montohaber: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    fechareg: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: "001"
    },
    serialcontrato: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    siniestro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    detsiniestro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    montodebepend: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'e_movfondosalud_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_movfondosalud_seg_fechareg_idx",
        fields: [
          { name: "fechareg" },
          { name: "movfondo" },
        ]
      },
      {
        name: "e_movfondosalud_seg_movfondo_idx",
        fields: [
          { name: "movfondo" },
        ]
      },
      {
        name: "e_movfondosalud_seg_pk",
        unique: true,
        fields: [
          { name: "serialcontrato" },
          { name: "movfondo" },
        ]
      },
      {
        name: "e_movfondosalud_seg_serialcontrato_idx",
        fields: [
          { name: "serialcontrato" },
        ]
      },
    ]
  });
};
