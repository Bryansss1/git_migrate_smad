const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return e_prima_seg.init(sequelize,DataTypes)
};

 class e_prima_seg extends Sequelize.Model{
  static init(sequelize, DataTypes){
    return sequelize.define('e_prima_seg', {
      numeropoliza: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      certificado: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      numprima: {
        type: DataTypes.DECIMAL,
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
      montocomision: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      tasacambio: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      montomondnac: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      montocomisionmondnac: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      cd_estatus: {
        type: DataTypes.STRING(3),
        allowNull: false,
        primaryKey: true
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
      serialcontrato: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0
      },
      serialcertif: {
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
      }
    }, {
      sequelize,
      tableName: 'e_prima_seg',
      schema: 'rms40',
      timestamps: false,
      indexes: [
        {
          name: "e_prima_seg_factura_idx",
          fields: [
            { name: "factura" },
          ]
        },
        {
          name: "e_prima_seg_movoperprima_idx",
          fields: [
            { name: "movoperprima" },
          ]
        },
        {
          name: "e_prima_seg_numeropoliza_idx",
          fields: [
            { name: "numeropoliza" },
            { name: "certificado" },
            { name: "numprima" },
          ]
        },
        {
          name: "e_prima_seg_numprima_idx",
          fields: [
            { name: "numprima" },
          ]
        },
        {
          name: "e_prima_seg_pk",
          unique: true,
          fields: [
            { name: "serialcontrato" },
            { name: "serialcertif" },
            { name: "numprima" },
          ]
        },
        {
          name: "e_prima_seg_polfact_idx",
          fields: [
            { name: "numeropoliza" },
            { name: "factura" },
          ]
        },
      ]
    });
  }
 }
  

