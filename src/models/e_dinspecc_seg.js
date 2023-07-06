const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_dinspecc_seg', {
    numinspec: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_repuesto: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_estresp: {
      type: DataTypes.STRING(10),
      allowNull: false
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
    serialcontrato: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    serialcertif: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'e_dinspecc_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_dinspecc_seg_pk",
        unique: true,
        fields: [
          { name: "numinspec" },
          { name: "cd_repuesto" },
        ]
      },
      {
        name: "e_dinspecc_seg_serialcontrato_idx",
        fields: [
          { name: "serialcontrato" },
          { name: "serialcertif" },
        ]
      },
    ]
  });
};
