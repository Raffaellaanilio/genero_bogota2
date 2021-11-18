var main_items = {
    "title": ["Manzanas del Cuidado <br> Ciudad de Bogotá <br> Colombia", "Safety Blocks <br> Bogotá <br> Colombia"],
    "acerca_de": ["Sobre el proyecto", "About the project"],
    "description": ["Sobre el proyecto", "About the project"],
    "main_language": "english",
    "map": {
        "center": [-74.1914, 4.6004], // X and Y
        "zoom": 9.5,
        "style": "mapbox://styles/mapbox/light-v10"
    }
}

var categories = [
    [1, 'Oferta pública en cuidados', 'Public offer in care'],
    [2, 'Oferta privada en cuidados', 'Private offer in care'],
    [3, 'Educación', 'Education'],
    [4, 'Cultura', 'Culture'],
    [5, 'Movilidad', 'Mobility'],
    [6, 'Seguridad', 'Security'],
    [7, 'Manzanas del cuidado', 'Safety blocks'],
    [8, 'Indicadores estadísticos', 'Statistical indicators'],
]

var subgroup1_categories = [
    [1, 8, 'Indicadores generales', 'Main indicators'],
    [2, 8, 'Indicadores de demanda', 'Demand indicators'],
    [3, 8, 'Indicadores socioterritoriales', 'Socio-territorial indicators'],
    [4, 8, 'Presupuestos participativos', 'Participatory budgets'],
]

var subgroup2_categories = [
    [1, 3, 'Dimensiones de la pobreza', 'Dimensions of poverty'],
    [2, 3, 'Privaciones en el hogar', 'Home deprivation'],
    [3, 3, 'Subclasificaciones tipos de hogar', 'Household subclassifications'],
    [4, 3, 'Trabajo y seguridad social', 'Work and social security'],
    [5, 3, 'Transporte y movilización', 'Transportation and mobilization'],
]

var subgroup3_categories = [
    [1, 5, 'Medio de transporte para ir a trabajar (hombres)', 'Means of transportation to go to work (men)'],
    [2, 5, 'Medio de transporte para ir a trabajar (mujeres)', 'Means of transportation to go to work (women)'],
    [3, 5, 'Porcentaje de hogares que se demoran menos de 15 minutos a un destino', 'Percentage of households that take less than 15 minutes to a destination'],
]

