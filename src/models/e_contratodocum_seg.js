const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_contratodocum_seg', {
    serialcontrato: {
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
    fecvencimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    observacion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'e_contratodocum_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_contratodocum_seg_pkey",
        unique: true,
        fields: [
          { name: "serialcontrato" },
          { name: "nombrearchivo" },
        ]
      },
    ]
  });
};
