const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_inspecc_seg', {
    numinspec: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    placa: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    cd_perinsp: {
      type: DataTypes.STRING(14),
      allowNull: false
    },
    observacion: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    fechainspecc: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    tipoinspecc: {
      type: DataTypes.STRING(4),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'e_inspecc_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_inspecc_seg_pk",
        unique: true,
        fields: [
          { name: "numinspec" },
          { name: "placa" },
        ]
      },
    ]
  });
};
