const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bck_t_carga_persona', {
    cd_nac_titular: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    cedrif_titular: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    correlativo_titular: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
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
    cd_telef1: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    numtelef1: {
      type: DataTypes.STRING(12),
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
    cd_parent: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    marca: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'bck_t_carga_persona',
    schema: 'rms40',
    timestamps: false
  });
};
