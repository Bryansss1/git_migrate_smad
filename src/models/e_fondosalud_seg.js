const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_fondosalud_seg', {
    numeropoliza: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    montoaporteinicial: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    montoaportes: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    montosaldoaviso: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    montoporpagar: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    montopagado: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    fechareg: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: "001"
    },
    serialcontrato: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    tipofondo: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "0001"
    },
    gastosinter: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    gastosadmon: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    correos: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    montoporpagarpend: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    indsaldonegativo: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    indpagosinisaldoneg: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'e_fondosalud_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_fondosalud_seg_pk",
        unique: true,
        fields: [
          { name: "serialcontrato" },
        ]
      },
      {
        name: "e_fondosalud_seg_serialcontrato_idx",
        fields: [
          { name: "serialcontrato" },
        ]
      },
    ]
  });
};
