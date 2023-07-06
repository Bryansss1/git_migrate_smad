const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_sindocum_seg', {
    siniestro: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    serialdocumento: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_requisito: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    nombrearchivo: {
      type: DataTypes.STRING(300),
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
    fecvencimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    observacion: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'e_sindocum_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_sindocum_seg_pk",
        unique: true,
        fields: [
          { name: "siniestro" },
          { name: "nombrearchivo" },
        ]
      },
    ]
  });
};
