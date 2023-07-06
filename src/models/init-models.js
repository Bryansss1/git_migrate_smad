var DataTypes = require("sequelize").DataTypes;
var _a_contbcierre = require("./a_contbcierre");
var _a_contbcomprob = require("./a_contbcomprob");
var _a_contbcomprobdet = require("./a_contbcomprobdet");
var _a_contbmayor = require("./a_contbmayor");
var _a_ctacobrar = require("./a_ctacobrar");
var _a_ctacobrardet = require("./a_ctacobrardet");
var _a_ctapagar = require("./a_ctapagar");
var _a_ctapagardet = require("./a_ctapagardet");
var _a_ctapagarpago = require("./a_ctapagarpago");
var _a_entcuenta = require("./a_entcuenta");
var _a_entfinan = require("./a_entfinan");
var _a_entmovcuenta = require("./a_entmovcuenta");
var _a_facturatercero = require("./a_facturatercero");
var _a_facturatersini = require("./a_facturatersini");
var _a_ingreso = require("./a_ingreso");
var _bck_c_maestro_contab = require("./bck_c_maestro_contab");
var _bck_t_carga_persona = require("./bck_t_carga_persona");
var _c_acep_contrareaseg = require("./c_acep_contrareaseg");
var _c_acep_reaseg = require("./c_acep_reaseg");
var _c_ambiente = require("./c_ambiente");
var _c_anexclau = require("./c_anexclau");
var _c_anexclau_seguro = require("./c_anexclau_seguro");
var _c_beneficio = require("./c_beneficio");
var _c_bien = require("./c_bien");
var _c_carga_persona = require("./c_carga_persona");
var _c_cd_contrato = require("./c_cd_contrato");
var _c_ciudad = require("./c_ciudad");
var _c_claseadmin = require("./c_claseadmin");
var _c_clasifadmin = require("./c_clasifadmin");
var _c_clasifriesgo = require("./c_clasifriesgo");
var _c_cobbenef_seguro = require("./c_cobbenef_seguro");
var _c_cobertura = require("./c_cobertura");
var _c_cobertura_seguro = require("./c_cobertura_seguro");
var _c_comcob_int = require("./c_comcob_int");
var _c_contratodetrea = require("./c_contratodetrea");
var _c_contratoramorea = require("./c_contratoramorea");
var _c_contratoreaseg = require("./c_contratoreaseg");
var _c_costo_centuria = require("./c_costo_centuria");
var _c_cptmvfondo = require("./c_cptmvfondo");
var _c_deducobertura_seguro = require("./c_deducobertura_seguro");
var _c_detbeneficio = require("./c_detbeneficio");
var _c_detenfermedad = require("./c_detenfermedad");
var _c_edificacion = require("./c_edificacion");
var _c_enfermedad = require("./c_enfermedad");
var _c_entcta_persona = require("./c_entcta_persona");
var _c_estado = require("./c_estado");
var _c_estatus_tabla = require("./c_estatus_tabla");
var _c_fachada = require("./c_fachada");
var _c_forma_boton_tab = require("./c_forma_boton_tab");
var _c_forma_call_tab = require("./c_forma_call_tab");
var _c_forma_deniedscreen_tab = require("./c_forma_deniedscreen_tab");
var _c_forma_header_tab = require("./c_forma_header_tab");
var _c_forma_notabla = require("./c_forma_notabla");
var _c_forma_preload_tab = require("./c_forma_preload_tab");
var _c_forma_proceso_tab = require("./c_forma_proceso_tab");
var _c_forma_programa_tab = require("./c_forma_programa_tab");
var _c_forma_script_tab = require("./c_forma_script_tab");
var _c_forma_tab = require("./c_forma_tab");
var _c_funcproc_sistema = require("./c_funcproc_sistema");
var _c_gastoadic_seguro = require("./c_gastoadic_seguro");
var _c_indoleriesgo = require("./c_indoleriesgo");
var _c_intermediario = require("./c_intermediario");
var _c_lista_navega = require("./c_lista_navega");
var _c_logusuario = require("./c_logusuario");
var _c_maestro_contab = require("./c_maestro_contab");
var _c_marca = require("./c_marca");
var _c_marca_aero = require("./c_marca_aero");
var _c_marca_embar = require("./c_marca_embar");
var _c_menu = require("./c_menu");
var _c_modelo = require("./c_modelo");
var _c_modelo_aero = require("./c_modelo_aero");
var _c_modelo_embar = require("./c_modelo_embar");
var _c_municipio = require("./c_municipio");
var _c_opcion_menu = require("./c_opcion_menu");
var _c_pais = require("./c_pais");
var _c_parent = require("./c_parent");
var _c_persona = require("./c_persona");
var _c_persona_bck = require("./c_persona_bck");
var _c_personafinan = require("./c_personafinan");
var _c_prima_apov = require("./c_prima_apov");
var _c_prima_autocasco = require("./c_prima_autocasco");
var _c_prima_autocastipgrp = require("./c_prima_autocastipgrp");
var _c_prima_autoglobal = require("./c_prima_autoglobal");
var _c_prima_autouniv = require("./c_prima_autouniv");
var _c_prima_defpenal = require("./c_prima_defpenal");
var _c_prima_exceso = require("./c_prima_exceso");
var _c_prima_excvehtipgrp = require("./c_prima_excvehtipgrp");
var _c_prima_hautoglobal = require("./c_prima_hautoglobal");
var _c_prima_hautouniv = require("./c_prima_hautouniv");
var _c_prima_rcv = require("./c_prima_rcv");
var _c_prima_saludedad = require("./c_prima_saludedad");
var _c_prima_saludprov = require("./c_prima_saludprov");
var _c_prima_servigrua = require("./c_prima_servigrua");
var _c_proceso_seguro = require("./c_proceso_seguro");
var _c_proveedor = require("./c_proveedor");
var _c_ramo = require("./c_ramo");
var _c_recadesc = require("./c_recadesc");
var _c_recadesc_seguro = require("./c_recadesc_seguro");
var _c_renovacion_seguro = require("./c_renovacion_seguro");
var _c_repuesto_veh = require("./c_repuesto_veh");
var _c_requisito = require("./c_requisito");
var _c_requisito_seguro = require("./c_requisito_seguro");
var _c_rol = require("./c_rol");
var _c_rol_persona = require("./c_rol_persona");
var _c_seguro = require("./c_seguro");
var _c_seguro_parent = require("./c_seguro_parent");
var _c_seguro_parentexclu = require("./c_seguro_parentexclu");
var _c_seguro_version = require("./c_seguro_version");
var _c_subclaseadmin = require("./c_subclaseadmin");
var _c_sucursal = require("./c_sucursal");
var _c_sugosrms = require("./c_sugosrms");
var _c_sumacobertura_seguro = require("./c_sumacobertura_seguro");
var _c_tabla_sistema = require("./c_tabla_sistema");
var _c_tasacambio = require("./c_tasacambio");
var _c_tipo_objeto = require("./c_tipo_objeto");
var _c_tipocttoreaseg = require("./c_tipocttoreaseg");
var _c_tipogrupoveh = require("./c_tipogrupoveh");
var _c_tratamiento = require("./c_tratamiento");
var _c_traza = require("./c_traza");
var _c_usuario = require("./c_usuario");
var _c_usuario_permiso = require("./c_usuario_permiso");
var _c_valgen_det = require("./c_valgen_det");
var _c_valgen_header = require("./c_valgen_header");
var _c_version = require("./c_version");
var _d_areaseguro = require("./d_areaseguro");
var _d_contrato = require("./d_contrato");
var _d_intermediario = require("./d_intermediario");
var _d_oficina = require("./d_oficina");
var _d_tiempo = require("./d_tiempo");
var _e_acreedor_seg = require("./e_acreedor_seg");
var _e_aerocert_seg = require("./e_aerocert_seg");
var _e_anexclau_seg = require("./e_anexclau_seg");
var _e_aseg_seg = require("./e_aseg_seg");
var _e_aseg_seg_bck = require("./e_aseg_seg_bck");
var _e_asegbenef_seg = require("./e_asegbenef_seg");
var _e_asegcobert_seg = require("./e_asegcobert_seg");
var _e_beneficiario_seg = require("./e_beneficiario_seg");
var _e_bien_aseg = require("./e_bien_aseg");
var _e_biencobert_seg = require("./e_biencobert_seg");
var _e_certif_seg = require("./e_certif_seg");
var _e_certifdocum_seg = require("./e_certifdocum_seg");
var _e_cobertura_seg = require("./e_cobertura_seg");
var _e_comiscontrato_seg = require("./e_comiscontrato_seg");
var _e_comisioninter_seg = require("./e_comisioninter_seg");
var _e_conductor_seg = require("./e_conductor_seg");
var _e_contragarante_seg = require("./e_contragarante_seg");
var _e_contrato_seg = require("./e_contrato_seg");
var _e_contratodocum_seg = require("./e_contratodocum_seg");
var _e_detsiniauto_seg = require("./e_detsiniauto_seg");
var _e_detsiniestro_seg = require("./e_detsiniestro_seg");
var _e_detsinifian_seg = require("./e_detsinifian_seg");
var _e_detsinipatri_seg = require("./e_detsinipatri_seg");
var _e_detsinisalud_seg = require("./e_detsinisalud_seg");
var _e_dinspecc_seg = require("./e_dinspecc_seg");
var _e_direccion_seg = require("./e_direccion_seg");
var _e_embarcert_seg = require("./e_embarcert_seg");
var _e_facturafondotec_seg = require("./e_facturafondotec_seg");
var _e_facturatec_seg = require("./e_facturatec_seg");
var _e_fianzadet_seg = require("./e_fianzadet_seg");
var _e_fianzaevalua_seg = require("./e_fianzaevalua_seg");
var _e_fondosalud_seg = require("./e_fondosalud_seg");
var _e_gastoadic_seg = require("./e_gastoadic_seg");
var _e_inspcert_seg = require("./e_inspcert_seg");
var _e_inspecc_seg = require("./e_inspecc_seg");
var _e_inter_seg = require("./e_inter_seg");
var _e_movasegcobert_seg = require("./e_movasegcobert_seg");
var _e_movcobert_seg = require("./e_movcobert_seg");
var _e_movdetsiniauto_seg = require("./e_movdetsiniauto_seg");
var _e_movdetsinifian_seg = require("./e_movdetsinifian_seg");
var _e_movdetsinipatri_seg = require("./e_movdetsinipatri_seg");
var _e_movdetsinisalud_seg = require("./e_movdetsinisalud_seg");
var _e_movfondosalud_seg = require("./e_movfondosalud_seg");
var _e_movpatcobert_seg = require("./e_movpatcobert_seg");
var _e_movprima_seg = require("./e_movprima_seg");
var _e_movprimadet_seg = require("./e_movprimadet_seg");
var _e_movreasegcontrato = require("./e_movreasegcontrato");
var _e_movreasegcontratodet = require("./e_movreasegcontratodet");
var _e_movreasegcontratodetacep = require("./e_movreasegcontratodetacep");
var _e_movsincobbenefaseg_seg = require("./e_movsincobbenefaseg_seg");
var _e_movsincobertaseg_seg = require("./e_movsincobertaseg_seg");
var _e_movsincobertauto_seg = require("./e_movsincobertauto_seg");
var _e_movsincobertfian_seg = require("./e_movsincobertfian_seg");
var _e_movsincobertpatri_seg = require("./e_movsincobertpatri_seg");
var _e_movsingastoadic_seg = require("./e_movsingastoadic_seg");
var _e_movsiniestro_seg = require("./e_movsiniestro_seg");
var _e_obscertif_seg = require("./e_obscertif_seg");
var _e_pagodettec_seg = require("./e_pagodettec_seg");
var _e_pagotec_seg = require("./e_pagotec_seg");
var _e_patince_seg = require("./e_patince_seg");
var _e_patterr_seg = require("./e_patterr_seg");
var _e_prifondodetmanual_seg = require("./e_prifondodetmanual_seg");
var _e_prifondomanual_seg = require("./e_prifondomanual_seg");
var _e_prima_seg = require("./e_prima_seg");
var _e_primadet_seg = require("./e_primadet_seg");
var _e_primafondo_seg = require("./e_primafondo_seg");
var _e_primafondodet_seg = require("./e_primafondodet_seg");
var _e_reasegcontrato = require("./e_reasegcontrato");
var _e_reasegcontratodet = require("./e_reasegcontratodet");
var _e_reasegcontratodetacep = require("./e_reasegcontratodetacep");
var _e_recadesc_seg = require("./e_recadesc_seg");
var _e_requisito_seg = require("./e_requisito_seg");
var _e_sincobbenefaseg_seg = require("./e_sincobbenefaseg_seg");
var _e_sincobertaseg_seg = require("./e_sincobertaseg_seg");
var _e_sincobertauto_seg = require("./e_sincobertauto_seg");
var _e_sincobertfian_seg = require("./e_sincobertfian_seg");
var _e_sincobertpatrim_seg = require("./e_sincobertpatrim_seg");
var _e_sindocum_seg = require("./e_sindocum_seg");
var _e_singastoadic_seg = require("./e_singastoadic_seg");
var _e_sinidetobserv_seg = require("./e_sinidetobserv_seg");
var _e_siniestro_seg = require("./e_siniestro_seg");
var _e_sinifactinterfazsigesp = require("./e_sinifactinterfazsigesp");
var _e_siniinterfazsepsolicitud = require("./e_siniinterfazsepsolicitud");
var _e_siniinterfazsigesp = require("./e_siniinterfazsigesp");
var _e_sinrequisito_seg = require("./e_sinrequisito_seg");
var _e_vehicert_seg = require("./e_vehicert_seg");
var _e_vehiculo_seg = require("./e_vehiculo_seg");
var _factor_fachada = require("./factor_fachada");
var _h_prima = require("./h_prima");
var _h_siniestro = require("./h_siniestro");
var _mio_movfondo = require("./mio_movfondo");
var _n_auxmontototal = require("./n_auxmontototal");
var _n_sinianteriores = require("./n_sinianteriores");
var _n_sinisecuelas = require("./n_sinisecuelas");
var _portal_usuario = require("./portal_usuario");
var _prueba_t_carga_aseg = require("./prueba_t_carga_aseg");
var _r_aseg_seg = require("./r_aseg_seg");
var _r_asegcobert_seg = require("./r_asegcobert_seg");
var _r_bien_aseg = require("./r_bien_aseg");
var _r_biencobert_seg = require("./r_biencobert_seg");
var _r_certif_seg = require("./r_certif_seg");
var _r_cobertura_seg = require("./r_cobertura_seg");
var _r_contrato_seg = require("./r_contrato_seg");
var _sini_bolipuerto = require("./sini_bolipuerto");
var _t_carga_aseg = require("./t_carga_aseg");
var _t_carga_asegcobert = require("./t_carga_asegcobert");
var _t_carga_cobert = require("./t_carga_cobert");
var _t_carga_parent = require("./t_carga_parent");
var _t_carga_persona = require("./t_carga_persona");
var _t_carga_salud = require("./t_carga_salud");
var _t_log_cargapersona = require("./t_log_cargapersona");
var _t_primas = require("./t_primas");
var _t_repbalcomprob = require("./t_repbalcomprob");
var _t_repmayoranali = require("./t_repmayoranali");

