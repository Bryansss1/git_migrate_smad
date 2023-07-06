const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_detsiniestro_seg', {
    siniestro: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    detsiniestro: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    fecregistro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'e_detsiniestro_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_detsiniestro_seg_pkey1",
        unique: true,
        fields: [
          { name: "siniestro" },
          { name: "detsiniestro" },
        ]
      },
    ]
  });
};
