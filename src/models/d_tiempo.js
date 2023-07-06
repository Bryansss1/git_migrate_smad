const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('d_tiempo', {
    idfecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    anno: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    semestre: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    trimestre: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cuatrimestre: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    mes: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    diaenmes: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    diaensemana: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    diaenanno: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    semana: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    nombredia: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    nombremes: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    nombtrimestre: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    nombcuatrimestre: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    nombresemestre: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    decada: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'd_tiempo',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "d_tiempo_pkey",
        unique: true,
        fields: [
          { name: "idfecha" },
        ]
      },
    ]
  });
};
