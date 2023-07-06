const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_subclaseadmin', {
    cd_clase: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_subclase: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    ind_debcred: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    ind_autogenerado: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    fecreg: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    ind_aplicasiniestro: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "N"
    },
    cd_tipoclase: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_clasif: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'c_subclaseadmin',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_subclaseadmin_pk",
        unique: true,
        fields: [
          { name: "cd_tipoclase" },
          { name: "cd_clasif" },
          { name: "cd_clase" },
          { name: "cd_subclase" },
        ]
      },
    ]
  });
};
