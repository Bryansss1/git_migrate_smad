const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bck_c_maestro_contab', {
    numcuenta: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    id_1: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    id_2: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    id_3: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    id_4: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    id_5: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    id_6: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    id_7: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    id_8: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    id_9: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    id_10: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    id_11: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    id_12: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    id_13: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    id_14: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    numauxiliar: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    tipo: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    movimiento: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    serialcuenta: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ind_aux: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ind_monto: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    idac_1: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    idac_2: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    idac_3: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    idac_4: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    idac_5: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    idac_6: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    idac_7: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    idac_8: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    idac_9: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    idac_10: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    idac_11: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    idac_12: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    idac_13: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    idac_14: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    numauxiliarac: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    numcuentaac: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    serialcuentaac: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    saldoinidebe: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    saldoinihaber: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'bck_c_maestro_contab',
    schema: 'rms40',
    timestamps: false
  });
};
