const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_carga_salud', {
    carga: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_nac_contratante: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    cedrif_contratante: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    correl_contratante: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    serialcontrato: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_tiposeguro: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cd_versionseguro: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cd_subversionseguro: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    fechaingre: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    archivo: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    valbasica: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    valcontrato: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    fechacarga: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: "001"
    },
    edad_menores: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    valprecontrato: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    tipocarga: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 't_carga_salud',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "t_carga_salud_pk",
        unique: true,
        fields: [
          { name: "carga" },
        ]
      },
    ]
  });
};
