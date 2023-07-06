const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_movsincobbenefaseg_seg', {
    siniestro: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    detsiniestro: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    serialcobert: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_detbenef: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    movbenef: {
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
    tableName: 'e_movsincobbenefaseg_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_movsincobbenefaseg_seg_pk",
        unique: true,
        fields: [
          { name: "siniestro" },
          { name: "detsiniestro" },
          { name: "serialcobert" },
          { name: "cd_detbenef" },
          { name: "movbenef" },
        ]
      },
    ]
  });
};
