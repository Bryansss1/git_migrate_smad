const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_persona_bck', {
    cd_nacionalidad: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    cedrif: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    correlativo: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    sexo: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    fecnac: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    edocivil: {
      type: DataTypes.STRING(1),
      allowNull: true
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
      allowNull: true
    },
    cd_estado: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cd_ciudad: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cd_municipio: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(250),
      allowNull: true
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
      allowNull: true
    },
    cd_telef2: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    numtelef2: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    cd_telef3: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    numtelef3: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    cd_celular1: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    numcelular1: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    cd_celular2: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    numcelular2: {
      type: DataTypes.STRING(12),
      allowNull: true
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
      allowNull: true
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
      allowNull: true
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ind_cargamasiva: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'c_persona_bck',
    schema: 'rms40',
    timestamps: false
  });
};
