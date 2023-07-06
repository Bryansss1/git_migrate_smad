const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_inter_seg', {
    numeropoliza: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_inter: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    porcpart: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: "001"
    },
    lider: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "SI"
    },
    serialcontrato: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    fechareg: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'e_inter_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_inter_seg_numeropoliza_idx",
        fields: [
          { name: "numeropoliza" },
          { name: "cd_inter" },
        ]
      },
      {
        name: "e_inter_seg_pk",
        unique: true,
        fields: [
          { name: "serialcontrato" },
          { name: "cd_inter" },
        ]
      },
      {
        name: "e_inter_seg_serialcontrato_idx",
        fields: [
          { name: "serialcontrato" },
          { name: "cd_inter" },
        ]
      },
    ]
  });
};
