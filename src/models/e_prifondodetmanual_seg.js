const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_prifondodetmanual_seg', {
    serialcontrato: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    nummovfondo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    cd_ramo: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_cobert: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_tipomov: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    fechainicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fechafin: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fechareg: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    monto: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    porccomis: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    montocomision: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    movoperprima: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    factura: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    serialfactec: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'e_prifondodetmanual_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_prifondodetmanual_seg_pkey",
        unique: true,
        fields: [
          { name: "serialcontrato" },
          { name: "nummovfondo" },
          { name: "cd_ramo" },
          { name: "cd_cobert" },
        ]
      },
    ]
  });
};
