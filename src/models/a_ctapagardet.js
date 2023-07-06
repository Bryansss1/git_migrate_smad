const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('a_ctapagardet', {
    ctapagar: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_clase: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_subclase: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    montopago: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    fecharegistro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    orden: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ctapagardet: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'a_ctapagardet',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "a_ctapagardet_pk",
        unique: true,
        fields: [
          { name: "ctapagar" },
          { name: "ctapagardet" },
          { name: "cd_clase" },
          { name: "cd_subclase" },
        ]
      },
    ]
  });
};
