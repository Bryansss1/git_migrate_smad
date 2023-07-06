const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('c_forma_tab', {
    nombre_pantalla: {
      type: DataTypes.CHAR(30),
      allowNull: false
    },
    num_tab: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    nombre_tabla: {
      type: DataTypes.CHAR(30),
      allowNull: false
    },
    campo: {
      type: DataTypes.CHAR(30),
      allowNull: false
    },
    secuencia: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    rdbms: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    etiqueta: {
      type: DataTypes.CHAR(40),
      allowNull: false
    },
    long_campo: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cod_tipo: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    dato_tipo: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "C"
    },
    clave: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    consulta_lista: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    sec_consulta_lista: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    secuencia_ins_mod: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    usa_tabla_lu: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    nombre_tabla_lu: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    campo01_lu: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    campo02_lu: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    condicion: {
      type: DataTypes.STRING(2500),
      allowNull: true
    },
    condicion_consulta: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    condicion_modifica: {
      type: DataTypes.STRING(2500),
      allowNull: true
    },
    condicion_ingrecall: {
      type: DataTypes.STRING(2500),
      allowNull: true
    },
    condicion_mostrarlista: {
      type: DataTypes.STRING(2500),
      allowNull: true
    },
    mostrar_lista: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    nombre_imagen: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    requerido: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    texto_invalido: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    exp_regular: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    oculto: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    formato_validador: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    solo_consulta: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    long_display_campo: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    row_ta: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    col_ta: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    basemulticampo: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    ordenmulticampo: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    valor_defecto: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    listener_js: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    tx_listener_js: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    cd_estatus: {
      type: DataTypes.CHAR(3),
      allowNull: false
    },
    condicion_nordbms: {
      type: DataTypes.STRING(1500),
      allowNull: true
    },
    modificable: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "S"
    },
    visibleingresando: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "S"
    },
    visiblemodificando: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "S"
    },
    condicion_nordbmsingre: {
      type: DataTypes.STRING(900),
      allowNull: true
    },
    formatonumerico: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    solo_consultaenconsulta: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    valor_defectoconsulta: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    claveconsulta: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    condicion_consultaheredada: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    claveingre: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    etiquetaconsulta: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    indparametro: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    longtipo_ldfijo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    codigo_libre: {
      type: DataTypes.STRING(2500),
      allowNull: true
    },
    cod_subtipo: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "CP"
    },
    condicion_bloque: {
      type: DataTypes.STRING(1400),
      allowNull: true
    },
    nombre_bloque: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    maxreg_bloque: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    maxregmem_bloque: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    condicion_count_bloque: {
      type: DataTypes.STRING(700),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'c_forma_tab',
    schema: 'rms40',
    timestamps: false,
    indexes: [
      {
        name: "c_forma_tab_nombre_pantalla_idx",
        fields: [
          { name: "nombre_pantalla" },
          { name: "nombre_tabla" },
        ]
      },
      {
        name: "c_forma_tab_unpk",
        unique: true,
        fields: [
          { name: "nombre_pantalla" },
          { name: "num_tab" },
          { name: "campo" },
          { name: "secuencia" },
        ]
      },
    ]
  });
};