var layers = [

//[1, 'Oferta pública en cuidados', 'Public offer in care'],
[1, 1, "geonode:jardin_infantil" , 'Jardines infantiles', 'Kindergartens']
[2, 1, "geonode:centro_proteger" , 'Centro proteger', '']
[3, 1, "geonode:centro_amar" , 'Centro amar', '']
[4, 1, "geonode:creciendo_familia" , 'Creciendo en familia', '']
[5, 1, "geonode:comedor_comunitario" , 'Comedor comunitario', '']
[6, 1, "geonode:envejecimiento_activo" ,'Envejecimiento activo y feliz', '']
[7, 1, "geonode:atencion_personas_mayores_discapacidad", 'Atención a personas mayores con discapacidad', '']
[8, 1, "geonode:atencion_ninos_discapacidad0", 'Atención a niños, niñas y adolescentes con discapacidad', '']
[9, 1, "geonode:casa_oportunidades_mujeres", 'Casa de igualdad de oportunidades para mujeres', '']
[10, 1, "geonode:casa_pensamiento_intercultural", 'Casa de pensamiento intercultural', '']

//    [2, 'Oferta privada en cuidados', 'Private offer in care'],
[11, 2, "geonode:coordenadas_empresas", 'Empresas del Municipio de Bogotá según clase de actividad económica', '']

//    [3, 'Educación', 'Education'],
[12, 3, "geonode:colegios", 'Colegios', '']

//    [4, 'Cultura', 'Culture'],
[13, 4, "geonode:biblored", 'Red Biblioteca Pública - Biblored', '']
[14, 4, "geonode:bibliotecas_comunitarias", 'Bibliotecas Comunitarias', '']

//    [5, 'Movilidad', 'Mobility'],
[15, 5, "geonode:ciclovias", 'Ciclovias', '']
[16, 5, "geonode:paraderos_zonales_SITP", 'Paraderos', '']

//    [6, 'Seguridad', 'Security'],
[17, 6, "geonode:estacion_de_policia", 'Estación de policía', '']
[18, 6, "geonode:cuadrantes_policia", 'Cuadrantes de policía', '']
[19, 6, "geonode:comisaria_familia", 'Comisaría de la familia', '']
[20, 6, "geonode:indice_seguridad", 'Puntos de seguridad nocturna mujeres', '']

//    [7, 'Manzanas del cuidado', 'Safety blocks'],
[21, 7, "geonode:propuesta_manzanas", 'Localización manzanas del cuidado', '']

//    [1, 8, 'Indicadores generales', 'Main indicators'],
[22, 8, "geonode:tabla_indicadores_actualizada", 'Total de hogares', ''],
[23, 8, "geonode:tabla_indicadores_actualizada", 'Total de personas', ''],

//    [2, 8, 'Indicadores de demanda', 'Demand indicators'],
[24, 8, "geonode:tabla_indicadores_actualizada", 'Índice de feminidad', '', ''],
[25, 8, "geonode:tabla_indicadores_actualizada", 'Porcentaje de personas menores de 5 años', ''],
[26, 8, "geonode:tabla_indicadores_actualizada", 'Porcentaje de personas mayores de 64 años', ''],
[27, 8, "geonode:tabla_indicadores_actualizada", 'Porcentaje de personas mayores de 80 años', ''],
[28, 8, "geonode:tabla_indicadores_actualizada", 'Relación de dependencia', ''],
[29, 8, "geonode:tabla_indicadores_actualizada", 'Personas con dificultades en su vida diaria', ''],

//[1, 3, 'Dimensiones de la pobreza', 'Dimensions of poverty'],
[30, 3, "geonode:tabla_indicadores_actualizada", 'Analfabetismo', ''],
[31, 3, "geonode:tabla_indicadores_actualizada", 'Inasistencia escolar', ''],
[32, 3, "geonode:tabla_indicadores_actualizada", 'Cuidado primera infancia', ''],
[33, 3, "geonode:tabla_indicadores_actualizada", 'Acceso a salud', ''],
[34, 3, "geonode:tabla_indicadores_actualizada", 'Hacinamiento', ''],
[35, 3, "geonode:tabla_indicadores_actualizada", 'Pobreza monetaria (DANE)', ''],

//[2, 3, 'Privaciones en el hogar', 'Home deprivation'],
[36, 3, "geonode:tabla_indicadores_actualizada", '% hogares que no poseen lavadora', ''],
[37, 3, "geonode:tabla_indicadores_actualizada", '% hogares que no poseen refrigerador', ''],
[38, 3, "geonode:tabla_indicadores_actualizada", '% hogares que no poseen internet', ''],

//[3, 3, 'Subclasificaciones tipos de hogar', 'Household subclassifications'],
[39, 3, "geonode:tabla_indicadores_actualizada", 'Hogares unipersonales con personas de 65 años o más/Total hogares', ''],
[40, 3, "geonode:tabla_indicadores_actualizada", 'Hogares monoparentales femeninos con menores de 15 años/ Total de hogares', ''],
[41, 3, "geonode:tabla_indicadores_actualizada", 'Hogares monoparentales femeninos con mayores de 65 años/ Total de hogares', ''],
[42, 3, "geonode:tabla_indicadores_actualizada", 'Hogares biparentales con menores de 15 años/ Total hogares', ''],
[43, 3, "geonode:tabla_indicadores_actualizada", 'Hogares biparentales con mayores de 65 años/ Total de hogares', ''],
[44, 3, "geonode:tabla_indicadores_actualizada", 'Indice de feminidad de hogares pobres', ''],

//  [4, 3, 'Trabajo y seguridad social', 'Work and social security'],
[45, 3, "geonode:tabla_indicadores_actualizada", 'Tasa de ocupación en mujeres', ''],
[46, 3, "geonode:tabla_indicadores_actualizada", 'Mujeres sin cotizar', ''],
[47, 3, "geonode:tabla_indicadores_actualizada", 'Hombres sin cotizar', ''],
[48, 3, "geonode:tabla_indicadores_actualizada", 'Hombres que reciben pensión', ''],
[49, 3, "geonode:tabla_indicadores_actualizada", 'Mujeres que reciben pensión', ''],
[50, 3, "geonode:tabla_indicadores_actualizada", 'Mujeres que se dedican exclusivamente a las tareas del hogar de 15 años o más/Total mujeres de 15 años o más', ''],

// [1, 5, 'Medio de transporte para ir a trabajar (hombres)', 'Means of transportation to go to work (men)'],
[51, 5, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de transmilenio para llegar al trabajo', ''],
[52, 5, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de buses SITP para llegar al trabajo', ''],
[53, 5, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de Bus, buseta o colectivo para llegar al trabajo', ''],
[54, 5, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de automovil para llegar al trabajo', ''],
[55, 5, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de taxi para llegar al trabajo', ''],
[56, 5, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de moto para llegar al trabajo', ''],
[57, 5, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de bicicleta para llegar al trabajo', ''],
[58, 5, "geonode:tabla_indicadores_actualizada", 'Porcentaje que camina para llegar al trabajo', ''],

//[2, 5, 'Medio de transporte para ir a trabajar (mujeres)', 'Means of transportation to go to work (women)'],
[59, 5, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de transmilenio para llegar al trabajo', ''],
[60, 5, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de buses SITP para llegar al trabajo', ''],
[61, 5, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de buses, busetas o colectivos para llegar al trabajo', ''],
[62, 5, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de automovil para llegar al trabajo', ''],
[63, 5, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de taxis para llegar al trabajo', ''],
[64, 5, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de bicicleta para llegar al trabajo', ''],
[65, 5, "geonode:tabla_indicadores_actualizada", 'Porcentaje que camina para llegar al trabajo', ''],

//[3, 5, 'Porcentaje de hogares que se demoran menos de 15 minutos a un destino', 'Percentage of households that take less than 15 minutes to a destination'],
[66, 5, "geonode:tabla_indicadores_actualizada", 'Centros de cuidado infantil', ''],
[67, 5, "geonode:tabla_indicadores_actualizada", 'Estación TransMilenio o paradero alimentador', ''],
[68, 5, "geonode:tabla_indicadores_actualizada", 'Paradero buses del SITP', ''],
[69, 5, "geonode:tabla_indicadores_actualizada", 'Paradero de transporte público', ''],
[70, 5, "geonode:tabla_indicadores_actualizada", 'Paradero de transporte intermunicipal', ''],
[71, 5, "geonode:tabla_indicadores_actualizada", 'Parques o zonas verdes', ''],
[72, 5, "geonode:tabla_indicadores_actualizada", 'Tienda o supermercado', ''],
[73, 5, "geonode:tabla_indicadores_actualizada", 'Droguería o farmacia', ''],
[74, 5, "geonode:tabla_indicadores_actualizada", 'Banco o cajero', ''],
[75, 5, "geonode:tabla_indicadores_actualizada", 'Centro médico', ''],

//[4, 8, 'Presupuestos participativos', 'Participatory budgets'],
[75, 8, "geonode:tabla_indicadores_actualizada", 'Estrategia de cuidado a cuidadoras, cuidadores y personas con discapacidad', ''],
]

/* 
var key_messages = [
    [1, ''],
    [2, ''],
    [3, ''],
    [4, ''],
    [5, ''],
    [6, ''],
    [7, ''],
    [8, ''],
    [9, ''],
    [10, ''],
    [11, ''],
    [12, ''],
    [13, ''],
    [14, ''],
    [15, ''],
    [16, ''],
    [17, ''],
    [18, ''],
    [19, ''],
    [20, ''],
    [21, ''],
    [22, ''],
    [23, ''],
    [24, ''],
] */