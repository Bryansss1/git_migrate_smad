const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_vehiculo_seg', {
    placa: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    cd_tipo: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    cd_marca: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    cd_modelo: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    cd_version: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    nu_centuria: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    motor: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    nu_puestos: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_tipoveh: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    color: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    carroceria: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    fechainicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ind_nuevo: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "NO"
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    transmision: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    cd_clasif: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "0000000000"
    },
    nu_peso: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    nu_capacicarga: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    cd_grupoveh: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "0000"
    },
    cd_color: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'e_vehiculo_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_vehiculo_seg_carroceria_idx",
        unique: true,
        fields: [
          { name: "carroceria" },
        ]
      },
      {
        name: "e_vehiculo_seg_motor_idx",
        fields: [
          { name: "motor" },
        ]
      },
      {
        name: "e_vehiculo_seg_pkey",
        unique: true,
        fields: [
          { name: "placa" },
          { name: "carroceria" },
        ]
      },
      {
        name: "e_vehiculo_seg_placa_idx",
        unique: true,
        fields: [
          { name: "placa" },
        ]
      },
    ]
  });
};
