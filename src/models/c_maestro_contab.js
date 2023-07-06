const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_maestro_contab', {
    numcuenta: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    id_1: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    id_2: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    id_3: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    id_4: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    id_5: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    id_6: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    id_7: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    id_8: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    id_9: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    id_10: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    id_11: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    id_12: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    id_13: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    id_14: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    numauxiliar: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: "0000000000000000"
    },
    tipo: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    movimiento: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    serialcuenta: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    ind_aux: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "N"
    },
    ind_monto: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "S"
    },
    idac_1: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "000"
    },
    idac_2: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    idac_3: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    idac_4: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    idac_5: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    idac_6: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    idac_7: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    idac_8: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    idac_9: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    idac_10: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    idac_11: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    idac_12: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    idac_13: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    idac_14: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "00"
    },
    numauxiliarac: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: "0000000000000000"
    },
    numcuentaac: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: "000000000000000000000000000000000000000000000"
    },
    serialcuentaac: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    saldoinidebe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    saldoinihaber: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'c_maestro_contab',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_maestro_contab_id_1_idx",
        fields: [
          { name: "id_1" },
        ]
      },
      {
        name: "c_maestro_contab_pk",
        unique: true,
        fields: [
          { name: "numcuenta" },
        ]
      },
    ]
  });
};
