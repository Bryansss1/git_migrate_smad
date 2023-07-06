const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_movsingastoadic_seg', {
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
    movsingastoadic: {
      type: DataTypes.DECIMAL,
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
    },
    fechamodif: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    nombreusuario: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    hora: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'e_movsingastoadic_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_movsingastoadic_seg_pkey",
        unique: true,
        fields: [
          { name: "siniestro" },
          { name: "detsiniestro" },
          { name: "cd_gastoadic" },
          { name: "movsingastoadic" },
        ]
      },
    ]
  });
};