function initModels(sequelize) {
  var a_contbcierre = _a_contbcierre(sequelize, DataTypes);
  var a_contbcomprob = _a_contbcomprob(sequelize, DataTypes);
  var a_contbcomprobdet = _a_contbcomprobdet(sequelize, DataTypes);
  var a_contbmayor = _a_contbmayor(sequelize, DataTypes);
  var a_ctacobrar = _a_ctacobrar(sequelize, DataTypes);
  var a_ctacobrardet = _a_ctacobrardet(sequelize, DataTypes);
  var a_ctapagar = _a_ctapagar(sequelize, DataTypes);
  var a_ctapagardet = _a_ctapagardet(sequelize, DataTypes);
  var a_ctapagarpago = _a_ctapagarpago(sequelize, DataTypes);
  var a_entcuenta = _a_entcuenta(sequelize, DataTypes);
  var a_entfinan = _a_entfinan(sequelize, DataTypes);
  var a_entmovcuenta = _a_entmovcuenta(sequelize, DataTypes);
  var a_facturatercero = _a_facturatercero(sequelize, DataTypes);
  var a_facturatersini = _a_facturatersini(sequelize, DataTypes);
  var a_ingreso = _a_ingreso(sequelize, DataTypes);
  var bck_c_maestro_contab = _bck_c_maestro_contab(sequelize, DataTypes);
  var bck_t_carga_persona = _bck_t_carga_persona(sequelize, DataTypes);
  var c_acep_contrareaseg = _c_acep_contrareaseg(sequelize, DataTypes);
  var c_acep_reaseg = _c_acep_reaseg(sequelize, DataTypes);
  var c_ambiente = _c_ambiente(sequelize, DataTypes);
  var c_anexclau = _c_anexclau(sequelize, DataTypes);
  var c_anexclau_seguro = _c_anexclau_seguro(sequelize, DataTypes);
  var c_beneficio = _c_beneficio(sequelize, DataTypes);
  var c_bien = _c_bien(sequelize, DataTypes);
  var c_carga_persona = _c_carga_persona(sequelize, DataTypes);
  var c_cd_contrato = _c_cd_contrato(sequelize, DataTypes);
  var c_ciudad = _c_ciudad(sequelize, DataTypes);
  var c_claseadmin = _c_claseadmin(sequelize, DataTypes);
  var c_clasifadmin = _c_clasifadmin(sequelize, DataTypes);
  var c_clasifriesgo = _c_clasifriesgo(sequelize, DataTypes);
  var c_cobbenef_seguro = _c_cobbenef_seguro(sequelize, DataTypes);
  var c_cobertura = _c_cobertura(sequelize, DataTypes);
  var c_cobertura_seguro = _c_cobertura_seguro(sequelize, DataTypes);
  var c_comcob_int = _c_comcob_int(sequelize, DataTypes);
  var c_contratodetrea = _c_contratodetrea(sequelize, DataTypes);
  var c_contratoramorea = _c_contratoramorea(sequelize, DataTypes);
  var c_contratoreaseg = _c_contratoreaseg(sequelize, DataTypes);
  var c_costo_centuria = _c_costo_centuria(sequelize, DataTypes);
  var c_cptmvfondo = _c_cptmvfondo(sequelize, DataTypes);
  var c_deducobertura_seguro = _c_deducobertura_seguro(sequelize, DataTypes);
  var c_detbeneficio = _c_detbeneficio(sequelize, DataTypes);
  var c_detenfermedad = _c_detenfermedad(sequelize, DataTypes);
  var c_edificacion = _c_edificacion(sequelize, DataTypes);
  var c_enfermedad = _c_enfermedad(sequelize, DataTypes);
  var c_entcta_persona = _c_entcta_persona(sequelize, DataTypes);
  var c_estado = _c_estado(sequelize, DataTypes);
  var c_estatus_tabla = _c_estatus_tabla(sequelize, DataTypes);
  var c_fachada = _c_fachada(sequelize, DataTypes);
  var c_forma_boton_tab = _c_forma_boton_tab(sequelize, DataTypes);
  var c_forma_call_tab = _c_forma_call_tab(sequelize, DataTypes);
  var c_forma_deniedscreen_tab = _c_forma_deniedscreen_tab(sequelize, DataTypes);
  var c_forma_header_tab = _c_forma_header_tab(sequelize, DataTypes);
  var c_forma_notabla = _c_forma_notabla(sequelize, DataTypes);
  var c_forma_preload_tab = _c_forma_preload_tab(sequelize, DataTypes);
  var c_forma_proceso_tab = _c_forma_proceso_tab(sequelize, DataTypes);
  var c_forma_programa_tab = _c_forma_programa_tab(sequelize, DataTypes);
  var c_forma_script_tab = _c_forma_script_tab(sequelize, DataTypes);
  var c_forma_tab = _c_forma_tab(sequelize, DataTypes);
  var c_funcproc_sistema = _c_funcproc_sistema(sequelize, DataTypes);
  var c_gastoadic_seguro = _c_gastoadic_seguro(sequelize, DataTypes);
  var c_indoleriesgo = _c_indoleriesgo(sequelize, DataTypes);
  var c_intermediario = _c_intermediario(sequelize, DataTypes);
  var c_lista_navega = _c_lista_navega(sequelize, DataTypes);
  var c_logusuario = _c_logusuario(sequelize, DataTypes);
  var c_maestro_contab = _c_maestro_contab(sequelize, DataTypes);
  var c_marca = _c_marca(sequelize, DataTypes);
  var c_marca_aero = _c_marca_aero(sequelize, DataTypes);
  var c_marca_embar = _c_marca_embar(sequelize, DataTypes);
  var c_menu = _c_menu(sequelize, DataTypes);
  var c_modelo = _c_modelo(sequelize, DataTypes);
  var c_modelo_aero = _c_modelo_aero(sequelize, DataTypes);
  var c_modelo_embar = _c_modelo_embar(sequelize, DataTypes);
  var c_municipio = _c_municipio(sequelize, DataTypes);
  var c_opcion_menu = _c_opcion_menu(sequelize, DataTypes);
  var c_pais = _c_pais(sequelize, DataTypes);
  var c_parent = _c_parent(sequelize, DataTypes);
  var c_persona = _c_persona(sequelize, DataTypes);
  var c_persona_bck = _c_persona_bck(sequelize, DataTypes);
  var c_personafinan = _c_personafinan(sequelize, DataTypes);
  var c_prima_apov = _c_prima_apov(sequelize, DataTypes);
  var c_prima_autocasco = _c_prima_autocasco(sequelize, DataTypes);
  var c_prima_autocastipgrp = _c_prima_autocastipgrp(sequelize, DataTypes);
  var c_prima_autoglobal = _c_prima_autoglobal(sequelize, DataTypes);
  var c_prima_autouniv = _c_prima_autouniv(sequelize, DataTypes);
  var c_prima_defpenal = _c_prima_defpenal(sequelize, DataTypes);
  var c_prima_exceso = _c_prima_exceso(sequelize, DataTypes);
  var c_prima_excvehtipgrp = _c_prima_excvehtipgrp(sequelize, DataTypes);
  var c_prima_hautoglobal = _c_prima_hautoglobal(sequelize, DataTypes);
  var c_prima_hautouniv = _c_prima_hautouniv(sequelize, DataTypes);
  var c_prima_rcv = _c_prima_rcv(sequelize, DataTypes);
  var c_prima_saludedad = _c_prima_saludedad(sequelize, DataTypes);
  var c_prima_saludprov = _c_prima_saludprov(sequelize, DataTypes);
  var c_prima_servigrua = _c_prima_servigrua(sequelize, DataTypes);
  var c_proceso_seguro = _c_proceso_seguro(sequelize, DataTypes);
  var c_proveedor = _c_proveedor(sequelize, DataTypes);
  var c_ramo = _c_ramo(sequelize, DataTypes);
  var c_recadesc = _c_recadesc(sequelize, DataTypes);
  var c_recadesc_seguro = _c_recadesc_seguro(sequelize, DataTypes);
  var c_renovacion_seguro = _c_renovacion_seguro(sequelize, DataTypes);
  var c_repuesto_veh = _c_repuesto_veh(sequelize, DataTypes);
  var c_requisito = _c_requisito(sequelize, DataTypes);
  var c_requisito_seguro = _c_requisito_seguro(sequelize, DataTypes);
  var c_rol = _c_rol(sequelize, DataTypes);
  var c_rol_persona = _c_rol_persona(sequelize, DataTypes);
  var c_seguro = _c_seguro(sequelize, DataTypes);
  var c_seguro_parent = _c_seguro_parent(sequelize, DataTypes);
  var c_seguro_parentexclu = _c_seguro_parentexclu(sequelize, DataTypes);
  var c_seguro_version = _c_seguro_version(sequelize, DataTypes);
  var c_subclaseadmin = _c_subclaseadmin(sequelize, DataTypes);
  var c_sucursal = _c_sucursal(sequelize, DataTypes);
  var c_sugosrms = _c_sugosrms(sequelize, DataTypes);
  var c_sumacobertura_seguro = _c_sumacobertura_seguro(sequelize, DataTypes);
  var c_tabla_sistema = _c_tabla_sistema(sequelize, DataTypes);
  var c_tasacambio = _c_tasacambio(sequelize, DataTypes);
  var c_tipo_objeto = _c_tipo_objeto(sequelize, DataTypes);
  var c_tipocttoreaseg = _c_tipocttoreaseg(sequelize, DataTypes);
  var c_tipogrupoveh = _c_tipogrupoveh(sequelize, DataTypes);
  var c_tratamiento = _c_tratamiento(sequelize, DataTypes);
  var c_traza = _c_traza(sequelize, DataTypes);
  var c_usuario = _c_usuario(sequelize, DataTypes);
  var c_usuario_permiso = _c_usuario_permiso(sequelize, DataTypes);
  var c_valgen_det = _c_valgen_det(sequelize, DataTypes);
  var c_valgen_header = _c_valgen_header(sequelize, DataTypes);
  var c_version = _c_version(sequelize, DataTypes);
  var d_areaseguro = _d_areaseguro(sequelize, DataTypes);
  var d_contrato = _d_contrato(sequelize, DataTypes);
  var d_intermediario = _d_intermediario(sequelize, DataTypes);
  var d_oficina = _d_oficina(sequelize, DataTypes);
  var d_tiempo = _d_tiempo(sequelize, DataTypes);
  var e_acreedor_seg = _e_acreedor_seg(sequelize, DataTypes);
  var e_aerocert_seg = _e_aerocert_seg(sequelize, DataTypes);
  var e_anexclau_seg = _e_anexclau_seg(sequelize, DataTypes);
  var e_aseg_seg = _e_aseg_seg(sequelize, DataTypes);
  var e_aseg_seg_bck = _e_aseg_seg_bck(sequelize, DataTypes);
  var e_asegbenef_seg = _e_asegbenef_seg(sequelize, DataTypes);
  var e_asegcobert_seg = _e_asegcobert_seg(sequelize, DataTypes);
  var e_beneficiario_seg = _e_beneficiario_seg(sequelize, DataTypes);
  var e_bien_aseg = _e_bien_aseg(sequelize, DataTypes);
  var e_biencobert_seg = _e_biencobert_seg(sequelize, DataTypes);
  var e_certif_seg = _e_certif_seg(sequelize, DataTypes);
  var e_certifdocum_seg = _e_certifdocum_seg(sequelize, DataTypes);
  var e_cobertura_seg = _e_cobertura_seg(sequelize, DataTypes);
  var e_comiscontrato_seg = _e_comiscontrato_seg(sequelize, DataTypes);
  var e_comisioninter_seg = _e_comisioninter_seg(sequelize, DataTypes);
  var e_conductor_seg = _e_conductor_seg(sequelize, DataTypes);
  var e_contragarante_seg = _e_contragarante_seg(sequelize, DataTypes);
  var e_contrato_seg = _e_contrato_seg(sequelize, DataTypes);
  var e_contratodocum_seg = _e_contratodocum_seg(sequelize, DataTypes);
  var e_detsiniauto_seg = _e_detsiniauto_seg(sequelize, DataTypes);
  var e_detsiniestro_seg = _e_detsiniestro_seg(sequelize, DataTypes);
  var e_detsinifian_seg = _e_detsinifian_seg(sequelize, DataTypes);
  var e_detsinipatri_seg = _e_detsinipatri_seg(sequelize, DataTypes);
  var e_detsinisalud_seg = _e_detsinisalud_seg(sequelize, DataTypes);
  var e_dinspecc_seg = _e_dinspecc_seg(sequelize, DataTypes);
  var e_direccion_seg = _e_direccion_seg(sequelize, DataTypes);
  var e_embarcert_seg = _e_embarcert_seg(sequelize, DataTypes);
  var e_facturafondotec_seg = _e_facturafondotec_seg(sequelize, DataTypes);
  var e_facturatec_seg = _e_facturatec_seg(sequelize, DataTypes);
  var e_fianzadet_seg = _e_fianzadet_seg(sequelize, DataTypes);
  var e_fianzaevalua_seg = _e_fianzaevalua_seg(sequelize, DataTypes);
  var e_fondosalud_seg = _e_fondosalud_seg(sequelize, DataTypes);
  var e_gastoadic_seg = _e_gastoadic_seg(sequelize, DataTypes);
  var e_inspcert_seg = _e_inspcert_seg(sequelize, DataTypes);
  var e_inspecc_seg = _e_inspecc_seg(sequelize, DataTypes);
  var e_inter_seg = _e_inter_seg(sequelize, DataTypes);
  var e_movasegcobert_seg = _e_movasegcobert_seg(sequelize, DataTypes);
  var e_movcobert_seg = _e_movcobert_seg(sequelize, DataTypes);
  var e_movdetsiniauto_seg = _e_movdetsiniauto_seg(sequelize, DataTypes);
  var e_movdetsinifian_seg = _e_movdetsinifian_seg(sequelize, DataTypes);
  var e_movdetsinipatri_seg = _e_movdetsinipatri_seg(sequelize, DataTypes);
  var e_movdetsinisalud_seg = _e_movdetsinisalud_seg(sequelize, DataTypes);
  var e_movfondosalud_seg = _e_movfondosalud_seg(sequelize, DataTypes);
  var e_movpatcobert_seg = _e_movpatcobert_seg(sequelize, DataTypes);
  var e_movprima_seg = _e_movprima_seg(sequelize, DataTypes);
  var e_movprimadet_seg = _e_movprimadet_seg(sequelize, DataTypes);
  var e_movreasegcontrato = _e_movreasegcontrato(sequelize, DataTypes);
  var e_movreasegcontratodet = _e_movreasegcontratodet(sequelize, DataTypes);
  var e_movreasegcontratodetacep = _e_movreasegcontratodetacep(sequelize, DataTypes);
  var e_movsincobbenefaseg_seg = _e_movsincobbenefaseg_seg(sequelize, DataTypes);
  var e_movsincobertaseg_seg = _e_movsincobertaseg_seg(sequelize, DataTypes);
  var e_movsincobertauto_seg = _e_movsincobertauto_seg(sequelize, DataTypes);
  var e_movsincobertfian_seg = _e_movsincobertfian_seg(sequelize, DataTypes);
  var e_movsincobertpatri_seg = _e_movsincobertpatri_seg(sequelize, DataTypes);
  var e_movsingastoadic_seg = _e_movsingastoadic_seg(sequelize, DataTypes);
  var e_movsiniestro_seg = _e_movsiniestro_seg(sequelize, DataTypes);
  var e_obscertif_seg = _e_obscertif_seg(sequelize, DataTypes);
  var e_pagodettec_seg = _e_pagodettec_seg(sequelize, DataTypes);
  var e_pagotec_seg = _e_pagotec_seg(sequelize, DataTypes);
  var e_patince_seg = _e_patince_seg(sequelize, DataTypes);
  var e_patterr_seg = _e_patterr_seg(sequelize, DataTypes);
  var e_prifondodetmanual_seg = _e_prifondodetmanual_seg(sequelize, DataTypes);
  var e_prifondomanual_seg = _e_prifondomanual_seg(sequelize, DataTypes);
  var e_prima_seg = _e_prima_seg(sequelize, DataTypes);
  var e_primadet_seg = _e_primadet_seg(sequelize, DataTypes);
  var e_primafondo_seg = _e_primafondo_seg(sequelize, DataTypes);
  var e_primafondodet_seg = _e_primafondodet_seg(sequelize, DataTypes);
  var e_reasegcontrato = _e_reasegcontrato(sequelize, DataTypes);
  var e_reasegcontratodet = _e_reasegcontratodet(sequelize, DataTypes);
  var e_reasegcontratodetacep = _e_reasegcontratodetacep(sequelize, DataTypes);
  var e_recadesc_seg = _e_recadesc_seg(sequelize, DataTypes);
  var e_requisito_seg = _e_requisito_seg(sequelize, DataTypes);
  var e_sincobbenefaseg_seg = _e_sincobbenefaseg_seg(sequelize, DataTypes);
  var e_sincobertaseg_seg = _e_sincobertaseg_seg(sequelize, DataTypes);
  var e_sincobertauto_seg = _e_sincobertauto_seg(sequelize, DataTypes);
  var e_sincobertfian_seg = _e_sincobertfian_seg(sequelize, DataTypes);
  var e_sincobertpatrim_seg = _e_sincobertpatrim_seg(sequelize, DataTypes);
  var e_sindocum_seg = _e_sindocum_seg(sequelize, DataTypes);
  var e_singastoadic_seg = _e_singastoadic_seg(sequelize, DataTypes);
  var e_sinidetobserv_seg = _e_sinidetobserv_seg(sequelize, DataTypes);
  var e_siniestro_seg = _e_siniestro_seg(sequelize, DataTypes);
  var e_sinifactinterfazsigesp = _e_sinifactinterfazsigesp(sequelize, DataTypes);
  var e_siniinterfazsepsolicitud = _e_siniinterfazsepsolicitud(sequelize, DataTypes);
  var e_siniinterfazsigesp = _e_siniinterfazsigesp(sequelize, DataTypes);
  var e_sinrequisito_seg = _e_sinrequisito_seg(sequelize, DataTypes);
  var e_vehicert_seg = _e_vehicert_seg(sequelize, DataTypes);
  var e_vehiculo_seg = _e_vehiculo_seg(sequelize, DataTypes);
  var factor_fachada = _factor_fachada(sequelize, DataTypes);
  var h_prima = _h_prima(sequelize, DataTypes);
  var h_siniestro = _h_siniestro(sequelize, DataTypes);
  var mio_movfondo = _mio_movfondo(sequelize, DataTypes);
  var n_auxmontototal = _n_auxmontototal(sequelize, DataTypes);
  var n_sinianteriores = _n_sinianteriores(sequelize, DataTypes);
  var n_sinisecuelas = _n_sinisecuelas(sequelize, DataTypes);
  var portal_usuario = _portal_usuario(sequelize, DataTypes);
  var prueba_t_carga_aseg = _prueba_t_carga_aseg(sequelize, DataTypes);
  var r_aseg_seg = _r_aseg_seg(sequelize, DataTypes);
  var r_asegcobert_seg = _r_asegcobert_seg(sequelize, DataTypes);
  var r_bien_aseg = _r_bien_aseg(sequelize, DataTypes);
  var r_biencobert_seg = _r_biencobert_seg(sequelize, DataTypes);
  var r_certif_seg = _r_certif_seg(sequelize, DataTypes);
  var r_cobertura_seg = _r_cobertura_seg(sequelize, DataTypes);
  var r_contrato_seg = _r_contrato_seg(sequelize, DataTypes);
  var sini_bolipuerto = _sini_bolipuerto(sequelize, DataTypes);
  var t_carga_aseg = _t_carga_aseg(sequelize, DataTypes);
  var t_carga_asegcobert = _t_carga_asegcobert(sequelize, DataTypes);
  var t_carga_cobert = _t_carga_cobert(sequelize, DataTypes);
  var t_carga_parent = _t_carga_parent(sequelize, DataTypes);
  var t_carga_persona = _t_carga_persona(sequelize, DataTypes);
  var t_carga_salud = _t_carga_salud(sequelize, DataTypes);
  var t_log_cargapersona = _t_log_cargapersona(sequelize, DataTypes);
  var t_primas = _t_primas(sequelize, DataTypes);
  var t_repbalcomprob = _t_repbalcomprob(sequelize, DataTypes);
  var t_repmayoranali = _t_repmayoranali(sequelize, DataTypes);


  return {
    a_contbcierre,
    a_contbcomprob,
    a_contbcomprobdet,
    a_contbmayor,
    a_ctacobrar,
    a_ctacobrardet,
    a_ctapagar,
    a_ctapagardet,
    a_ctapagarpago,
    a_entcuenta,
    a_entfinan,
    a_entmovcuenta,
    a_facturatercero,
    a_facturatersini,
    a_ingreso,
    bck_c_maestro_contab,
    bck_t_carga_persona,
    c_acep_contrareaseg,
    c_acep_reaseg,
    c_ambiente,
    c_anexclau,
    c_anexclau_seguro,
    c_beneficio,
    c_bien,
    c_carga_persona,
    c_cd_contrato,
    c_ciudad,
    c_claseadmin,
    c_clasifadmin,
    c_clasifriesgo,
    c_cobbenef_seguro,
    c_cobertura,
    c_cobertura_seguro,
    c_comcob_int,
    c_contratodetrea,
    c_contratoramorea,
    c_contratoreaseg,
    c_costo_centuria,
    c_cptmvfondo,
    c_deducobertura_seguro,
    c_detbeneficio,
    c_detenfermedad,
    c_edificacion,
    c_enfermedad,
    c_entcta_persona,
    c_estado,
    c_estatus_tabla,
    c_fachada,
    c_forma_boton_tab,
    c_forma_call_tab,
    c_forma_deniedscreen_tab,
    c_forma_header_tab,
    c_forma_notabla,
    c_forma_preload_tab,
    c_forma_proceso_tab,
    c_forma_programa_tab,
    c_forma_script_tab,
    c_forma_tab,
    c_funcproc_sistema,
    c_gastoadic_seguro,
    c_indoleriesgo,
    c_intermediario,
    c_lista_navega,
    c_logusuario,
    c_maestro_contab,
    c_marca,
    c_marca_aero,
    c_marca_embar,
    c_menu,
    c_modelo,
    c_modelo_aero,
    c_modelo_embar,
    c_municipio,
    c_opcion_menu,
    c_pais,
    c_parent,
    c_persona,
    c_persona_bck,
    c_personafinan,
    c_prima_apov,
    c_prima_autocasco,
    c_prima_autocastipgrp,
    c_prima_autoglobal,
    c_prima_autouniv,
    c_prima_defpenal,
    c_prima_exceso,
    c_prima_excvehtipgrp,
    c_prima_hautoglobal,
    c_prima_hautouniv,
    c_prima_rcv,
    c_prima_saludedad,
    c_prima_saludprov,
    c_prima_servigrua,
    c_proceso_seguro,
    c_proveedor,
    c_ramo,
    c_recadesc,
    c_recadesc_seguro,
    c_renovacion_seguro,
    c_repuesto_veh,
    c_requisito,
    c_requisito_seguro,
    c_rol,
    c_rol_persona,
    c_seguro,
    c_seguro_parent,
    c_seguro_parentexclu,
    c_seguro_version,
    c_subclaseadmin,
    c_sucursal,
    c_sugosrms,
    c_sumacobertura_seguro,
    c_tabla_sistema,
    c_tasacambio,
    c_tipo_objeto,
    c_tipocttoreaseg,
    c_tipogrupoveh,
    c_tratamiento,
    c_traza,
    c_usuario,
    c_usuario_permiso,
    c_valgen_det,
    c_valgen_header,
    c_version,
    d_areaseguro,
    d_contrato,
    d_intermediario,
    d_oficina,
    d_tiempo,
    e_acreedor_seg,
    e_aerocert_seg,
    e_anexclau_seg,
    e_aseg_seg,
    e_aseg_seg_bck,
    e_asegbenef_seg,
    e_asegcobert_seg,
    e_beneficiario_seg,
    e_bien_aseg,
    e_biencobert_seg,
    e_certif_seg,
    e_certifdocum_seg,
    e_cobertura_seg,
    e_comiscontrato_seg,
    e_comisioninter_seg,
    e_conductor_seg,
    e_contragarante_seg,
    e_contrato_seg,
    e_contratodocum_seg,
    e_detsiniauto_seg,
    e_detsiniestro_seg,
    e_detsinifian_seg,
    e_detsinipatri_seg,
    e_detsinisalud_seg,
    e_dinspecc_seg,
    e_direccion_seg,
    e_embarcert_seg,
    e_facturafondotec_seg,
    e_facturatec_seg,
    e_fianzadet_seg,
    e_fianzaevalua_seg,
    e_fondosalud_seg,
    e_gastoadic_seg,
    e_inspcert_seg,
    e_inspecc_seg,
    e_inter_seg,
    e_movasegcobert_seg,
    e_movcobert_seg,
    e_movdetsiniauto_seg,
    e_movdetsinifian_seg,
    e_movdetsinipatri_seg,
    e_movdetsinisalud_seg,
    e_movfondosalud_seg,
    e_movpatcobert_seg,
    e_movprima_seg,
    e_movprimadet_seg,
    e_movreasegcontrato,
    e_movreasegcontratodet,
    e_movreasegcontratodetacep,
    e_movsincobbenefaseg_seg,
    e_movsincobertaseg_seg,
    e_movsincobertauto_seg,
    e_movsincobertfian_seg,
    e_movsincobertpatri_seg,
    e_movsingastoadic_seg,
    e_movsiniestro_seg,
    e_obscertif_seg,
    e_pagodettec_seg,
    e_pagotec_seg,
    e_patince_seg,
    e_patterr_seg,
    e_prifondodetmanual_seg,
    e_prifondomanual_seg,
    e_prima_seg,
    e_primadet_seg,
    e_primafondo_seg,
    e_primafondodet_seg,
    e_reasegcontrato,
    e_reasegcontratodet,
    e_reasegcontratodetacep,
    e_recadesc_seg,
    e_requisito_seg,
    e_sincobbenefaseg_seg,
    e_sincobertaseg_seg,
    e_sincobertauto_seg,
    e_sincobertfian_seg,
    e_sincobertpatrim_seg,
    e_sindocum_seg,
    e_singastoadic_seg,
    e_sinidetobserv_seg,
    e_siniestro_seg,
    e_sinifactinterfazsigesp,
    e_siniinterfazsepsolicitud,
    e_siniinterfazsigesp,
    e_sinrequisito_seg,
    e_vehicert_seg,
    e_vehiculo_seg,
    factor_fachada,
    h_prima,
    h_siniestro,
    mio_movfondo,
    n_auxmontototal,
    n_sinianteriores,
    n_sinisecuelas,
    portal_usuario,
    prueba_t_carga_aseg,
    r_aseg_seg,
    r_asegcobert_seg,
    r_bien_aseg,
    r_biencobert_seg,
    r_certif_seg,
    r_cobertura_seg,
    r_contrato_seg,
    sini_bolipuerto,
    t_carga_aseg,
    t_carga_asegcobert,
    t_carga_cobert,
    t_carga_parent,
    t_carga_persona,
    t_carga_salud,
    t_log_cargapersona,
    t_primas,
    t_repbalcomprob,
    t_repmayoranali,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
