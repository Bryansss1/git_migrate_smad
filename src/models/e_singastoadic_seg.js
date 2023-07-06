const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_singastoadic_seg', {
    siniestro: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    detsiniestro: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_gastoadic: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    reclamado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    aprobado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    noaprobado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    fecregistro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    serialpagoreserv: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'e_singastoadic_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_singastoadic_seg_pkey",
        unique: true,
        fields: [
          { name: "siniestro" },
          { name: "detsiniestro" },
          { name: "cd_gastoadic" },
        ]
      },
    ]
  });
};
