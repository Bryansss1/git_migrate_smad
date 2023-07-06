const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sini_bolipuerto', {
    serialcontrato: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_tiposeguro: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_versionseguro: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_subversionseguro: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_ramo: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_cobert: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cedrif_aseg: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cedrif_titular: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_enfermedad: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_detenfermedad: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_tratamiento: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    depsuc: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    servicio: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    ramo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    fchrecibido: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    hora: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    contratante: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    analista: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    titular: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    beneficiario: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    fecnac: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    parentesco: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    diagnostico: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    proveedor: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    montofacturado: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    montomiranda: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    tasabcv: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    monto: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    excedente: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    clave: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    telefonico: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    observaciones: {
      type: DataTypes.STRING(400),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sini_bolipuerto',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "sini_bolipuerto_cedrif_aseg_idx",
        fields: [
          { name: "cedrif_aseg" },
          { name: "cd_ramo" },
          { name: "cd_cobert" },
        ]
      },
      {
        name: "sini_bolipuerto_cedrif_aseg_idx2",
        fields: [
          { name: "cedrif_aseg" },
          { name: "cd_ramo" },
          { name: "cd_cobert" },
          { name: "cd_enfermedad" },
          { name: "cd_detenfermedad" },
          { name: "cd_tratamiento" },
        ]
      },
    ]
  });
};
