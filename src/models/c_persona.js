const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_persona', {
    cd_nacionalidad: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    cedrif: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    correlativo: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    sexo: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    fecnac: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    edocivil: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    apellido: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    razonsocial: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    numrif: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    numnit: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cd_pais: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_estado: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_ciudad: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cd_municipio: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    longitud: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    latitud: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    zip: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    cd_telef1: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    numtelef1: {
      type: DataTypes.STRING(12),
      allowNull: true,
      defaultValue: "0000000"
    },
    cd_telef2: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    numtelef2: {
      type: DataTypes.STRING(12),
      allowNull: true,
      defaultValue: "0000000"
    },
    cd_telef3: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    numtelef3: {
      type: DataTypes.STRING(12),
      allowNull: true,
      defaultValue: "0000000"
    },
    cd_celular1: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    numcelular1: {
      type: DataTypes.STRING(12),
      allowNull: true,
      defaultValue: "0000000"
    },
    cd_celular2: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    numcelular2: {
      type: DataTypes.STRING(12),
      allowNull: true,
      defaultValue: "0000000"
    },
    email1: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    email2: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    email3: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    nivelestudios: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    fecreg: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    facebook: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    twitter: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    linkedin: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    instagram: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    serialpersona: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "001"
    },
    ind_cargamasiva: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    ind_estado: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    ind_nacional: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "S"
    }
  }, {
    sequelize,
    tableName: 'c_persona',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_persona_cedrif_idx",
        fields: [
          { name: "cedrif" },
        ]
      },
      {
        name: "c_persona_nombre_idx",
        fields: [
          { name: "nombre" },
          { name: "apellido" },
        ]
      },
      {
        name: "c_persona_razonsocial_idx",
        fields: [
          { name: "razonsocial" },
        ]
      },
      {
        name: "c_persona_serialpersona_idx",
        unique: true,
        fields: [
          { name: "serialpersona" },
        ]
      },
      {
        name: "persona_pkey",
        unique: true,
        fields: [
          { name: "cd_nacionalidad" },
          { name: "cedrif" },
          { name: "correlativo" },
        ]
      },
      {
        name: "trgram_c_persona_apellido",
        fields: [
          { name: "apellido" },
        ]
      },
      {
        name: "trgram_c_persona_nombre",
        fields: [
          { name: "nombre" },
        ]
      },
      {
        name: "trgram_c_persona_razonsocial",
        fields: [
          { name: "razonsocial" },
        ]
      },
    ]
  });
};
