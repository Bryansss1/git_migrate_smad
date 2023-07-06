const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_embarcert_seg', {
    numeropoliza: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    certificado: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    cd_marca: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    cd_modelo: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    matricula: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    serialcasco: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    serialmotor: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    cantmotores: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    marcamotor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    eslora: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    manga: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    puntal: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    anoconstruc: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    velocidad: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cd_combustible: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    cd_material: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    puertobase: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    naveglimite: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    tonbrutas: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    tonnetas: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    canttripul: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    cantpasaj: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    cd_embarc: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    cd_uso: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    cd_estatus: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    serialcontrato: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    serialcertif: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'e_embarcert_seg',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "e_embarcert_seg_pkey",
        unique: true,
        fields: [
          { name: "serialcontrato" },
          { name: "serialcertif" },
        ]
      },
    ]
  });
};
