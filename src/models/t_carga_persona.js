const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_carga_persona', {
    cd_nac_titular: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    cedrif_titular: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    correlativo_titular: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
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
    cd_telef1: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    numtelef1: {
      type: DataTypes.STRING(12),
      allowNull: true,
      defaultValue: "0"
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
    cd_parent: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    marca: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    carga: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    numlinea: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    secuencial: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 't_carga_persona',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "t_carga_persona_carga_idx",
        fields: [
          { name: "carga" },
          { name: "cd_parent" },
        ]
      },
      {
        name: "t_carga_persona_cd_nacionalidad_idx",
        fields: [
          { name: "cd_nacionalidad" },
          { name: "cedrif" },
          { name: "correlativo" },
        ]
      },
      {
        name: "t_carga_persona_pk",
        unique: true,
        fields: [
          { name: "carga" },
          { name: "cd_nac_titular" },
          { name: "cedrif_titular" },
          { name: "correlativo_titular" },
          { name: "cd_nacionalidad" },
          { name: "cedrif" },
          { name: "correlativo" },
          { name: "secuencial" },
        ]
      },
    ]
  });
};
