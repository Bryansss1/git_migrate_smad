const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_prifondomanual_seg', {
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
      allowNull: false,
      defaultValue: 0
    },
    montocomision: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    montorecargo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    montodescuento: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    montoprimaneta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
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
    },
    observacion: {
      type: DataTypes.STRING(300),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'e_prifondomanual_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_prifondomanual_seg_pkey",
        unique: true,
        fields: [
          { name: "serialcontrato" },
          { name: "nummovfondo" },
        ]
      },
    ]
  });
};
