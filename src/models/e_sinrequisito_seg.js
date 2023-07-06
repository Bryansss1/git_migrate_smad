const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_sinrequisito_seg', {
    siniestro: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    detsiniestro: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_requisito: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    fechainicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fechaentrega: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    }
  }, {
    sequelize,
    tableName: 'e_sinrequisito_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_sinrequisito_seg_pkey",
        unique: true,
        fields: [
          { name: "siniestro" },
          { name: "detsiniestro" },
          { name: "cd_requisito" },
        ]
      },
    ]
  });
};
