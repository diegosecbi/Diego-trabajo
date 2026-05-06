const SOLAPAS_ESPECIALES = [
  "CLIC",
  "EVENTOS",
  "FESTEJOS",
  "COCINA",
  "ETZ",
  "VISITAS ESCOLARES",
  "EXPLORANDO CABA",
  "TALLERES"
];

const SOLAPAS_EXCLUIDAS_SUPERVISION = [
  "DATOS",
  "USUARIOS",
  "Rol",
  "CATALOGO_ACTIVIDADES",
  "actividades_x_estacion",
  "actividades_x_estación",
  "profesores_estacion",
  "profesores_en_feriados",
  "CLIC",
  "ETZ",
  "EVENTOS",
  "FESTEJOS",
  "COCINA",
  "VISITAS ESCOLARES",
  "EXPLORANDO CABA"
];

const FUENTES_ESPECIALES_EXTERNAS = {
  "TALLERES": {
    spreadsheetId: "1QMzJPBMWo0qCaSTD5cw78BX_sleg-5h2u914cDGvo4g",
    sheetName: "2026",
    tipoResumen: "actividad_externa"
  }
};

const ESTACIONES_SALUDABLES_VISIBLES = [
  "Estaci\u00f3n Saludable Arist\u00f3bulo del Valle",
  "Estaci\u00f3n Saludable Indoamericano",
  "Estaci\u00f3n Saludable Lago de Palermo",
  "Estaci\u00f3n Saludable Manzana 66",
  "Estaci\u00f3n Saludable M\u00f3vil 1",
  "Estaci\u00f3n Saludable M\u00f3vil 2",
  "Estaci\u00f3n Saludable Parque Avellaneda",
  "Estaci\u00f3n Saludable Parque Centenario",
  "Estaci\u00f3n Saludable Parque Chacabuco",
  "Estaci\u00f3n Saludable Parque Los Andes",
  "Estaci\u00f3n Saludable Parque Patricios",
  "Estaci\u00f3n Saludable Parque Rivadavia",
  "Estaci\u00f3n Saludable Parque Saavedra",
  "Estaci\u00f3n Saludable Plaza Almagro",
  "Estaci\u00f3n Saludable Plaza de los Periodistas",
  "Estaci\u00f3n Saludable Plaza Dr. Bernardo A. Houssay",
  "Estaci\u00f3n Saludable Plaza Flores",
  "Estaci\u00f3n Saludable Plaza Martin Fierro",
  "Estaci\u00f3n Saludable Parque de la Ciudad",
  "Estaci\u00f3n Saludable Plaza Rub\u00e9n Dar\u00edo",
  "Estaci\u00f3n Saludable Sudam\u00e9rica",
  "Barrio Juan XXIII",
  "Estaci\u00f3n Saludable Rosedal",
  "Programa Estaciones Saludables",
  "Dep\u00f3sito Estaciones Saludables",
  "Eventos fuera ES",
  "Estaciones Saludables Clic"
];

const ALIAS_ESTACIONES_SALUDABLES_VISIBLES = {
  "Estaci\u00f3n Saludable Arist\u00f3bulo del Valle": ["Arist\u00f3bulo del Valle", "Aristobulo del Valle"],
  "Estaci\u00f3n Saludable Indoamericano": ["Indoamericano"],
  "Estaci\u00f3n Saludable Lago de Palermo": ["Lago de Palermo", "Lagos de Palermo", "Palermo"],
  "Estaci\u00f3n Saludable Manzana 66": ["Manzana 66", "Plaza Manzana 66"],
  "Estaci\u00f3n Saludable M\u00f3vil 1": ["M\u00f3vil 1", "Movil 1", "Movil1", "M\u00f3vil1", "Plaza Sudamerica", "Movil 1 Plaza Sudamerica", "M\u00f3vil 1 Plaza Sudamerica", "Plaza Echeverria", "Movil 1 Plaza Echeverria", "M\u00f3vil 1 Plaza Echeverria", "Belgrano", "Movil 1 Belgrano", "M\u00f3vil 1 Belgrano", "Parque Lezama", "Movil 1 Parque Lezama", "M\u00f3vil 1 Parque Lezama", "Plaza La Redonda", "Movil 1 Plaza La Redonda", "M\u00f3vil 1 Plaza La Redonda"],
  "Estaci\u00f3n Saludable M\u00f3vil 2": ["M\u00f3vil 2", "Movil 2", "Movil2", "M\u00f3vil2", "Corralon de Floresta", "Corral\u00f3n de Floresta", "Movil 2 Corralon de Floresta", "M\u00f3vil 2 Corralon de Floresta", "Plaza Democracia", "Movil 2 Plaza Democracia", "M\u00f3vil 2 Plaza Democracia", "Parque Ferroviario", "Movil 2 Parque Ferroviario", "M\u00f3vil 2 Parque Ferroviario", "Plaza Garay", "Movil 2 Plaza Garay", "M\u00f3vil 2 Plaza Garay", "Plaza Irlanda", "Movil 2 Plaza Irlanda", "M\u00f3vil 2 Plaza Irlanda"],
  "Estaci\u00f3n Saludable Parque Avellaneda": ["Parque Avellaneda", "Avellaneda"],
  "Estaci\u00f3n Saludable Parque Centenario": ["Parque Centenario", "Centenario"],
  "Estaci\u00f3n Saludable Parque Chacabuco": ["Parque Chacabuco", "Chacabuco"],
  "Estaci\u00f3n Saludable Parque Los Andes": ["Parque Los Andes", "Los Andes"],
  "Estaci\u00f3n Saludable Parque Patricios": ["Parque Patricios", "Patricios"],
  "Estaci\u00f3n Saludable Parque Rivadavia": ["Parque Rivadavia", "Rivadavia"],
  "Estaci\u00f3n Saludable Parque Saavedra": ["Parque Saavedra", "Saavedra"],
  "Estaci\u00f3n Saludable Plaza Almagro": ["Plaza Almagro", "Almagro"],
  "Estaci\u00f3n Saludable Plaza de los Periodistas": ["Plaza de los Periodistas", "Periodistas"],
  "Estaci\u00f3n Saludable Plaza Dr. Bernardo A. Houssay": ["Plaza Houssay", "Houssay", "Plaza Dr Bernardo A Houssay"],
  "Estaci\u00f3n Saludable Plaza Flores": ["Plaza Flores", "Flores"],
  "Estaci\u00f3n Saludable Plaza Martin Fierro": ["Plaza Martin Fierro", "Plaza Mart\u00edn Fierro", "Martin Fierro", "Mart\u00edn Fierro"],
  "Estaci\u00f3n Saludable Parque de la Ciudad": ["Parque de la Ciudad"],
  "Estaci\u00f3n Saludable Plaza Rub\u00e9n Dar\u00edo": ["Plaza Rub\u00e9n Dar\u00edo", "Plaza Ruben Dario", "Rub\u00e9n Dar\u00edo", "Ruben Dario"],
  "Estaci\u00f3n Saludable Sudam\u00e9rica": ["Sudam\u00e9rica", "Sudamerica"],
  "Barrio Juan XXIII": ["Juan XXIII", "Barrio Juan XXIII"],
  "Estaci\u00f3n Saludable Rosedal": ["Rosedal"],
  "Programa Estaciones Saludables": ["Programa Estaciones Saludables"],
  "Dep\u00f3sito Estaciones Saludables": ["Deposito Estaciones Saludables", "Dep\u00f3sito Estaciones Saludables"],
  "Eventos fuera ES": ["Eventos fuera ES"],
  "Estaciones Saludables Clic": ["Estaciones Saludables Clic", "Clic", "CLIC"]
};

const PERFILES_USUARIOS = {
  admin: [],
  gerencia: [],
  coordinacion: [],
  operativo: []
};

const CABECERAS_USUARIOS = [
  "EMAIL",
  "PERFIL",
  "ACTIVO",
  "OBSERVACIONES",
  "verDashboardCompleto",
  "verModosSupervision",
  "verBotonesEspeciales",
  "verExportarExcel",
  "verGenerarInformes",
  "verFiltrosAvanzados",
  "verPanelAdministracion",
  "modificarConfiguracion",
  "verDashboardGraficos"
];

const CABECERAS_CRONOGRAMA_NORMALIZADO = [
  "ESTACION",
  "DIA_SEMANA",
  "HORA_INICIO",
  "HORA_FIN",
  "ACTIVIDAD_PROGRAMADA",
  "PROFESOR_PROGRAMADO",
  "TIPO",
  "FUENTE_CRONOGRAMA",
  "OBSERVACIONES",
  "CLAVE_ESTACION",
  "CLAVE_ACTIVIDAD",
  "CLAVE_PROFESOR",
  "FECHA_PROGRAMADA",
  "CATEGORIA_ACTIVIDAD",
  "EXCLUIDA_CRUCE",
  "CODIGO_CRUCE"
];

const CABECERAS_CONTROL_CUMPLIMIENTO = [
  "FECHA_REAL",
  "DIA_SEMANA_REAL",
  "ESTACION_REAL",
  "ACTIVIDAD_REAL",
  "PROFESOR_REAL",
  "SECTOR_DE_CARGA",
  "ESTACION_PROGRAMADA",
  "DIA_SEMANA_PROGRAMADO",
  "HORA_INICIO_PROGRAMADA",
  "HORA_FIN_PROGRAMADA",
  "ACTIVIDAD_PROGRAMADA",
  "PROFESOR_PROGRAMADO",
  "RESULTADO_CRUCE",
  "DETALLE",
  "CLAVE_CRUCE",
  "CATEGORIA_REAL",
  "EXCLUIDA_REAL",
  "CODIGO_REAL",
  "CODIGO_PROGRAMADO"
];

const CABECERAS_TALLERES = [
  "DNI",
  "FECHA ACTIVIDAD",
  "ESTACION",
  "PROFESOR",
  "ACTIVIDAD",
  "SECTOR DE CARGA",
  "CODIGO_CRUCE"
];

const CABECERAS_DIAGNOSTICO_CRONOGRAMA = [
  "FILA_ORIGEN",
  "TIPO_DETECCION",
  "ESTACION_ACTIVA",
  "ESTACION_DETECTADA",
  "DIAS_DETECTADOS",
  "HORA_BASE",
  "ENTRADAS_GENERADAS",
  "COLUMNA",
  "VALOR_CELDA",
  "TEXTO_FILA"
];

const CABECERAS_AUDITORIA_CODIGOS_CRUCE = [
  "FECHA_PROGRAMADA",
  "ESTACION_PROGRAMADA",
  "ACTIVIDAD_PROGRAMADA",
  "CLAVE_ESTACION",
  "CLAVE_ACTIVIDAD",
  "CODIGO_CRONOGRAMA",
  "REGISTROS_TALLERES_CON_MISMO_CODIGO",
  "ESTADO",
  "MUESTRA_ESTACION_TALLERES",
  "MUESTRA_ACTIVIDAD_TALLERES"
];

const FUENTE_CRONOGRAMA = {
  spreadsheetId: "1Bqoe1OC10jfXZ5t0CAuF_oko3Y5vZnK5ad4O4Vck2tM",
  sheetId: 1547157225,
  nombreReferencia: "Grilla de clases Estaciones Saludables",
  rangoLectura: "A1:W567",
  anioObjetivo: 2026,
  mesObjetivo: 3
};

const FUENTE_TALLERES_DESDE_DATOS = {
  hojaDatos: "DATOS",
  rangoIds: "A54:L54",
  sheetName: "SEGUIMIENTO",
  rangoLectura: "B:J"
};

const DIAS_SEMANA_CRONOGRAMA = [
  "LUNES",
  "MARTES",
  "MIERCOLES",
  "JUEVES",
  "VIERNES",
  "SABADO",
  "DOMINGO"
];

const RANGO_EQUIVALENCIAS_ESTACIONES_DATOS = {
  hoja: "DATOS",
  rango: "O45:Q127"
};

const EQUIVALENCIAS_ESTACIONES = {
  "BARRANCAS DE BELGRANO": [
    "BARRANCAS",
    "BARRANCAS BELGRANO",
    "ESTACION SALUDABLE BARRANCAS DE BELGRANO"
  ],
  "PARQUE CENTENARIO": [
    "CENTENARIO",
    "ESTACION SALUDABLE PARQUE CENTENARIO"
  ],
  "PARQUE CHACABUCO": [
    "CHACABUCO",
    "ESTACION SALUDABLE PARQUE CHACABUCO"
  ],
  "PARQUE LOS ANDES": [
    "LOS ANDES",
    "ESTACION SALUDABLE PARQUE LOS ANDES"
  ],
  "PARQUE PATRICIOS": [
    "PATRICIOS",
    "ESTACION SALUDABLE PARQUE PATRICIOS"
  ],
  "PARQUE SAAVEDRA": [
    "SAAVEDRA",
    "ESTACION SALUDABLE PARQUE SAAVEDRA"
  ],
  "PLAZA BOEDO": [
    "BOEDO",
    "ESTACION SALUDABLE PLAZA BOEDO"
  ],
  "PLAZA IRLANDA": [
    "IRLANDA",
    "ESTACION SALUDABLE PLAZA IRLANDA"
  ],
  "PLAZA LAVALLE": [
    "LAVALLE",
    "ESTACION SALUDABLE PLAZA LAVALLE"
  ],
  "PLAZA VICENTE LOPEZ": [
    "VICENTE LOPEZ",
    "ESTACION SALUDABLE PLAZA VICENTE LOPEZ"
  ]
};

const ESTACIONES_SALUDABLES_OFICIALES = [
  "Estación Saludable Aristóbulo del Valle",
  "Estación Saludable Lago de Palermo",
  "Estación Saludable Manzana 66",
  "Estación Saludable Móvil 1",
  "Estación Saludable Móvil 2",
  "Estación Saludable Parque Avellaneda",
  "Estación Saludable Parque Centenario",
  "Estación Saludable Parque Chacabuco",
  "Estación Saludable Parque Los Andes",
  "Estación Saludable Parque Patricios",
  "Estación Saludable Parque Rivadavia",
  "Estación Saludable Parque Saavedra",
  "Estación Saludable Plaza Almagro",
  "Estación Saludable Plaza Dr. Bernardo A. Houssay",
  "Estación Saludable Plaza Flores",
  "Estación Saludable Plaza Martin Fierro",
  "Estación Saludable Parque de la Ciudad",
  "Estación Saludable Plaza Rubén Darío",
  "Estación Saludable Sudamérica",
  "Estación Saludable Rosedal",
  "Estaciones Saludables Clic"
];

const ALIAS_ESTACIONES_SALUDABLES = {
  "Estación Saludable Aristóbulo del Valle": ["Aristóbulo del Valle", "Aristobulo del Valle"],
  "Estación Saludable Lago de Palermo": ["Lago de Palermo", "Lagos de Palermo", "Palermo"],
  "Estación Saludable Manzana 66": ["Manzana 66", "Plaza Manzana 66"],
  "Estación Saludable Móvil 1": ["Móvil 1", "Movil 1"],
  "Estación Saludable Móvil 2": ["Móvil 2", "Movil 2"],
  "Estación Saludable Parque Avellaneda": ["Parque Avellaneda"],
  "Estación Saludable Parque Centenario": ["Parque Centenario", "Centenario"],
  "Estación Saludable Parque Chacabuco": ["Parque Chacabuco", "Chacabuco"],
  "Estación Saludable Parque Los Andes": ["Parque Los Andes", "Los Andes"],
  "Estación Saludable Parque Patricios": ["Parque Patricios", "Patricios"],
  "Estación Saludable Parque Rivadavia": ["Parque Rivadavia", "Rivadavia"],
  "Estación Saludable Parque Saavedra": ["Parque Saavedra", "Saavedra"],
  "Estación Saludable Plaza Almagro": ["Plaza Almagro", "Almagro"],
  "Estación Saludable Plaza Dr. Bernardo A. Houssay": ["Plaza Houssay", "Houssay", "Plaza Dr Bernardo A Houssay"],
  "Estación Saludable Plaza Flores": ["Plaza Flores", "Flores"],
  "Estación Saludable Plaza Martin Fierro": ["Plaza Martin Fierro", "Plaza Martín Fierro", "Martin Fierro", "Martín Fierro"],
  "Estación Saludable Parque de la Ciudad": ["Parque de la Ciudad"],
  "Estación Saludable Plaza Rubén Darío": ["Plaza Rubén Darío", "Plaza Ruben Dario", "Rubén Darío", "Ruben Dario"],
  "Estación Saludable Sudamérica": ["Sudamérica", "Sudamerica"],
  "Estación Saludable Rosedal": ["Rosedal"],
  "Estaciones Saludables Clic": ["Estaciones Saludables Clic", "Clic", "CLIC"]
};

const ACTIVIDADES_CATALOGO_TEXTO = `ABS ( Trabajo de músculos abdominales)
ABS ( Trabajo de músculos abdominales) 2
Abuelos contra el Bullying
Aconcionamiento físico integral
Aconcionamiento físico integral 2
Actividad al paso
Actividad Fisica integral
Actividad Fisica integral 2
Actividades en otras instituciones
Actividades Recreativas (Ajedrez Didáctico, Burako,etc)
Actividad Recreativa Deportiva
Actividades Recreativas (Ajedrez Didáctico, Burako,etc) 2
Aerobica
Aerobica 2
Aerobox ES Clic
Armado de instrumentos
Armado de instrumentos VAC
Arte
Arte 2
Arte Cognitivo
Arte Cognitivo 2
Arte sustentable
Arte sustentable 2
Arte Sustentable, reciclaje y naturaleza
Asesoria actividad fisica Clic
Asesoria lactancia
Asesoria nutricion Clic
Bachata
Bachata 2
Baile con GAP (Trabajo de glúteos, abdomen y piernas)
Bienestar organizacional
Bordado
Bordado 2
Calistenia
Calistenia 2
Caminata saludable
Caminata saludable 2
Caricaturas
Caricaturas 2
Caricaturas VAC
Ceramica
Ceramica 2
Charla Enfermeria
Charla Enfermeria 2
Charla Nutricion
Charla Nutricion 2
Charla Otros
Charla Otros 2
Charla vinculacion VAC
Clase de Cocina Clic
Clases de Cocina
Coaching Presencial
Correctivo postural Clic
Cumpleaños
Devolución de Libros
Devolución de Libros 2
Dibujo y Pintura
Dibujo y Pintura 2
Egresaditos
En tus zapatos
Encuentro con vecinos
Entrenamiento físico
Entrenamiento físico 2
Entrenamiento Funcional
Entrenamiento Funcional 2
Escritura creativa VAC
Espacio de juegos
Espacio de juegos 2
Espacio de juegos VAC
Espacio deportivo
Espacio deportivo 2
Eventos
Festivales
Folklore
Folklore 2
GAP (Trabajo de glúteos, abdomen y piernas)
Gimnasia
Gimnasia 2
Grupos de Chat Clic
Hit y Funcional ES Clic
Inclusión Digital y Redes Sociales
Inclusión Digital y Redes Sociales 2
Localizada
Localizada 2
Mix Training ES Clic
Localizada Clic
Localizada y Estiramiento
Manualidades en familia
Mercadito
Mindfulness/Meditación
Mindfulness/Meditación 2
Minichef VI
MSETB (Mas servicios en tu Barrio)
Newcom (Voley adaptado)
Newcom (Voley adaptado) 2
Pasaporte VI
Pilates
Pilates 2
Prestamo de Libros
Prestamo de Libros 2
Prevención de Osteopenia y Ostioporosis
Prevención de Osteopenia y Ostioporosis 2
Reeducación Postural
Reeducación Postural 2
Ritmos
Ritmos 2
Salsa
Salsa 2
Show de Magia
Show de Magia VAC
Stretching/Estiramiento
Stretching/Estiramiento 2
Tai Chi
Tai Chi 2
Taller Cognitivo ES Clic
Taller Cognitivo I
Taller Cognitivo I 2
Taller Cognitivo II
Taller Cognitivo II 2
Taller con Pelotas
Taller con Pelotas 2
Taller de alimentación saludable
Taller de burbujas
Taller de Circo
Taller de Comunicación No Verbal Clic
Taller de Escritura
Taller de Escritura 2
huerta
Taller de Escritura Clic
Taller de Huerta
Taller de huerta Clic
Taller de huerta VAC
Taller de Mandala
Taller de Mandala 2
Taller de Memoria
Taller de percusion
Taller de Truco
Taller de Truco 2
Taller de vinculación
Taller Literario
Taller Literario 2
Talleres de Cocina
Talleres de Cocina Clic
Talleres de Cocina VAC
Talleres y charlas Clic
Tango
Tango 2
Tardes Mágicas VI
Vacaciones de invierno
Visitas Escolares
Visitas Escolares - Actividad física
Visitas Escolares - Experimental y armado de juegos
Visitas Escolares - Naturaleza y medio ambiente
Visitas Escolares - Vínculos y hábitos positivos
Yoga
Yoga 2
Yoga dinámico
Yoga dinámico 2
Yoga ES Clic
Yoga Restaurativo
Yoga suave
Yoga suave 2
Zumba
Eje Mensual
Bienestar Financiero
Juegoteca
Pre Deportivo
Eje Juego de Mesa
Futbol
Mix Training
Taller de Nutricion`;

const ACTIVIDADES_CATEGORIAS_TEXTO = `Actividad Fisica
Actividad Fisica
Bienestar
Actividad Fisica
Actividad Fisica
Bienestar
Actividad Fisica
Actividad Fisica
Eventos
Cognitivo/cultural
Actividad Fisica
Cognitivo/cultural
Actividad Fisica
Actividad Fisica
Estaciones Saludables CLIC
Cognitivo/cultural
Eventos
Cognitivo/cultural
Cognitivo/cultural
Cognitivo/cultural
Cognitivo/cultural
Cognitivo/cultural
Cognitivo/cultural
Cognitivo/cultural
Estaciones Saludables CLIC
Bienestar
Estaciones Saludables CLIC
Actividad Fisica
Actividad Fisica
Actividad Fisica
Eventos
Cognitivo/cultural
Cognitivo/cultural
Actividad Fisica
Actividad Fisica
Actividad Fisica
Actividad Fisica
Cognitivo/cultural
Cognitivo/cultural
Eventos
Cognitivo/cultural
Cognitivo/cultural
Bienestar
Bienestar
Bienestar
Bienestar
Bienestar
Bienestar
Eventos
Estaciones Saludables CLIC
Talleres de Cocina
Bienestar
Estaciones Saludables CLIC
Festejos Saludables
Cognitivo/cultural
Cognitivo/cultural
Cognitivo/cultural
Cognitivo/cultural
Festejos Saludables
Bienestar
Eventos
Actividad Fisica
Actividad Fisica
Actividad Fisica
Actividad Fisica
Eventos
Cognitivo/cultural
Cognitivo/cultural
Eventos
Actividad Fisica
Actividad Fisica
Eventos
Eventos
Actividad Fisica
Actividad Fisica
Actividad Fisica
Actividad Fisica
Actividad Fisica
Estaciones Saludables CLIC
Estaciones Saludables CLIC
Cognitivo/cultural
Cognitivo/cultural
Actividad Fisica
Actividad Fisica
Estaciones Saludables CLIC
Estaciones Saludables CLIC
Actividad Fisica
Cognitivo/cultural
Cognitivo/cultural
Bienestar
Bienestar
Eventos
Eventos
Actividad Fisica
Actividad Fisica
Eventos
Actividad Fisica
Actividad Fisica
Cognitivo/cultural
Cognitivo/cultural
Actividad Fisica
Actividad Fisica
Actividad Fisica
Actividad Fisica
Actividad Fisica
Actividad Fisica
Actividad Fisica
Actividad Fisica
Eventos
Eventos
Actividad Fisica
Actividad Fisica
Bienestar
Bienestar
Estaciones Saludables CLIC
Cognitivo/cultural
Cognitivo/cultural
Cognitivo/cultural
Cognitivo/cultural
Actividad Fisica
Actividad Fisica
Bienestar
Cognitivo/cultural
Cognitivo/cultural
Estaciones Saludables CLIC
Cognitivo/cultural
Cognitivo/cultural
Cognitivo/cultural
Estaciones Saludables CLIC
Cognitivo/cultural
Estaciones Saludables CLIC
Eventos
Cognitivo/cultural
Cognitivo/cultural
Cognitivo/cultural
Cognitivo/cultural
Cognitivo/cultural
Cognitivo/cultural
Bienestar
Cognitivo/cultural
Cognitivo/cultural
Talleres de Cocina
Estaciones Saludables CLIC
Eventos
Estaciones Saludables CLIC
Actividad Fisica
Actividad Fisica
Eventos
Eventos
Bienestar
Bienestar
Bienestar
Bienestar
Bienestar
Bienestar
Bienestar
Bienestar
Bienestar
Estaciones Saludables CLIC
Bienestar
Bienestar
Bienestar
Actividad Fisica
Bienestar
Bienestar
Cognitivo/cultural
Actividad Fisica
Cognitivo/cultural
Actividad Fisica
Actividad Fisica
Bienestar`;

const CATEGORIAS_EXCLUIDAS_CRONOGRAMA = [
  "ESTACIONES SALUDABLES CLIC",
  "EVENTOS",
  "FESTEJOS SALUDABLES",
  "TALLERES DE COCINA"
];

const PATRONES_EXCLUSION_CRONOGRAMA = [
  "CLIC",
  "EVENTO",
  "EVENTOS",
  "FESTEJ",
  "CUMPLE",
  "COCINA",
  "ETZ",
  "EN TUS ZAPATOS",
  "EXPLORANDO CABA",
  "VISITAS ESCOLARES",
  "VACACIONES DE INVIERNO"
];

const PROFESORES_BASE_TEXTO = `DANIELA SOL NAVARRO
DIEGO PACHECO
DANIEL ALEJANDRO ROMERO
ROMILDA SOLEDAD PEDROZO
CANDELA RUIZ DEZA
CUESTA GABRIEL MARIANO SEBASTIAN
CARLOS GUSTAVO TORALES
RODRIGO GABRIEL GONZALEZ
NICOLÁS VARA
MARIANO VOUILLAT
MARIEL CHUTCHURRU
CECILIA SUAREZ
ELENA BEATRIZ DEVOTO SZUMOWICZ
EQUIPO ESTACIÓN
LEGUIZA FLORENCIA AILEN
MATIAS EZEQUIEL CHEDUFAU
ROSALIA MARTIN
GAGLIOTE PAULA NATALIA
JORGE ENRIQUE QUENAYA CORNEJO
MILAGROS MOLERO
MILETO FACUNDO NICOLAS
ESTEFANIA VAQUER FERREYRA
LAURA GUZMAN
LUIS ALEJANDRO VILLEGAS LANDAETA
LONGO JULIAN ROBERTO
MARIA ALEJANDRA ALVAREZ
PAOLA ROMINA PASTORINI
MURIEL CATARINO
JAVIER LAZZARINI
MARIA DE LOURDES D'URSO
HERNAN LOPEZ
MARIELA GURBANOV
DAIANA SILVINA ALCARAZ
MICAELA GONZALES
LEANDRO DANIEL LEZCANO
AGOSTINA KARIN SOSA
GALIZIA ROXANA GRACIELA
LUCIA GRANATELLI
MARTIN ALEJANDRO ARMAND UGON
RUBEN DARIO VALLOZZI
NICOLÁS NAHUEL GARCÍA
ESTEFANIA VAQUER TEMPLETE
CLAUDIA ALEJANDRA GUAGLIARELO
AGOSTINA DALBO
ARIEL GARCIA
IGNACIO OLIVARES
NICOLAS MARTIN OLEGO
DANIELA BIANCHI
CRISTIAN PATTINI
ROXANA GALIZIA
CRISTIAN ROSSI
BIBLIOTECA ESTACION`;

let cacheEquivalenciasEstacionesDatos_ = null;
let cacheCatalogoActividades_ = null;
let cacheCatalogoActividadesLista_ = null;
let cacheRosetaActividades_ = null;
let cacheProfesoresBase_ = null;
let cacheEquivalenciasEstacionesCombinadas_ = null;
let cacheMapaEstacionesVisibles_ = null;

function doGet() {
  return HtmlService.createHtmlOutputFromFile("index");
}

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  
  ui.createMenu("Administracion")
    .addItem("Preparar Hoja De Usuarios", "prepararHojaUsuarios")
    .addItem("🔍 Diagnosticar Mi Acceso", "diagnosticarMiAcceso")
    .addSeparator()
    .addItem("📊 Generar Dashboard de Gráficos", "generarDashboardGerencial")
    .addSeparator()
    .addItem("⚙️ Configurar OpenRouter (Claude)", "configurarOpenRouter")
    .addToUi();
    
  ui.createMenu("Talleres")
    .addItem("🔄 Sincronizar Datos Ahora", "sincronizarTalleresDesdeSeguimiento")
    .addItem("⏰ Activar Sincronizacion Automatica (2x/dia)", "instalarGatillosSincronizacionTalleres")
    .addSeparator()
    .addItem("📅 Completar Columna SADOFE/SEMANA Ahora", "actualizarColumnaSadofe")
    .addItem("⏰ Activar Llenado Auto SADOFE (2x/dia)", "instalarGatilloSadofe")
    .addToUi();
}

function prepararHojaUsuarios() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const hoja = asegurarSolapaEstructural_(
    ss,
    "USUARIOS",
    CABECERAS_USUARIOS,
    "Administracion de accesos. Completa EMAIL, PERFIL y ACTIVO. Las columnas de permisos (SI/NO) son opcionales para sobreescribir el perfil."
  );

  if (hoja.getLastRow() <= 1) {
    hoja.getRange(2, 1, 3, 4).setValues([
      ["admin@dominio.com", "admin", "SI", "Ejemplo"],
      ["coordinacion@dominio.com", "coordinacion", "SI", "Ejemplo"],
      ["operativo@dominio.com", "operativo", "SI", "Ejemplo"]
    ]);
  }

  // Validación para Perfil
  const filasValidacion = Math.max(100, hoja.getLastRow() + 20);
  const totalFilas = Math.min(filasValidacion, hoja.getMaxRows() - 1);

  hoja.getRange(2, 2, totalFilas, 1).setDataValidation(
    SpreadsheetApp.newDataValidation()
      .requireValueInList(["admin", "gerencia", "coordinacion", "operativo"], true)
      .setAllowInvalid(false)
      .build()
  );

  // Validación para Activo y todos los permisos (SI/NO)
  const rangoSino = hoja.getRange(2, 3, totalFilas, 1); // Columna ACTIVO
  const rangoPermisos = hoja.getRange(2, 5, totalFilas, PERMISOS_KEYS.length); // Columnas de permisos
  
  const validacionSino = SpreadsheetApp.newDataValidation()
    .requireValueInList(["SI", "NO"], true)
    .setAllowInvalid(false)
    .build();

  rangoSino.setDataValidation(validacionSino);
  rangoPermisos.setDataValidation(validacionSino);

  hoja.autoResizeColumns(1, CABECERAS_USUARIOS.length);
  SpreadsheetApp.flush();

  SpreadsheetApp.getUi().alert(
    "La hoja USUARIOS ha sido actualizada. Ahora puedes asignar permisos individuales (SI/NO) en las columnas de la E a la M para sobreescribir el perfil base."
  );
}

function prepararSolapasControlCronograma() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  prepararSolapaEstructural_(
    ss,
    "CRONOGRAMA_NORMALIZADO",
    CABECERAS_CRONOGRAMA_NORMALIZADO,
    "Una fila por clase programada del cronograma, lista para normalizar y luego cruzar con TALLERES."
  );

  prepararSolapaEstructural_(
    ss,
    "CONTROL_CUMPLIMIENTO",
    CABECERAS_CONTROL_CUMPLIMIENTO,
    "Cruce entre TALLERES y CRONOGRAMA_NORMALIZADO para validar cumplimiento, diferencias y faltantes."
  );

  SpreadsheetApp.getUi().alert(
    "Se prepararon las solapas CRONOGRAMA_NORMALIZADO y CONTROL_CUMPLIMIENTO."
  );
}

function instalarGatillosSincronizacionTalleres() {
  const funcionSincronizacion = "sincronizarTalleresDesdeSeguimiento";
  
  const triggers = ScriptApp.getProjectTriggers();
  for (let i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === funcionSincronizacion) {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }
  
  ScriptApp.newTrigger(funcionSincronizacion)
    .timeBased()
    .everyHours(12)
    .create();
    
  SpreadsheetApp.getUi().alert("✅ ¡Listo! La sincronizacion de Talleres se ejecutara automaticamente cada 12 horas.");
}

function instalarGatilloSadofe() {
  const nombreFuncion = "ejecutarActualizacionSadofeProgramada";
  
  const triggers = ScriptApp.getProjectTriggers();
  for (let i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === nombreFuncion) {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }
  
  ScriptApp.newTrigger(nombreFuncion)
    .timeBased()
    .everyHours(12)
    .create();
    
  SpreadsheetApp.getUi().alert("✅ ¡Listo! La columna SADOFE se rellenará automáticamente cada 12 horas.");
}

function ejecutarActualizacionSadofeProgramada() {
  actualizarColumnaSadofe(true);
}

function sincronizarTalleresDesdeSeguimiento() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const origenes = obtenerFuentesTalleresDesdeDatos_(ss);

  if (!origenes.length) {
    throw new Error("No se encontraron IDs o URLs de seguimiento en DATOS!A54:L54.");
  }

  let hojaDestino = ss.getSheetByName("TALLERES");
  if (!hojaDestino) {
    hojaDestino = ss.insertSheet("TALLERES");
  }

  let filasOrigen = [];

  origenes.forEach(function(origen) {
    try {
      const libroExterno = SpreadsheetApp.openById(origen.spreadsheetId);
      const hojaOrigen = libroExterno.getSheetByName(FUENTE_TALLERES_DESDE_DATOS.sheetName);
      if (!hojaOrigen) return;

      const ultimaFilaOrigen = hojaOrigen.getLastRow();
      if (ultimaFilaOrigen < 2) return;

      const datosFuente = hojaOrigen.getRange(2, 2, ultimaFilaOrigen - 1, 9).getValues();
      datosFuente.forEach(function(fila) {
        if (!fila || !fila.length) return;

        const fechaValor = fila[0] || "";
        if (!fechaValor) return;

        filasOrigen.push({
          fechaValor: fechaValor,
          estacion: limpiarTexto_(fila[1]),
          profesor: limpiarTexto_(fila[2]),
          actividad: limpiarTexto_(fila[3]),
          dni: fila[5] || "",
          sector: limpiarTexto_(fila[8]),
          fuente: origen.spreadsheetId
        });
      });
    } catch (error) {}
  });

  const filas = filasOrigen.map(function(fila) {
    const dni = fila.dni || "";
    const fechaValor = fila.fechaValor || "";
    const fechaTexto = normalizarFechaTalleresControl_(fechaValor);
    const estacion = fila.estacion || "";
    const profesor = fila.profesor || "";
    const actividad = fila.actividad || "";
    const sector = fila.sector || "";
    const codigo = construirCodigoComparacionVisible_(fechaTexto, estacion, actividad);

    return [
      dni,
      fechaValor,
      estacion,
      profesor,
      actividad,
      sector,
      codigo
    ];
  }).filter(function(fila) {
    return fila[1] && fila[2] && fila[4];
  });

  hojaDestino.getRange(1, 1, 1, CABECERAS_TALLERES.length).setValues([CABECERAS_TALLERES]);

  const ultimaFilaDestino = hojaDestino.getLastRow();
  if (ultimaFilaDestino > 1) {
    hojaDestino.getRange(2, 1, ultimaFilaDestino - 1, CABECERAS_TALLERES.length).clearContent();
  }

  if (filas.length > 0) {
    hojaDestino.getRange(2, 1, filas.length, CABECERAS_TALLERES.length).setValues(filas);
  }

  if (filas.length) {
    hojaDestino.getRange(2, 2, filas.length, 1).setNumberFormat("dd/MM/yyyy");
  }

  hojaDestino.setFrozenRows(1);
  hojaDestino.getRange(1, 1, 1, CABECERAS_TALLERES.length)
    .setBackground("#153244")
    .setFontColor("#ffffff")
    .setFontWeight("bold");

  SpreadsheetApp.getUi().alert(
    "TALLERES sincronizada. Filas copiadas: " + filas.length
  );
}

function obtenerFuentesTalleresDesdeDatos_(ss) {
  const hoja = ss.getSheetByName(FUENTE_TALLERES_DESDE_DATOS.hojaDatos);
  if (!hoja) {
    return [];
  }

  const valores = hoja.getRange(FUENTE_TALLERES_DESDE_DATOS.rangoIds).getDisplayValues();
  const celdas = (valores[0] || []).map(function(valor) {
    return limpiarTexto_(valor);
  }).filter(Boolean);
  const vistos = {};
  const salida = [];

  celdas.forEach(function(valor) {
    const spreadsheetId = extraerSpreadsheetIdDesdeTexto_(valor);
    if (!spreadsheetId || vistos[spreadsheetId]) {
      return;
    }

    vistos[spreadsheetId] = true;
    salida.push({
      spreadsheetId: spreadsheetId
    });
  });

  return salida;
}

function extraerSpreadsheetIdDesdeTexto_(texto) {
  const limpio = limpiarTexto_(texto || "");
  if (!limpio) return "";

  const matchUrl = limpio.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/i);
  if (matchUrl && matchUrl[1]) {
    return matchUrl[1];
  }

  const matchId = limpio.match(/^[a-zA-Z0-9-_]{20,}$/);
  if (matchId) {
    return limpio;
  }

  return "";
}

function prepararSolapaEstructural_(ss, nombreSolapa, cabeceras, descripcion) {
  let hoja = ss.getSheetByName(nombreSolapa);
  let creada = false;

  if (!hoja) {
    hoja = ss.insertSheet(nombreSolapa);
    creada = true;
  }

  const ultimaFila = hoja.getLastRow();
  const ultimaColumna = hoja.getLastColumn();

  if (ultimaFila > 1 && ultimaColumna > 0) {
    hoja.getRange(2, 1, ultimaFila - 1, Math.max(cabeceras.length, ultimaColumna)).clearContent();
  }

  hoja.getRange(1, 1, 1, cabeceras.length).setValues([cabeceras]);
  hoja.setFrozenRows(1);
  hoja.getRange(1, 1, 1, cabeceras.length)
    .setBackground("#153244")
    .setFontColor("#ffffff")
    .setFontWeight("bold");

  if (descripcion && (creada || !hoja.getRange(1, 1).getNote())) {
    hoja.getRange(1, 1).setNote(descripcion);
  }
}

function asegurarSolapaEstructural_(ss, nombreSolapa, cabeceras, descripcion) {
  let hoja = ss.getSheetByName(nombreSolapa);
  let creada = false;

  if (!hoja) {
    hoja = ss.insertSheet(nombreSolapa);
    creada = true;
  }

  const rangoCabecera = hoja.getRange(1, 1, 1, cabeceras.length);
  const cabeceraActual = rangoCabecera.getDisplayValues()[0];

  let necesitaCabecera = hoja.getLastRow() === 0;
  if (!necesitaCabecera) {
    for (let i = 0; i < cabeceras.length; i++) {
      if (limpiarTexto_(cabeceraActual[i]) !== limpiarTexto_(cabeceras[i])) {
        necesitaCabecera = true;
        break;
      }
    }
  }

  if (necesitaCabecera) {
    rangoCabecera.setValues([cabeceras]);
  }

  hoja.setFrozenRows(1);
  rangoCabecera
    .setBackground("#153244")
    .setFontColor("#ffffff")
    .setFontWeight("bold");

  if (descripcion && (creada || !hoja.getRange(1, 1).getNote())) {
    hoja.getRange(1, 1).setNote(descripcion);
  }

  return hoja;
}

function limpiarYEscribirBloqueEnHoja_(hoja, cabeceras, filas) {
  const ultimaFila = hoja.getLastRow();
  const ultimaColumna = hoja.getLastColumn();
  const ancho = cabeceras.length;

  hoja.getRange(1, 1, 1, ancho).setValues([cabeceras]);

  if (ultimaFila > 1) {
    hoja.getRange(2, 1, ultimaFila - 1, Math.max(ancho, ultimaColumna)).clearContent();
  }

  if (!filas || !filas.length) {
    return;
  }

  const lote = 200;
  for (let i = 0; i < filas.length; i += lote) {
    const bloque = filas.slice(i, i + lote);
    hoja.getRange(2 + i, 1, bloque.length, ancho).setValues(bloque);
  }
}

function importarCronogramaNormalizado() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  prepararSolapasControlCronogramaSilencioso_(ss);

  const hojaDestino = ss.getSheetByName("CRONOGRAMA_NORMALIZADO");
  hojaDestino.getRange(1, 1, 1, CABECERAS_CRONOGRAMA_NORMALIZADO.length)
    .setValues([CABECERAS_CRONOGRAMA_NORMALIZADO]);

  const hojaOrigen = obtenerHojaCronogramaExterna_();
  const datos = leerDatosCronogramaExterno_(hojaOrigen);
  const filas = construirFilasCronogramaNormalizado_(datos);

  limpiarYEscribirBloqueEnHoja_(hojaDestino, CABECERAS_CRONOGRAMA_NORMALIZADO, filas);

  hojaDestino.setFrozenRows(1);
  hojaDestino.getRange(1, 1, 1, CABECERAS_CRONOGRAMA_NORMALIZADO.length)
    .setBackground("#153244")
    .setFontColor("#ffffff")
    .setFontWeight("bold");

  SpreadsheetApp.getUi().alert(
    "Cronograma importado. Filas generadas: " + filas.length
  );
}

function diagnosticarImportacionCronograma() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const hojaOrigen = obtenerHojaCronogramaExterna_();
  const datos = leerDatosCronogramaExterno_(hojaOrigen);
  const diagnostico = construirDiagnosticoCronograma_(datos);
  const hojaDestino = asegurarSolapaEstructural_(
    ss,
    "DIAGNOSTICO_CRONOGRAMA",
    CABECERAS_DIAGNOSTICO_CRONOGRAMA,
    "Diagnostico del parser del cronograma para identificar filas detectadas como estaciones, encabezados y entradas."
  );

  limpiarYEscribirBloqueEnHoja_(hojaDestino, CABECERAS_DIAGNOSTICO_CRONOGRAMA, diagnostico);

  hojaDestino.setFrozenRows(1);
  hojaDestino.getRange(1, 1, 1, CABECERAS_DIAGNOSTICO_CRONOGRAMA.length)
    .setBackground("#153244")
    .setFontColor("#ffffff")
    .setFontWeight("bold");
  SpreadsheetApp.getUi().alert(
    "Diagnostico generado. Filas analizadas: " + diagnostico.length
  );
}

function auditarCodigosCruceCronograma() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const hojaCronograma = ss.getSheetByName("CRONOGRAMA_NORMALIZADO");

  if (!hojaCronograma) {
    throw new Error("No existe la solapa CRONOGRAMA_NORMALIZADO.");
  }

  const cronograma = leerCronogramaNormalizado_(hojaCronograma).filter(function(item) {
    return !item.excluidaCruce;
  });
  const talleres = leerRegistrosTalleresControl_(ss).filter(function(item) {
    return !item.excluidaCruce;
  });
  const hojaDestino = asegurarSolapaEstructural_(
    ss,
    "AUDITORIA_CODIGOS_CRUCE",
    CABECERAS_AUDITORIA_CODIGOS_CRUCE,
    "Verificacion del codigo final de cruce: compara cada clase programada contra los codigos detectados en TALLERES."
  );
  const filas = construirFilasAuditoriaCodigosCruce_(cronograma, talleres);

  limpiarYEscribirBloqueEnHoja_(hojaDestino, CABECERAS_AUDITORIA_CODIGOS_CRUCE, filas);

  hojaDestino.setFrozenRows(1);
  hojaDestino.getRange(1, 1, 1, CABECERAS_AUDITORIA_CODIGOS_CRUCE.length)
    .setBackground("#153244")
    .setFontColor("#ffffff")
    .setFontWeight("bold");
  const coincidencias = filas.filter(function(fila) {
    return fila[7] === "COINCIDE";
  }).length;

  SpreadsheetApp.getUi().alert(
    "Auditoria generada. Codigos programados: " + filas.length +
    " | Coinciden con TALLERES: " + coincidencias
  );
}

function leerDatosCronogramaExterno_(hoja) {
  if (FUENTE_CRONOGRAMA.rangoLectura) {
    return hoja.getRange(FUENTE_CRONOGRAMA.rangoLectura).getDisplayValues();
  }

  const ultimaFila = hoja.getLastRow();
  const ultimaColumna = hoja.getLastColumn();

  if (!ultimaFila || !ultimaColumna) {
    return [];
  }

  return hoja.getRange(1, 1, ultimaFila, ultimaColumna).getDisplayValues();
}

function prepararSolapasControlCronogramaSilencioso_(ss) {
  asegurarSolapaEstructural_(
    ss,
    "CRONOGRAMA_NORMALIZADO",
    CABECERAS_CRONOGRAMA_NORMALIZADO,
    "Una fila por clase programada del cronograma, lista para normalizar y luego cruzar con TALLERES."
  );

  asegurarSolapaEstructural_(
    ss,
    "CONTROL_CUMPLIMIENTO",
    CABECERAS_CONTROL_CUMPLIMIENTO,
    "Cruce entre TALLERES y CRONOGRAMA_NORMALIZADO para validar cumplimiento, diferencias y faltantes."
  );
}

function obtenerHojaCronogramaExterna_() {
  const libro = SpreadsheetApp.openById(FUENTE_CRONOGRAMA.spreadsheetId);
  const hojas = libro.getSheets();

  for (let i = 0; i < hojas.length; i++) {
    if (hojas[i].getSheetId && hojas[i].getSheetId() === FUENTE_CRONOGRAMA.sheetId) {
      return hojas[i];
    }
  }

  throw new Error("No se encontro la hoja de cronograma configurada.");
}

function generarControlCumplimiento() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  prepararSolapasControlCronogramaSilencioso_(ss);

  const hojaDestino = ss.getSheetByName("CONTROL_CUMPLIMIENTO");
  const hojaCronograma = ss.getSheetByName("CRONOGRAMA_NORMALIZADO");

  if (!hojaCronograma) {
    throw new Error("No existe la solapa CRONOGRAMA_NORMALIZADO.");
  }

  const cronograma = leerCronogramaNormalizado_(hojaCronograma);
  const talleres = leerRegistrosTalleresControl_(ss);
  const filas = construirFilasControlCumplimiento_(talleres, cronograma);

  limpiarYEscribirBloqueEnHoja_(hojaDestino, CABECERAS_CONTROL_CUMPLIMIENTO, filas);

  hojaDestino.setFrozenRows(1);
  hojaDestino.getRange(1, 1, 1, CABECERAS_CONTROL_CUMPLIMIENTO.length)
    .setBackground("#153244")
    .setFontColor("#ffffff")
    .setFontWeight("bold");

  SpreadsheetApp.getUi().alert(
    "Control generado. Filas cargadas: " + filas.length
  );
}

function leerCronogramaNormalizado_(hoja) {
  const ultimaFila = hoja.getLastRow();
  const ultimaColumna = hoja.getLastColumn();

  if (ultimaFila < 2 || ultimaColumna < CABECERAS_CRONOGRAMA_NORMALIZADO.length) {
    return [];
  }

  const datos = hoja.getRange(2, 1, ultimaFila - 1, CABECERAS_CRONOGRAMA_NORMALIZADO.length).getDisplayValues();

  return datos.map(function(fila) {
    const estacionProgramada = limpiarTexto_(fila[0]);
    return {
      estacionProgramada: estacionProgramada,
      diaSemanaProgramado: limpiarTexto_(fila[1]).toUpperCase(),
      horaInicioProgramada: limpiarTexto_(fila[2]),
      horaFinProgramada: limpiarTexto_(fila[3]),
      actividadProgramada: limpiarTexto_(fila[4]),
      profesorProgramado: limpiarTexto_(fila[5]),
      claveEstacion: limpiarTexto_(fila[9]),
      claveEstacionCanonica: limpiarTexto_(fila[9]) || obtenerClaveEstacionCanonica_(estacionProgramada),
      claveActividad: limpiarTexto_(fila[10]),
      claveProfesor: limpiarTexto_(fila[11]),
      fechaProgramada: normalizarFechaCarga_(fila[12]),
      categoriaActividad: limpiarTexto_(fila[13]),
      excluidaCruce: limpiarTexto_(fila[14]) === "SI",
      codigoCruce: limpiarTexto_(fila[15])
    };
  }).filter(function(item) {
    return item.estacionProgramada && item.actividadProgramada && item.fechaProgramada;
  });
}

function leerRegistrosTalleresControl_(ss) {
  const hojaLocal = ss.getSheetByName("TALLERES");

  if (hojaLocal) {
    return leerRegistrosTalleresDesdeHoja_(hojaLocal);
  }

  const fuente = FUENTES_ESPECIALES_EXTERNAS["TALLERES"];
  if (!fuente) {
    throw new Error("No hay fuente configurada para TALLERES.");
  }

  const libroExterno = SpreadsheetApp.openById(fuente.spreadsheetId);
  const hojaExterna = libroExterno.getSheetByName(fuente.sheetName);
  if (!hojaExterna) {
    throw new Error("No se encontro la hoja de TALLERES.");
  }

  return leerRegistrosTalleresDesdeHoja_(hojaExterna);
}

function leerRegistrosTalleresDesdeHoja_(hoja) {
  const ultimaFila = hoja.getLastRow();
  const ultimaColumna = hoja.getLastColumn();

  if (ultimaFila < 2 || ultimaColumna < 6) {
    return [];
  }

  const ancho = Math.min(Math.max(7, 6), ultimaColumna);
  const datos = hoja.getRange(2, 1, ultimaFila - 1, ancho).getValues();

  return datos.map(function(fila) {
    const fecha = normalizarFechaTalleresControl_(fila[1]);
    const diaSemana = obtenerDiaSemanaDesdeFechaTexto_(fecha);
    const estacion = limpiarTexto_(fila[2]);
    const profesor = limpiarTexto_(fila[3]);
    const actividadVisible = limpiarTexto_(fila[4]);
    const sector = limpiarTexto_(fila[5]);
    const codigoHoja = limpiarTexto_(fila[6]);
    const actividadTextoExclusion = limpiarTexto_(fila[4]);
    const actividadNormalizada = normalizarTexto_(actividadTextoExclusion).toUpperCase();
    const sectorNormalizado = normalizarTexto_(sector).toUpperCase();
    const excluidaCruce = PATRONES_EXCLUSION_CRONOGRAMA.some(function(patron) {
      const patronNormalizado = normalizarTexto_(patron).toUpperCase();
      return actividadNormalizada.indexOf(patronNormalizado) !== -1 || sectorNormalizado.indexOf(patronNormalizado) !== -1;
    });

    return {
      fechaReal: fecha,
      diaSemanaReal: diaSemana,
      estacionReal: estacion,
      actividadReal: actividadVisible,
      profesorReal: profesor,
      sectorDeCarga: sector,
      claveEstacion: "",
      claveEstacionCanonica: "",
      claveActividad: "",
      claveProfesor: normalizarTexto_(profesor).toUpperCase(),
      categoriaActividad: "",
      excluidaCruce: excluidaCruce,
      codigoCruce: codigoHoja || construirCodigoComparacionVisible_(fecha, estacion, actividadVisible)
    };
  }).filter(function(item) {
    return item.fechaReal && item.diaSemanaReal && item.estacionReal && item.actividadReal;
  });
}

function normalizarFechaTalleresControl_(valor) {
  if (valor instanceof Date && !isNaN(valor.getTime())) {
    return Utilities.formatDate(valor, Session.getScriptTimeZone(), "dd/MM/yyyy");
  }

  if (typeof valor === "number" && !isNaN(valor)) {
    const base = new Date(Date.UTC(1899, 11, 30));
    const fecha = new Date(base.getTime() + Math.round(valor) * 24 * 60 * 60 * 1000);
    return Utilities.formatDate(fecha, Session.getScriptTimeZone(), "dd/MM/yyyy");
  }

  return normalizarFechaCarga_(valor);
}

function obtenerDiaSemanaDesdeFechaTexto_(texto) {
  const orden = convertirFechaTextoAOrden_(texto);
  if (!orden) return "";

  const fecha = new Date(orden);
  const dias = [
    "DOMINGO",
    "LUNES",
    "MARTES",
    "MIERCOLES",
    "JUEVES",
    "VIERNES",
    "SABADO"
  ];

  return dias[fecha.getDay()] || "";
}

function construirFilasControlCumplimiento_(talleres, cronograma) {
  const reales = (Array.isArray(talleres) ? talleres : []).filter(function(item) {
    return !item.excluidaCruce;
  });
  const programados = (Array.isArray(cronograma) ? cronograma : []).filter(function(item) {
    return !item.excluidaCruce;
  });
  const indiceTalleres = {};
  const filas = [];

  reales.forEach(function(item) {
    const codigoVisible = item.codigoCruce || construirCodigoComparacionVisible_(
      item.fechaReal,
      item.estacionReal,
      item.actividadReal
    );
    const clave = obtenerClaveCodigoComparacion_(codigoVisible, item.fechaReal, item.estacionReal, item.actividadReal);
    if (!clave) return;

    if (!indiceTalleres[clave]) {
      indiceTalleres[clave] = [];
    }
    indiceTalleres[clave].push(item);
  });

  const gruposProgramados = {};
  programados.forEach(function(programado) {
    const codigoVisible = programado.codigoCruce || construirCodigoComparacionVisible_(
      programado.fechaProgramada,
      programado.estacionProgramada,
      programado.actividadProgramada
    );
    const clave = obtenerClaveCodigoComparacion_(
      codigoVisible,
      programado.fechaProgramada,
      programado.estacionProgramada,
      programado.actividadProgramada
    );
    if (!clave) return;
    if (!gruposProgramados[clave]) {
      gruposProgramados[clave] = [];
    }
    gruposProgramados[clave].push(programado);
  });

  Object.keys(gruposProgramados).forEach(function(claveProgramada) {
    const grupo = gruposProgramados[claveProgramada];
    const programado = grupo[0];
    const codigoVisibleProgramado = programado.codigoCruce || construirCodigoComparacionVisible_(
      programado.fechaProgramada,
      programado.estacionProgramada,
      programado.actividadProgramada
    );
    const coincidencias = indiceTalleres[claveProgramada] || [];
    const real = coincidencias.length ? coincidencias[0] : null;
    const repeticiones = grupo.length;
    let detalle = construirDetalleCumplimiento_(real, programado);
    if (repeticiones > 1) {
      detalle += " Programaciones repetidas unificadas: " + repeticiones + ".";
    }

    filas.push([
      real ? real.fechaReal : programado.fechaProgramada,
      real ? real.diaSemanaReal : programado.diaSemanaProgramado,
      real ? real.estacionReal : "",
      real ? real.actividadReal : "",
      "",
      real ? real.sectorDeCarga : "",
      programado.estacionProgramada,
      programado.diaSemanaProgramado,
      programado.horaInicioProgramada,
      programado.horaFinProgramada,
      programado.actividadProgramada,
      "",
      real ? "PROGRAMADO_Y_REALIZADO" : "PROGRAMADO_NO_CARGADO",
      detalle,
      codigoVisibleProgramado,
      real ? (real.categoriaActividad || "") : "",
      "NO",
      real ? (real.codigoCruce || codigoVisibleProgramado) : "",
      codigoVisibleProgramado
    ]);
  });

  return filas;
}

function construirFilasAuditoriaCodigosCruce_(cronograma, talleres) {
  const indiceTalleres = {};

  (Array.isArray(talleres) ? talleres : []).forEach(function(item) {
    const codigo = item.codigoCruce || construirCodigoComparacionVisible_(
      item.fechaReal,
      item.estacionReal || (item.claveEstacionCanonica || item.claveEstacion),
      item.actividadReal || item.claveActividad
    );
    const clave = obtenerClaveCodigoComparacion_(codigo, item.fechaReal, item.estacionReal, item.actividadReal);
    if (!clave) return;

    if (!indiceTalleres[clave]) {
      indiceTalleres[clave] = {
        cantidad: 0,
        muestraEstacion: item.estacionReal || "",
        muestraActividad: item.actividadReal || ""
      };
    }

    indiceTalleres[clave].cantidad++;
  });

  return (Array.isArray(cronograma) ? cronograma : []).map(function(item) {
    const codigo = item.codigoCruce || construirCodigoComparacionVisible_(
      item.fechaProgramada,
      item.estacionProgramada || (item.claveEstacionCanonica || item.claveEstacion),
      item.actividadProgramada || item.claveActividad
    );
    const clave = obtenerClaveCodigoComparacion_(codigo, item.fechaProgramada, item.estacionProgramada, item.actividadProgramada);
    const coincidencia = indiceTalleres[clave] || null;

    return [
      item.fechaProgramada || "",
      item.estacionProgramada || "",
      item.actividadProgramada || "",
      item.claveEstacionCanonica || item.claveEstacion || "",
      item.claveActividad || "",
      codigo,
      coincidencia ? coincidencia.cantidad : 0,
      coincidencia ? "COINCIDE" : "NO COINCIDE",
      coincidencia ? coincidencia.muestraEstacion : "",
      coincidencia ? coincidencia.muestraActividad : ""
    ];
  });
}

function obtenerClaveCodigoComparacion_(codigo, fecha, estacion, actividad) {
  const codigoBase = limpiarTexto_(codigo || construirCodigoComparacionVisible_(fecha, estacion, actividad));
  if (!codigoBase) return "";
  return normalizarTexto_(codigoBase).replace(/\s+/g, "");
}

function buscarMejorCoincidenciaCronograma_(indiceCronograma, clave) {
  let coincidenciaDisponible = null;

  const coincidencias = indiceCronograma[clave] || [];
  for (let j = 0; j < coincidencias.length; j++) {
    if (!coincidencias[j]._cumplido) {
      return coincidencias[j];
    }
    if (!coincidenciaDisponible) {
      coincidenciaDisponible = coincidencias[j];
    }
  }

  return coincidenciaDisponible;
}

function construirClaveCumplimiento_(claveEstacion, diaSemana, claveActividad) {
  return [
    limpiarTexto_(claveEstacion || ""),
    limpiarTexto_(diaSemana || ""),
    limpiarTexto_(claveActividad || "")
  ].join(" | ");
}

function construirDetalleCumplimiento_(real, programado) {
  if (!programado) {
    return "La actividad cargada no encontro coincidencia en el cronograma por fecha, estacion y actividad.";
  }

  if (!real) {
    return "No se encontraron registros en TALLERES para esta fecha, estacion y actividad.";
  }

  return "Cumple cronograma por fecha, estacion y actividad.";
}

function construirFilasCronogramaNormalizado_(datos) {
  let filas = Array.isArray(datos) ? datos : [];
  let resultado = [];
  let estacionActual = "";
  let mapeoDias = null;
  const anioObjetivo = obtenerAnioCronogramaObjetivo_();
  const mesObjetivo = obtenerMesCronogramaObjetivo_();
  const fechasPorDia = construirFechasProgramadasPorDia_(anioObjetivo, mesObjetivo);

  for (let fila = 0; fila < filas.length; fila++) {
    let valores = filas[fila] || [];
    let filaTexto = valores.map(limpiarTexto_).filter(Boolean).join(" ");

    if (!filaTexto) continue;

    let estacionDetectada = extraerEstacionCronograma_(valores, filaTexto);
    if (estacionDetectada) {
      estacionActual = estacionDetectada;
    }

    if (esFilaEncabezadoDiasCronograma_(valores)) {
      mapeoDias = obtenerMapeoDiasFilaCronograma_(valores);
      continue;
    }

    if (!mapeoDias || !estacionActual) continue;

    let horaFallback = extraerHoraBaseCronograma_(valores);

    Object.keys(mapeoDias).forEach(function(columnaTexto) {
      let columna = Number(columnaTexto);
      let contenido = limpiarTexto_(valores[columna]);
      if (!contenido) return;

      let entradas = extraerEntradasCronogramaDeCelda_(contenido, horaFallback);
      entradas.forEach(function(entrada) {
        let actividadMeta = obtenerMetadatosActividad_(entrada.actividad || contenido);
        let actividadVisible = limpiarTexto_(actividadMeta.nombreCanonico || "");
        if (!actividadVisible) return;
        let estacionVisible = obtenerNombreEstacionCanonicoSeguimiento_(estacionActual) || limpiarTexto_(estacionActual);
        let claves = construirClavesCronograma_(estacionVisible, actividadVisible, "");
        let fechasProgramadas = fechasPorDia[mapeoDias[columna]] || [];

        fechasProgramadas.forEach(function(fechaProgramada) {
          resultado.push([
            estacionVisible,
            mapeoDias[columna],
            entrada.horaInicio || "",
            entrada.horaFin || "",
            actividadVisible,
            limpiarTexto_(entrada.profesor || ""),
            entrada.tipo || "",
            FUENTE_CRONOGRAMA.nombreReferencia,
            entrada.observaciones || "",
            claves.estacion,
            claves.actividad,
            "",
            fechaProgramada,
            actividadMeta.categoria || "",
            actividadMeta.excluida ? "SI" : "NO",
            construirCodigoComparacionVisible_(fechaProgramada, estacionVisible, actividadVisible)
          ]);
        });
      });
    });
  }

  return resultado;
}

function construirDiagnosticoCronograma_(datos) {
  let filas = Array.isArray(datos) ? datos : [];
  let resultado = [];
  let estacionActual = "";
  let mapeoDias = null;

  for (let fila = 0; fila < filas.length; fila++) {
    let valores = filas[fila] || [];
    let filaTexto = valores.map(limpiarTexto_).filter(Boolean).join(" ");

    if (!filaTexto) continue;

    let estacionDetectada = extraerEstacionCronograma_(valores, filaTexto);
    if (estacionDetectada) {
      estacionActual = estacionDetectada;
    }

    if (esFilaEncabezadoDiasCronograma_(valores)) {
      mapeoDias = obtenerMapeoDiasFilaCronograma_(valores);
      resultado.push([
        fila + 1,
        estacionDetectada ? "ESTACION_Y_ENCABEZADO_DIAS" : "ENCABEZADO_DIAS",
        estacionActual,
        estacionDetectada || "",
        Object.keys(mapeoDias || {}).map(function(indice) {
          return indice + ":" + mapeoDias[indice];
        }).join(" | "),
        "",
        0,
        "",
        "",
        filaTexto
      ]);
      continue;
    }

    if (estacionDetectada) {
      resultado.push([
        fila + 1,
        "ESTACION",
        estacionActual,
        estacionDetectada,
        "",
        "",
        0,
        "",
        "",
        filaTexto
      ]);
      continue;
    }

    if (!mapeoDias || !estacionActual) {
      resultado.push([
        fila + 1,
        "IGNORADA_SIN_CONTEXTO",
        estacionActual,
        "",
        "",
        "",
        0,
        "",
        "",
        filaTexto
      ]);
      continue;
    }

    let horaFallback = extraerHoraBaseCronograma_(valores);
    let tuvoEntradas = false;

    Object.keys(mapeoDias).forEach(function(columnaTexto) {
      let columna = Number(columnaTexto);
      let contenido = limpiarTexto_(valores[columna]);
      if (!contenido) return;

      let entradas = extraerEntradasCronogramaDeCelda_(contenido, horaFallback);
      tuvoEntradas = true;

      resultado.push([
        fila + 1,
        "ENTRADA",
        estacionActual,
        "",
        mapeoDias[columna],
        horaFallback,
        entradas.length,
        columna + 1,
        contenido,
        filaTexto
      ]);
    });

    if (!tuvoEntradas) {
      resultado.push([
        fila + 1,
        "IGNORADA_SIN_CELDAS_EN_DIAS",
        estacionActual,
        "",
        Object.keys(mapeoDias || {}).map(function(indice) {
          return mapeoDias[indice];
        }).join(" | "),
        horaFallback,
        0,
        "",
        "",
        filaTexto
      ]);
    }
  }

  return resultado;
}

function esFilaEncabezadoDiasCronograma_(valores) {
  let encontrados = 0;

  for (let i = 0; i < valores.length; i++) {
    let valor = normalizarTexto_(valores[i]).toUpperCase();
    if (DIAS_SEMANA_CRONOGRAMA.indexOf(valor) !== -1) {
      encontrados++;
    }
  }

  return encontrados >= 5;
}

function obtenerMapeoDiasFilaCronograma_(valores) {
  let mapa = {};

  for (let i = 0; i < valores.length; i++) {
    let valor = normalizarTexto_(valores[i]).toUpperCase();
    if (DIAS_SEMANA_CRONOGRAMA.indexOf(valor) !== -1) {
      mapa[i] = valor;
    }
  }

  return Object.keys(mapa).length ? mapa : null;
}

function extraerEstacionCronograma_(valores, textoFila) {
  let texto = limpiarTexto_(textoFila);
  let celdas = Array.isArray(valores) ? valores : [];
  if (!texto) return "";

  let celdaDetectada = extraerEstacionDesdeTextoCronograma_(texto);
  if (celdaDetectada) {
    return celdaDetectada;
  }

  for (let i = 0; i < celdas.length; i++) {
    let candidatoCelda = extraerEstacionDesdeTextoCronograma_(celdas[i]);
    if (candidatoCelda) {
      return candidatoCelda;
    }
  }

  let celdasConTexto = celdas.map(limpiarTexto_).filter(Boolean);
  if (!celdasConTexto.length) {
    return "";
  }

  let tieneDias = celdasConTexto.some(function(valor) {
    return DIAS_SEMANA_CRONOGRAMA.indexOf(normalizarTexto_(valor).toUpperCase()) !== -1;
  });
  if (tieneDias) {
    return "";
  }

  let tieneHorarios = celdasConTexto.some(function(valor) {
    return /\d{1,2}:\d{2}/.test(valor);
  });
  if (tieneHorarios) {
    return "";
  }

  if (celdasConTexto.length > 3) {
    return "";
  }

  let candidato = celdasConTexto.reduce(function(acumulado, actual) {
    return actual.length > acumulado.length ? actual : acumulado;
  }, "");

  if (!candidato || esTextoInvalidoComoEstacion_(candidato)) {
    return "";
  }

  return candidato;
}

function extraerEstacionDesdeTextoCronograma_(texto) {
  let limpio = limpiarTexto_(texto);
  if (!limpio) return "";

  let patrones = [
    /^(.+?)\s+Semana\b/i,
    /^(.+?)\s*[-:]?\s*Semana\s+\d+/i,
    /^(.+?)\s+Lu\s+a\s+Vie\b/i,
    /^(.+?)\s+Lun(?:es)?\b/i
  ];

  for (let i = 0; i < patrones.length; i++) {
    let match = limpio.match(patrones[i]);
    if (match && match[1]) {
      let nombre = limpiarTexto_(match[1]);
      if (!esTextoInvalidoComoEstacion_(nombre)) {
        return nombre;
      }
    }
  }

  return "";
}

function esTextoInvalidoComoEstacion_(texto) {
  let normalizado = normalizarTexto_(texto).toUpperCase();
  if (!normalizado) return true;

  if (normalizado.length < 4) return true;

  const patronesInvalidos = [
    "CRONOGRAMA",
    "ACTIVIDAD",
    "PROFESOR",
    "HORARIO",
    "HORA",
    "TIPO",
    "FUENTE",
    "OBSERVACION",
    "OBSERVACIONES",
    "REFERENCIA",
    "SEMANA",
    "LUNES",
    "MARTES",
    "MIERCOLES",
    "JUEVES",
    "VIERNES",
    "SABADO",
    "DOMINGO"
  ];

  return patronesInvalidos.some(function(patron) {
    return normalizado.indexOf(patron) !== -1;
  });
}

function extraerHoraBaseCronograma_(valores) {
  for (let i = 0; i < Math.min(2, valores.length); i++) {
    let texto = limpiarTexto_(valores[i]);
    let match = texto.match(/(\d{1,2}:\d{2})/);
    if (match) {
      return match[1];
    }
  }

  return "";
}

function extraerEntradasCronogramaDeCelda_(textoCelda, horaFallback) {
  let texto = limpiarTexto_(textoCelda).replace(/\s+/g, " ");
  let regex = /(\d{1,2}:\d{2})\s*[Aa]?\s*(?:a|A)\s*(\d{1,2}:\d{2})\s*(.*?)(?=(\d{1,2}:\d{2}\s*[Aa]?\s*(?:a|A)\s*\d{1,2}:\d{2})|$)/g;
  let entradas = [];
  let match;

  while ((match = regex.exec(texto)) !== null) {
    let detalle = parsearDetalleCronograma_(match[3]);
    entradas.push({
      horaInicio: match[1],
      horaFin: match[2],
      actividad: detalle.actividad,
      profesor: detalle.profesor,
      tipo: detalle.tipo,
      observaciones: detalle.observaciones
    });
  }

  if (entradas.length) {
    return entradas;
  }

  let detalleSimple = parsearDetalleCronograma_(texto);
  return [{
    horaInicio: horaFallback || "",
    horaFin: "",
    actividad: detalleSimple.actividad || texto,
    profesor: detalleSimple.profesor,
    tipo: detalleSimple.tipo,
    observaciones: detalleSimple.observaciones
  }];
}

function parsearDetalleCronograma_(texto) {
  let limpio = limpiarTexto_(texto).replace(/\s+/g, " ");
  let tipo = "";
  let actividad = limpio;
  let profesor = "";

  let tipoMatch = limpio.match(/\(([^)]+)\)/);
  if (tipoMatch) {
    tipo = limpiarTexto_(tipoMatch[1]);
    actividad = limpiarTexto_(limpio.replace(tipoMatch[0], ""));
  }

  let equipoMatch = actividad.match(/(.+?)\s+(Equipo\s+[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]+)$/);
  if (equipoMatch) {
    actividad = limpiarTexto_(equipoMatch[1]);
    profesor = limpiarTexto_(equipoMatch[2]);
  } else {
    let profesorMatch = actividad.match(/(.+?)\s+([A-ZÁÉÍÓÚÜÑ][A-Za-zÁÉÍÓÚÜÑáéíóúüñ'".-]+(?:\s+[A-ZÁÉÍÓÚÜÑ][A-Za-zÁÉÍÓÚÜÑáéíóúüñ'".-]+){1,3})$/);
    if (profesorMatch) {
      actividad = limpiarTexto_(profesorMatch[1]);
      profesor = limpiarTexto_(profesorMatch[2]);
    }
  }

  return {
    actividad: actividad,
    profesor: profesor,
    tipo: tipo,
    observaciones: ""
  };
}

function construirClavesCronograma_(estacion, actividad, profesor) {
  const claveEstacion = obtenerClaveEstacionCanonica_(estacion) || normalizarTexto_(estacion).toUpperCase();
  return {
    estacion: claveEstacion,
    actividad: normalizarTexto_(actividad).toUpperCase(),
    profesor: normalizarTexto_(profesor).toUpperCase()
  };
}

function obtenerClaveEstacionCanonica_(estacion) {
  const nombreCanonico = obtenerNombreEstacionVisible_(estacion);
  return nombreCanonico ? normalizarTexto_(nombreCanonico).toUpperCase() : "";
}

function obtenerVariantesClaveEstacion_(estacion, claveCanonica) {
  const variantes = [];
  const vistos = {};

  function agregar(valor) {
    const limpio = limpiarTexto_(valor || "");
    if (!limpio) return;
    if (vistos[limpio]) return;
    vistos[limpio] = true;
    variantes.push(limpio);
  }

  const claveBase = limpiarTexto_(claveCanonica || "").toUpperCase();
  const normalizada = normalizarTexto_(estacion).toUpperCase();
  const simplificada = simplificarNombreEstacionParaCruce_(estacion);

  if (claveBase) agregar(claveBase);
  if (normalizada) agregar(normalizada);
  if (simplificada) agregar(simplificada);

  const manual = obtenerEquivalenciasManualesEstacion_(estacion);
  manual.forEach(agregar);

  return variantes;
}

function obtenerEquivalenciasManualesEstacion_(estacion) {
  const normalizada = normalizarTexto_(estacion).toUpperCase();
  if (!normalizada) return [];

  const equivalencias = [];
  const equivalenciasCombinadas = combinarEquivalenciasEstaciones_();

  Object.keys(equivalenciasCombinadas).forEach(function(canonica) {
    const canonicaNormalizada = normalizarTexto_(canonica).toUpperCase();
    const alias = equivalenciasCombinadas[canonica] || [];
    const valores = [canonica].concat(alias);
    const coincide = valores.some(function(item) {
      return normalizarTexto_(item).toUpperCase() === normalizada;
    });

    if (coincide) {
      equivalencias.push(canonicaNormalizada);
      alias.forEach(function(item) {
        equivalencias.push(normalizarTexto_(item).toUpperCase());
      });
    }
  });

  return equivalencias;
}

function combinarEquivalenciasEstaciones_() {
  if (cacheEquivalenciasEstacionesCombinadas_) {
    return cacheEquivalenciasEstacionesCombinadas_;
  }

  const combinadas = {};

  function agregar(canonica, alias) {
    const nombreCanonico = limpiarTexto_(canonica || "");
    const nombreAlias = limpiarTexto_(alias || "");
    if (!nombreCanonico || !nombreAlias) return;

    if (!combinadas[nombreCanonico]) {
      combinadas[nombreCanonico] = [];
    }

    if (combinadas[nombreCanonico].indexOf(nombreAlias) === -1) {
      combinadas[nombreCanonico].push(nombreAlias);
    }
  }

  Object.keys(EQUIVALENCIAS_ESTACIONES).forEach(function(canonica) {
    agregar(canonica, canonica);
    (EQUIVALENCIAS_ESTACIONES[canonica] || []).forEach(function(alias) {
      agregar(canonica, alias);
    });
  });

  ESTACIONES_SALUDABLES_VISIBLES.forEach(function(canonica) {
    agregar(canonica, canonica);

    const base = limpiarTexto_(canonica)
      .replace(/^Estaciones?\s+Saludables?\s+/i, "")
      .replace(/^Estación\s+Saludable\s+/i, "")
      .trim();

    agregar(canonica, base);
    agregar(canonica, simplificarNombreEstacionParaCruce_(base));

    (ALIAS_ESTACIONES_SALUDABLES_VISIBLES[canonica] || []).forEach(function(alias) {
      agregar(canonica, alias);
      agregar(canonica, simplificarNombreEstacionParaCruce_(alias));
    });
  });

  const equivalenciasDatos = obtenerEquivalenciasEstacionesDesdeDatos_();
  Object.keys(equivalenciasDatos).forEach(function(canonica) {
    agregar(canonica, canonica);
    (equivalenciasDatos[canonica] || []).forEach(function(alias) {
      agregar(canonica, alias);
    });
  });

  cacheEquivalenciasEstacionesCombinadas_ = combinadas;
  return combinadas;
}

function obtenerEquivalenciasEstacionesDesdeDatos_() {
  if (cacheEquivalenciasEstacionesDatos_) {
    return cacheEquivalenciasEstacionesDatos_;
  }

  const equivalencias = {};

  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const hoja = ss.getSheetByName(RANGO_EQUIVALENCIAS_ESTACIONES_DATOS.hoja);

    if (!hoja) {
      cacheEquivalenciasEstacionesDatos_ = equivalencias;
      return equivalencias;
    }

    const filas = hoja.getRange(RANGO_EQUIVALENCIAS_ESTACIONES_DATOS.rango).getDisplayValues();

    filas.forEach(function(fila) {
      const valores = (fila || []).map(limpiarTexto_).filter(Boolean);
      if (!valores.length) return;

      const canonica = valores[0];
      if (!equivalencias[canonica]) {
        equivalencias[canonica] = [];
      }

      valores.forEach(function(valor) {
        if (equivalencias[canonica].indexOf(valor) === -1) {
          equivalencias[canonica].push(valor);
        }
      });
    });
  } catch (error) {}

  cacheEquivalenciasEstacionesDatos_ = equivalencias;
  return equivalencias;
}

function simplificarNombreEstacionParaCruce_(texto) {
  const normalizado = normalizarTexto_(texto)
    .replace(/\bestaciones?\s+saludables?\b/g, " ")
    .replace(/\best\.\b/g, " ")
    .replace(/[()\-_,.;:/]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toUpperCase();

  return normalizado;
}

function obtenerCatalogoActividades_() {
  if (cacheCatalogoActividades_) {
    return cacheCatalogoActividades_;
  }

  const actividadesDesdeHoja = obtenerCatalogoActividadesLista_();
  const actividades = actividadesDesdeHoja.length
    ? actividadesDesdeHoja.map(function(item) { return item.nombre; })
    : ACTIVIDADES_CATALOGO_TEXTO.split(/\r?\n/).map(limpiarTexto_).filter(Boolean);
  const categorias = actividadesDesdeHoja.length
    ? actividadesDesdeHoja.map(function(item) { return item.categoria; })
    : ACTIVIDADES_CATEGORIAS_TEXTO.split(/\r?\n/).map(limpiarTexto_).filter(Boolean);
  const mapa = {};

  actividades.forEach(function(nombre, indice) {
    const clave = normalizarTexto_(nombre);
    mapa[clave] = {
      nombre: nombre,
      categoria: categorias[indice] || ""
    };
  });

  cacheCatalogoActividades_ = mapa;
  return mapa;
}

function obtenerCatalogoActividadesLista_() {
  if (cacheCatalogoActividadesLista_) {
    return cacheCatalogoActividadesLista_;
  }

  const actividadesDesdeHoja = obtenerCatalogoActividadesDesdeHoja_();
  const base = actividadesDesdeHoja.length
    ? actividadesDesdeHoja
    : ACTIVIDADES_CATALOGO_TEXTO.split(/\r?\n/).map(function(nombre, indice) {
        return {
          nombre: limpiarTexto_(nombre),
          categoria: limpiarTexto_((ACTIVIDADES_CATEGORIAS_TEXTO.split(/\r?\n/)[indice]) || "")
        };
      }).filter(function(item) {
        return item.nombre;
      });

  cacheCatalogoActividadesLista_ = base.map(function(item) {
    const nombre = limpiarTexto_(item.nombre);
    const normalizada = normalizarTexto_(nombre);
    const compacta = normalizada.replace(/[^a-z0-9]/g, "");
    const tokens = normalizada.split(/[^a-z0-9]+/).filter(Boolean);
    return {
      nombre: nombre,
      categoria: limpiarTexto_(item.categoria || ""),
      normalizada: normalizada,
      compacta: compacta,
      tokens: tokens
    };
  }).filter(function(item) {
    return item.nombre;
  });

  return cacheCatalogoActividadesLista_;
}

function obtenerCatalogoActividadesDesdeHoja_() {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const hoja = ss.getSheetByName("CATALOGO_ACTIVIDADES");
    if (!hoja || hoja.getLastRow() < 2) {
      return [];
    }

    const ultimaFila = hoja.getLastRow();
    const ultimaColumna = Math.max(1, hoja.getLastColumn());
    const datos = hoja.getRange(2, 1, ultimaFila - 1, Math.min(2, ultimaColumna)).getDisplayValues();

    return datos.map(function(fila) {
      return {
        nombre: limpiarTexto_(fila[0]),
        categoria: limpiarTexto_(fila[1] || "")
      };
    }).filter(function(item) {
      return item.nombre;
    });
  } catch (error) {
    return [];
  }
}

function normalizarNombreActividadBase_(actividad) {
  return limpiarTexto_(actividad || "")
    .replace(/\s+\d+$/, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function obtenerRosetaActividades_() {
  if (cacheRosetaActividades_) {
    return cacheRosetaActividades_;
  }

  const mapa = {};

  function registrar(clave, valor) {
    const claveNormalizada = normalizarTexto_(clave);
    const valorLimpio = limpiarTexto_(valor);
    if (!claveNormalizada || !valorLimpio) return;
    mapa[claveNormalizada] = valorLimpio;
  }

  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const hoja = ss.getSheetByName("ROSETA_ACTIVIDADES_CRONOGRAMA");
    if (!hoja || hoja.getLastRow() < 2) {
      cacheRosetaActividades_ = mapa;
      return mapa;
    }

    const ultimaFila = hoja.getLastRow();
    const ultimaColumna = Math.min(7, hoja.getLastColumn());
    const filas = hoja.getRange(2, 1, ultimaFila - 1, ultimaColumna).getDisplayValues();

    filas.forEach(function(fila) {
      const origen = limpiarTexto_(fila[0]);
      const limpia = limpiarTexto_(fila[1]);
      const sugerida = limpiarTexto_(fila[2]);
      const canonica = limpiarTexto_(fila[4]);
      const activo = normalizarTexto_(fila[5]).toUpperCase() === "SI";
      const destino = canonica || sugerida;

      if (!activo || !destino) return;

      registrar(origen, destino);
      registrar(limpia, destino);
      registrar(sugerida, destino);
    });
  } catch (error) {}

  cacheRosetaActividades_ = mapa;
  return mapa;
}

function limpiarTextoActividadCronograma_(actividad) {
  return limpiarTexto_(actividad || "")
    .replace(/https?:\/\/\S+/gi, " ")
    .replace(/\b(?:LUNES|MARTES|MIERCOLES|JUEVES|VIERNES|SABADO|DOMINGO)\b\s*[-:]?/gi, " ")
    .replace(/\b\d{1,2}[.:]\d{2}\s*(?:A|-)?\s*\d{1,2}[.:]\d{2}\b/gi, " ")
    .replace(/\bT\.\s*de\b/gi, "Taller de")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function esTextoInvalidoComoActividad_(actividad) {
  const limpio = limpiarTexto_(actividad || "");
  const normalizada = normalizarTexto_(limpio).toUpperCase();
  if (!limpio) return true;
  if (normalizada.length < 3) return true;

  if (/^(LUNES|MARTES|MIERCOLES|JUEVES|VIERNES|SABADO|DOMINGO)$/.test(normalizada)) {
    return true;
  }

  if (/^(LUNES|MARTES|MIERCOLES|JUEVES|VIERNES|SABADO|DOMINGO)\b/.test(normalizada)) {
    return true;
  }

  if (/(MAPS\.APP|HTTPS?:\/\/|BAUNESS|NEUQUEN|MOLDES|LACROZE|JURAMENTO|LISANDRO|ASTRADA|FLORESTA)/i.test(limpio)) {
    return true;
  }

  return false;
}

function resolverActividadCanonicaDesdeCatalogo_(actividad) {
  const limpio = limpiarTextoActividadCronograma_(actividad);
  if (esTextoInvalidoComoActividad_(limpio)) {
    return null;
  }

  const roseta = obtenerRosetaActividades_();
  const claveRoseta = normalizarTexto_(limpio);
  if (roseta[claveRoseta]) {
    return roseta[claveRoseta];
  }

  const catalogo = obtenerCatalogoActividadesLista_();
  const normalizada = normalizarTexto_(limpio);
  const compacta = normalizada.replace(/[^a-z0-9]/g, "");
  const tokens = normalizada.split(/[^a-z0-9]+/).filter(Boolean);

  for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].normalizada === normalizada || catalogo[i].compacta === compacta) {
      return catalogo[i].nombre;
    }
  }

  let mejor = null;
  let mejorPuntaje = 0;

  catalogo.forEach(function(item) {
    let interseccion = 0;
    tokens.forEach(function(token) {
      if (item.tokens.indexOf(token) !== -1) {
        interseccion++;
      }
    });

    let puntaje = interseccion;
    if (tokens.length && interseccion === tokens.length) puntaje += 5;
    if (compacta && item.compacta.indexOf(compacta) !== -1) puntaje += 3;
    if (compacta && compacta.indexOf(item.compacta) !== -1) puntaje += 2;

    if (puntaje > mejorPuntaje) {
      mejorPuntaje = puntaje;
      mejor = item;
    }
  });

  if (mejor && mejorPuntaje >= 3) {
    return mejor.nombre;
  }

  return limpio;
}

function obtenerMetadatosActividad_(actividad) {
  const original = limpiarTexto_(actividad || "");
  const catalogo = obtenerCatalogoActividades_();
  const canonica = resolverActividadCanonicaDesdeCatalogo_(original);
  const clave = normalizarTexto_(canonica || "");

  if (!canonica) {
    return {
      nombreCanonico: "",
      categoria: "",
      excluida: true
    };
  }

  if (catalogo[clave]) {
    return {
      nombreCanonico: catalogo[clave].nombre,
      categoria: catalogo[clave].categoria || "",
      excluida: esActividadExcluidaDeCronograma_(catalogo[clave].nombre, catalogo[clave].categoria || "")
    };
  }

  return {
    nombreCanonico: canonica,
    categoria: "",
    excluida: esActividadExcluidaDeCronograma_(canonica, "")
  };
}

function esActividadExcluidaDeCronograma_(actividad, categoria) {
  const categoriaNormalizada = normalizarTexto_(categoria).toUpperCase();
  if (CATEGORIAS_EXCLUIDAS_CRONOGRAMA.indexOf(categoriaNormalizada) !== -1) {
    return true;
  }

  const actividadNormalizada = normalizarTexto_(actividad).toUpperCase();
  return PATRONES_EXCLUSION_CRONOGRAMA.some(function(patron) {
    return actividadNormalizada.indexOf(normalizarTexto_(patron).toUpperCase()) !== -1;
  });
}

function obtenerProfesoresBase_() {
  if (cacheProfesoresBase_) {
    return cacheProfesoresBase_;
  }

  cacheProfesoresBase_ = PROFESORES_BASE_TEXTO.split(/\r?\n/).map(function(nombre) {
    const limpio = limpiarTexto_(nombre);
    const normalizado = normalizarTexto_(limpio).toUpperCase();
    const tokens = normalizado.split(" ").filter(function(token) {
      return token && token.length >= 3;
    });

    return {
      nombre: limpio,
      normalizado: normalizado,
      tokens: tokens
    };
  }).filter(function(item) {
    return item.nombre;
  });

  return cacheProfesoresBase_;
}

function obtenerProfesorCanonico_(profesor) {
  const limpio = limpiarTexto_(profesor || "");
  if (!limpio) return "";

  const normalizado = normalizarTexto_(limpio).toUpperCase();
  const profesores = obtenerProfesoresBase_();
  const tokensEntrada = normalizado.split(" ").filter(function(token) {
    return token && token.length >= 3;
  });

  let mejor = null;
  let mejorPuntaje = 0;

  profesores.forEach(function(item) {
    if (item.normalizado === normalizado) {
      mejor = item;
      mejorPuntaje = 1000;
      return;
    }

    if (!tokensEntrada.length || mejorPuntaje >= 1000) return;

    let interseccion = 0;
    tokensEntrada.forEach(function(token) {
      if (item.tokens.indexOf(token) !== -1) {
        interseccion++;
      }
    });

    const cubreEntrada = interseccion === tokensEntrada.length;
    const cubreBase = interseccion === item.tokens.length;
    let puntaje = interseccion;

    if (cubreEntrada) puntaje += 5;
    if (cubreBase) puntaje += 2;

    if (puntaje > mejorPuntaje) {
      mejorPuntaje = puntaje;
      mejor = item;
    }
  });

  if (mejor && mejorPuntaje >= 6) {
    return mejor.nombre;
  }

  return limpio;
}

function obtenerClaveProfesorCanonica_(profesor) {
  return normalizarTexto_(obtenerProfesorCanonico_(profesor)).toUpperCase();
}

function obtenerAnioCronogramaObjetivo_() {
  return Number(Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy"));
}

function obtenerMesCronogramaObjetivo_() {
  return Number(Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "M"));
}

function construirFechasProgramadasPorDia_(anio, mes) {
  const fechas = {
    LUNES: [],
    MARTES: [],
    MIERCOLES: [],
    JUEVES: [],
    VIERNES: [],
    SABADO: [],
    DOMINGO: []
  };

  const mesIndice = Math.max(0, Math.min(11, Number(mes || 1) - 1));
  const inicio = new Date(anio, mesIndice, 1);
  const fin = new Date(anio, mesIndice + 1, 0);
  const dias = ["DOMINGO", "LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO"];

  for (let cursor = new Date(inicio); cursor <= fin; cursor.setDate(cursor.getDate() + 1)) {
    const nombreDia = dias[cursor.getDay()];
    if (!fechas[nombreDia]) continue;

    fechas[nombreDia].push(
      Utilities.formatDate(
        new Date(cursor.getFullYear(), cursor.getMonth(), cursor.getDate()),
        Session.getScriptTimeZone(),
        "dd/MM/yyyy"
      )
    );
  }

  return fechas;
}

function construirCodigoCruce_(fecha, claveEstacion, claveActividad) {
  return [
    limpiarTexto_(fecha || ""),
    limpiarTexto_(claveEstacion || ""),
    limpiarTexto_(claveActividad || "")
  ].join(" | ");
}

function construirCodigoComparacionVisible_(fecha, estacion, actividad) {
  const serial = convertirFechaTextoASerialHoja_(fecha);
  if (!serial) return "";
  return serial + limpiarTexto_(estacion || "") + limpiarTexto_(actividad || "");
}

function convertirFechaTextoASerialHoja_(fechaTexto) {
  const fechaNormalizada = normalizarFechaCarga_(fechaTexto);
  const partes = String(fechaNormalizada).split("/");
  if (partes.length !== 3) return "";

  const dia = Number(partes[0]);
  const mes = Number(partes[1]) - 1;
  const anio = Number(partes[2]);
  if (!dia || mes < 0 || !anio) return "";

  const baseUtc = Date.UTC(1899, 11, 30);
  const fechaUtc = Date.UTC(anio, mes, dia);
  return String(Math.round((fechaUtc - baseUtc) / 86400000));
}

function convertirSerialHojaAFechaTexto_(serialTexto) {
  const serial = Number(String(serialTexto || "").trim());
  if (!serial || isNaN(serial)) return "";

  const baseUtc = Date.UTC(1899, 11, 30);
  const fechaUtc = new Date(baseUtc + Math.round(serial) * 86400000);
  return Utilities.formatDate(fechaUtc, Session.getScriptTimeZone(), "dd/MM/yyyy");
}

function extraerFechaTextoDesdeCodigoComparacion_(codigo) {
  const limpio = limpiarTexto_(codigo || "");
  if (!limpio) return "";

  const match = limpio.match(/^(\d{5,})/);
  if (!match) return "";

  return convertirSerialHojaAFechaTexto_(match[1]);
}

function iniciarSesionConCorreo(emailIngresado) {
  const email = String(emailIngresado || "").trim().toLowerCase();
  console.log("[LOGIN] Intentando ingresar con: " + email);

  if (!email) {
    return {
      ok: false,
      email: "",
      perfil: "sin_acceso",
      mensaje: "Ingresa tu correo para continuar."
    };
  }

  const datosUsuario = resolverPerfilUsuario_(email);
  const perfil = datosUsuario.perfil;
  console.log("[LOGIN] Resultado para " + email + ": " + perfil);

  if (perfil === "sin_acceso") {
    return {
      ok: false,
      email: email,
      perfil: "sin_acceso",
      mensaje: "El correo " + email + " no figura como ACTIVO en la solapa USUARIOS. Revisa que el estado sea 'SI'."
    };
  }

  const permisosBase = obtenerPermisosVista(perfil).puede;
  
  // Mezclar permisos base con overrides de la hoja
  const permisosFinales = {};
  PERMISOS_KEYS.forEach(key => {
    // Si en la hoja dice SI o NO, manda eso. Si está vacío, manda lo del perfil base.
    if (datosUsuario.overrides && (datosUsuario.overrides[key] === true || datosUsuario.overrides[key] === false)) {
      permisosFinales[key] = datosUsuario.overrides[key];
    } else {
      permisosFinales[key] = permisosBase[key] || false;
    }
  });

  const colorPerfil = obtenerPermisosVista(perfil).color;

  return {
    ok: true,
    email: email,
    perfil: perfil,
    permisos: permisosFinales,
    colorPerfil: colorPerfil,
    mensaje: "Acceso autorizado. Perfil: " + perfil + (Object.keys(datosUsuario.overrides).length > 0 ? " (con permisos personalizados)" : "") + "."
  };
}

function obtenerDatos(emailSesion){
  const acceso = iniciarSesionConCorreo(emailSesion);
  if (!acceso.ok) {
    throw new Error(acceso.mensaje || "Comunicarse con el administrador.");
  }

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const hojas = ss.getSheets();
  const contextual = obtenerPermisosVista(acceso.perfil);
  const contextoUsuario = {
    email: acceso.email,
    perfil: acceso.perfil,
    autenticado: true,
    puedeCambiarPerfil: false,
    mensaje: acceso.mensaje,
    permisos: acceso.permisos, // Corregido: Usa los permisos mezclados (Base + Overrides)
    colorPerfil: contextual.color
  };

  const solapasEspecialesRaw = obtenerNombresSolapasEspeciales_();
  const solapasEspeciales = solapasEspecialesRaw.filter(nombre => debeVerSolapa(acceso.perfil, nombre));

  let estaciones = [];
  let totalRegistros = 0;
  let estacionesActivas = 0;

  const ahora = new Date();

  hojas.forEach(hoja => {
    let nombreOriginal = hoja.getName();

    // Solo procesamos solapas que tienen el marcador de estación "*"
    if (nombreOriginal.indexOf("*") === -1) return;

    let nombre = nombreOriginal.replace("*", "").trim();

    let comuna = hoja.getRange("D1").getValue() || "";
    let datos = hoja.getRange("B2:C50").getValues();

    let profesores = [];
    let ultimaFecha = null;

    datos.forEach(fila => {
      let profesor = fila[0];
      let fecha = fila[1];

      if (!profesor) return;

      totalRegistros++;

      let fechaTexto = "";
      let orden = 0;

      if (fecha instanceof Date) {
        orden = fecha.getTime();

        fechaTexto = Utilities.formatDate(
          fecha,
          Session.getScriptTimeZone(),
          "dd/MM/yyyy HH:mm:ss"
        );

        if (!ultimaFecha || fecha > ultimaFecha) {
          ultimaFecha = fecha;
        }
      }

      profesores.push({
        profesor: String(profesor).replace("_", " "),
        fecha: fechaTexto,
        orden: orden
      });
    });

    profesores.sort((a, b) => b.orden - a.orden);

    let estado = "rojo";

    if (ultimaFecha) {
      let diferencia = (ahora - ultimaFecha) / (1000 * 60 * 60 * 24);

      if (diferencia < 1) {
        estado = "verde";
        estacionesActivas++;
      } else if (diferencia < 7) {
        estado = "amarillo";
      } else {
        estado = "rojo";
      }
    }

    let totalProfesores = profesores.length;
    let profesoresConFecha = 0;

    profesores.forEach(p => {
      if (p.fecha) {
        profesoresConFecha++;
      }
    });

    estaciones.push({
      estacion: nombre,
      comuna: comuna,
      estado: estado,
      profesores: profesores,
      totalProfesores: totalProfesores,
      profesoresConFecha: profesoresConFecha
    });
  });

  return {
    estaciones: estaciones,
    totalEstaciones: estaciones.length,
    estacionesActivas: estacionesActivas,
    estacionesPorActualizar: estaciones.length - estacionesActivas,
    totalRegistros: totalRegistros,
    resumenesEspeciales: {},
    solapasEspeciales: solapasEspeciales,
    usuario: contextoUsuario
  };
}

function obtenerContextoUsuarioActual_() {
  const email = obtenerEmailUsuarioActual_();
  const datosUsuario = resolverPerfilUsuario_(email);
  const perfil = datosUsuario.perfil;
  let mensaje = "No se pudo identificar la cuenta del usuario. Verifica el despliegue del web app y el inicio de sesion.";

  if (email && perfil !== "sin_acceso") {
    mensaje = "Acceso autorizado para " + email + " con perfil " + perfil + ".";
  } else if (email) {
    mensaje = "La cuenta " + email + " inicio sesion, pero todavia no tiene un perfil asignado.";
  }

  return {
    email: email,
    perfil: perfil,
    autenticado: !!email,
    puedeCambiarPerfil: false,
    mensaje: mensaje
  };
}

function obtenerEmailUsuarioActual_() {
  try {
    return String(Session.getActiveUser().getEmail() || "").trim().toLowerCase();
  } catch (error) {
    return "";
  }
}

function resolverPerfilUsuario_(email) {
  const emailBusqueda = String(email || "").trim().toLowerCase();
  if (!emailBusqueda) return { perfil: "sin_acceso", overrides: {} };

  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const hoja = ss.getSheetByName("USUARIOS");
    if (!hoja) return { perfil: "sin_acceso", overrides: {} };

    const ultimaFila = hoja.getLastRow();
    if (ultimaFila < 2) return { perfil: "sin_acceso", overrides: {} };

    const ultCol = hoja.getLastColumn();
    const datos = hoja.getRange(2, 1, ultimaFila - 1, ultCol).getDisplayValues();
    
    for (let i = 0; i < datos.length; i++) {
      const emailHoja = String(datos[i][0] || "").trim().toLowerCase();
      const perfilHoja = String(datos[i][1] || "").trim().toLowerCase();
      const activoHoja = String(datos[i][2] || "").trim().toUpperCase();

      if (emailHoja === emailBusqueda) {
        if (activoHoja === "SI" || activoHoja === "SÍ") {
          let perfilReal = perfilHoja;
          if (perfilHoja === "administrador") perfilReal = "admin";
          if (perfilHoja === "coordinación") perfilReal = "coordinacion";

          // Capturar Overrides de permisos
          const overrides = {};
          // Las columnas de permisos empiezan en la E (índice 4)
          PERMISOS_KEYS.forEach((key, index) => {
            const colIndex = 4 + index;
            if (colIndex < datos[i].length) {
              const valor = String(datos[i][colIndex] || "").trim().toUpperCase();
              if (valor === "SI") overrides[key] = true;
              if (valor === "NO") overrides[key] = false;
            }
          });

          return {
            perfil: perfilReal,
            overrides: overrides
          };
        }
      }
    }
  } catch (e) {
    console.error("Error en resolverPerfilUsuario_: " + e.message);
  }

  return { perfil: "sin_acceso", overrides: {} };
}

function diagnosticarMiAcceso() {
  const email = Session.getActiveUser().getEmail();
  const datosUsuario = resolverPerfilUsuario_(email);
  const perfil = datosUsuario.perfil;
  const ui = SpreadsheetApp.getUi();
  
  let msg = "DIAGNÓSTICO DE ACCESO\n\n";
  msg += "1. Tu email detectado por Google: " + email + "\n";
  msg += "2. Perfil resuelto por el sistema: " + (perfil === "sin_acceso" ? "NO ENCONTRADO O INACTIVO" : perfil.toUpperCase()) + "\n\n";
  
  if (perfil === "sin_acceso") {
    msg += "RECOMENDACIÓN:\n";
    msg += "- Verifica que en la solapa 'USUARIOS' el email coincida exactamente con el punto 1.\n";
    msg += "- Asegúrate de que la columna 'ACTIVO' tenga el valor 'SI'.\n";
    msg += "- El perfil debe ser: admin, gerencia, coordinacion o operativo.";
  } else {
    msg += "¡Todo correcto! Deberías poder ingresar sin problemas.";
  }
  
  ui.alert(msg);
}

function obtenerPerfilesUsuariosConfigurados_() {
  const base = clonarPerfilesUsuarios_(PERFILES_USUARIOS);
  
  // UNICA FUENTE DE VERDAD: Solapa USUARIOS
  const desdeUsuarios = obtenerPerfilesUsuariosDesdeHoja_();
  if (desdeUsuarios) {
    return mezclarPerfilesUsuarios_(base, desdeUsuarios);
  }

  // Si no hay usuarios en la solapa, devolvemos la base vacía
  return base;
}



function clonarPerfilesUsuarios_(origen) {
  return {
    admin: normalizarListaEmails_(origen && origen.admin),
    gerencia: normalizarListaEmails_(origen && origen.gerencia),
    coordinacion: normalizarListaEmails_(origen && origen.coordinacion),
    operativo: normalizarListaEmails_(origen && origen.operativo)
  };
}

function mezclarPerfilesUsuarios_(base, configuracion) {
  const salida = clonarPerfilesUsuarios_(base);

  if (!configuracion || typeof configuracion !== "object") {
    return salida;
  }

  if (Array.isArray(configuracion.admin) || Array.isArray(configuracion.gerencia) || Array.isArray(configuracion.coordinacion) || Array.isArray(configuracion.operativo)) {
    ["admin", "gerencia", "coordinacion", "operativo"].forEach(function(perfil) {
      if (Array.isArray(configuracion[perfil])) {
        salida[perfil] = normalizarListaEmails_(configuracion[perfil]);
      }
    });

    return salida;
  }

  Object.keys(configuracion).forEach(function(email) {
    const perfil = limpiarTexto_(configuracion[email]);
    if (perfil === "ADMIN") {
      salida.admin.push(String(email || "").trim().toLowerCase());
    } else if (perfil === "GERENCIA") {
      salida.gerencia.push(String(email || "").trim().toLowerCase());
    } else if (perfil === "COORDINACION") {
      salida.coordinacion.push(String(email || "").trim().toLowerCase());
    } else if (perfil === "OPERATIVO") {
      salida.operativo.push(String(email || "").trim().toLowerCase());
    }
  });

  salida.admin = normalizarListaEmails_(salida.admin);
  salida.gerencia = normalizarListaEmails_(salida.gerencia);
  salida.coordinacion = normalizarListaEmails_(salida.coordinacion);
  salida.operativo = normalizarListaEmails_(salida.operativo);

  return salida;
}

function obtenerPerfilesUsuariosDesdeHoja_() {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const hoja = ss.getSheetByName("USUARIOS");
    if (!hoja) {
      console.warn("[AUTH] No se encontro la solapa USUARIOS");
      return null;
    }
    
    if (hoja.getLastRow() < 2) {
      console.warn("[AUTH] La solapa USUARIOS esta vacia");
      return null;
    }

    const datos = hoja.getRange(2, 1, hoja.getLastRow() - 1, 3).getDisplayValues();
    const perfiles = clonarPerfilesUsuarios_(PERFILES_USUARIOS);
    let contador = 0;

    datos.forEach(function(fila) {
      const email = String(fila[0] || "").trim().toLowerCase();
      const perfil = String(fila[1] || "").trim().toLowerCase();
      const activo = String(fila[2] || "").trim().toUpperCase();

      if (email && (activo === "SI" || activo === "SÍ")) {
        if (perfiles.hasOwnProperty(perfil)) {
          perfiles[perfil].push(email);
          contador++;
        } else if (perfil === "administrador") {
          perfiles.admin.push(email);
          contador++;
        }
      }
    });

    console.log("[AUTH] Usuarios cargados desde hoja: " + contador);
    return perfiles;
  } catch (error) {
    console.error("[AUTH] Error en obtenerPerfilesUsuariosDesdeHoja_: " + error.message);
    return null;
  }
}

// FUNCION DEPRECADA - Se mantiene el nombre para evitar errores de referencia pero vacia
function obtenerPerfilesUsuariosDesdeRol_() { return null; }

function normalizarListaEmails_(lista) {
  const salida = [];
  const vistos = {};

  (Array.isArray(lista) ? lista : []).forEach(function(item) {
    const email = String(item || "").trim().toLowerCase();
    if (!email || vistos[email]) {
      return;
    }

    vistos[email] = true;
    salida.push(email);
  });

  return salida;
}

function obtenerNombresSolapasEspeciales_() {
  return SOLAPAS_ESPECIALES.slice();
}

function esSolapaVisibleEnSupervision_(nombreSolapa, solapasEspeciales) {
  // Con el nuevo sistema de asteriscos, esta función es redundante pero la mantenemos
  // simplificada para evitar errores de referencia.
  return nombreSolapa.indexOf("*") !== -1;
}

function obtenerResumenesEspeciales_(ss, nombresSolapas) {
  let resumenes = {};

  nombresSolapas.forEach(nombre => {
    resumenes[nombre] = obtenerResumenSolapaEspecialDesdeOrigen_(ss, nombre);
  });

  return resumenes;
}

function obtenerResumenSolapaEspecial(nombreSolapa, filtros, emailSesion) {
  const acceso = iniciarSesionConCorreo(emailSesion);
  if (!acceso.ok) {
    throw new Error(acceso.mensaje || "Comunicarse con el administrador.");
  }

  // RBAC: Validar permiso de acceso a la solapa específica
  if (!debeVerSolapa(acceso.perfil, nombreSolapa)) {
    throw new Error("No tienes permisos para acceder al módulo: " + nombreSolapa);
  }

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return obtenerResumenSolapaEspecialDesdeOrigen_(ss, nombreSolapa, filtros);
}

function obtenerResumenSolapaEspecialDesdeOrigen_(ss, nombreSolapa, filtros) {
  if (nombreSolapa === "CRONOGRAMA") {
    return obtenerResumenCronogramaSeguimiento_(ss, filtros);
  }

  const hoja = ss.getSheetByName(nombreSolapa);
  if (nombreSolapa === "TALLERES" && hoja && hoja.getLastRow() >= 2 && hoja.getLastColumn() >= 6) {
    return obtenerResumenTalleresDesdeHojaLocal_(hoja, nombreSolapa, filtros);
  }

  let fuenteExterna = FUENTES_ESPECIALES_EXTERNAS[nombreSolapa];

  if (fuenteExterna) {
    return obtenerResumenSolapaEspecialExterna_(fuenteExterna, nombreSolapa, filtros);
  }

  return obtenerResumenSolapaEspecial_(hoja, nombreSolapa);
}

function obtenerResumenTalleresDesdeHojaLocal_(hoja, nombreSolapa, filtros) {
  const ultimaFila = hoja.getLastRow();
  const ultimaColumna = hoja.getLastColumn();

  if (ultimaFila < 2 || ultimaColumna < 6) {
    return {
      nombre: nombreSolapa,
      disponible: true,
      tipoResumen: "especial_detallado",
      mensaje: "La solapa TALLERES todavia no tiene filas validas con FECHA ACTIVIDAD.",
      ultimaFechaCarga: "",
      fechas: [],
      meses: [],
      etiquetas: {
        cuarta: "Estacion",
        principal: "Profesor",
        secundaria: "Actividad",
        terciaria: "Sector de carga"
      }
    };
  }

  const datos = hoja.getRange(1, 1, ultimaFila, Math.min(6, ultimaColumna)).getDisplayValues();
  let resumen = obtenerResumenActividadExterna_(datos, nombreSolapa);
  resumen.origenDatos = "talleres_local";
  resumen = aplicarFiltrosResumenEspecial_(resumen, filtros);
  return resumirPayloadResumenEspecial_(resumen);
}

function obtenerResumenSolapaEspecialExterna_(fuente, nombreSolapa, filtros) {
  let libroExterno = SpreadsheetApp.openById(fuente.spreadsheetId);
  let hoja = libroExterno.getSheetByName(fuente.sheetName);

  if (!hoja) {
    return {
      nombre: nombreSolapa,
      disponible: false,
      tipoResumen: "especial_detallado",
      mensaje: "No se encontro la solapa " + fuente.sheetName + " en el archivo externo.",
      ultimaFechaCarga: "",
      fechas: [],
      meses: [],
      etiquetas: {
        principal: "Profesor",
        secundaria: "Actividad"
      }
    };
  }

  let ultimaFila = hoja.getLastRow();
  let ultimaColumna = hoja.getLastColumn();

  if (ultimaFila < 2 || ultimaColumna === 0) {
    return {
      nombre: nombreSolapa,
      disponible: true,
      tipoResumen: "especial_detallado",
      mensaje: "La fuente externa todavia no tiene datos.",
      ultimaFechaCarga: "",
      fechas: [],
      meses: [],
      etiquetas: {
        principal: "Profesor",
        secundaria: "Actividad"
      }
    };
  }

  let cantidadColumnas = Math.min(6, ultimaColumna);
  let datos = hoja.getRange(1, 1, ultimaFila, cantidadColumnas).getValues();
  let resumen = obtenerResumenActividadExterna_(datos, nombreSolapa);
  resumen = aplicarFiltrosResumenEspecial_(resumen, filtros);
  return resumirPayloadResumenEspecial_(resumen);
}

function obtenerResumenCronogramaSeguimiento_(ss, filtros) {
  const hojaCronograma = ss.getSheetByName("CRONOGRAMA_NORMALIZADO");
  const hojaControl = ss.getSheetByName("CONTROL_CUMPLIMIENTO");

  if (!hojaCronograma || !hojaControl) {
    return {
      nombre: "CRONOGRAMA",
      disponible: false,
      tipoResumen: "cronograma",
      mensaje: "Faltan las solapas CRONOGRAMA_NORMALIZADO o CONTROL_CUMPLIMIENTO. Importa el cronograma y genera el control primero.",
      ultimaFechaCarga: "",
      totales: {}
    };
  }

  const programados = leerRegistrosCronogramaSeguimiento_(hojaCronograma);
  const controles = leerRegistrosControlSeguimiento_(hojaControl);

  if (!programados.length && !controles.length) {
    return {
      nombre: "CRONOGRAMA",
      disponible: true,
      tipoResumen: "cronograma",
      mensaje: "Todavia no hay datos en CRONOGRAMA_NORMALIZADO ni CONTROL_CUMPLIMIENTO.",
      ultimaFechaCarga: "",
      totales: {}
    };
  }

  const filtrosNormalizados = normalizarFiltrosCronogramaSeguimiento_(filtros);
  const programadosFiltrados = programados.filter(function(item) {
    return coincideFiltrosCronogramaProgramado_(item, filtrosNormalizados);
  });
  const programadosFiltradosUnicos = deduplicarProgramadosSeguimiento_(programadosFiltrados);
  const controlesFiltrados = controles.filter(function(item) {
    return coincideFiltrosCronogramaControl_(item, filtrosNormalizados);
  });
  const totales = construirTotalesCronogramaSeguimiento_(programadosFiltradosUnicos, controlesFiltrados);

  return {
    nombre: "CRONOGRAMA",
    disponible: true,
    tipoResumen: "cronograma",
    mensaje: programadosFiltrados.length || controlesFiltrados.length
      ? ""
      : "No hay filas que coincidan con los filtros seleccionados.",
    ultimaFechaCarga: totales.ultimaFechaReal || "",
    filtrosAplicados: filtrosNormalizados,
    filtrosDisponibles: construirFiltrosDisponiblesCronograma_(programados, controles),
    totales: totales,
    resultados: construirResultadosCronogramaSeguimiento_(controlesFiltrados),
    estaciones: construirAgrupadoCronogramaSeguimiento_(programadosFiltradosUnicos, controlesFiltrados, "estacion"),
    actividades: construirAgrupadoCronogramaSeguimiento_(programadosFiltradosUnicos, controlesFiltrados, "actividad"),
    dias: construirAgrupadoCronogramaSeguimiento_(programadosFiltradosUnicos, controlesFiltrados, "diaSemana"),
    fechas: construirSerieFechasCronogramaSeguimiento_(controlesFiltrados),
    incidencias: construirIncidenciasCronogramaSeguimiento_(controlesFiltrados)
  };
}

function leerRegistrosCronogramaSeguimiento_(hoja) {
  const ultimaFila = hoja.getLastRow();
  const ultimaColumna = hoja.getLastColumn();

  if (ultimaFila < 2 || ultimaColumna < CABECERAS_CRONOGRAMA_NORMALIZADO.length) {
    return [];
  }

  const datos = hoja.getRange(2, 1, ultimaFila - 1, CABECERAS_CRONOGRAMA_NORMALIZADO.length).getDisplayValues();

  return datos.map(function(fila) {
    const estacion = limpiarTexto_(fila[0]);
    return {
      estacion: estacion,
      estacionCanonica: obtenerNombreEstacionCanonicoSeguimiento_(estacion),
      fechaProgramada: normalizarFechaCarga_(fila[12]),
      diaSemana: limpiarTexto_(fila[1]).toUpperCase(),
      horaInicio: limpiarTexto_(fila[2]),
      horaFin: limpiarTexto_(fila[3]),
      actividad: limpiarTexto_(fila[4]),
      profesor: limpiarTexto_(fila[5]),
      categoriaActividad: limpiarTexto_(fila[13]),
      excluidaCruce: limpiarTexto_(fila[14]) === "SI",
      codigoCruce: limpiarTexto_(fila[15])
    };
  }).filter(function(item) {
    return item.estacion && item.diaSemana && item.actividad && item.fechaProgramada && !item.excluidaCruce;
  });
}

function leerRegistrosControlSeguimiento_(hoja) {
  const ultimaFila = hoja.getLastRow();
  const ultimaColumna = hoja.getLastColumn();

  if (ultimaFila < 2 || ultimaColumna < CABECERAS_CONTROL_CUMPLIMIENTO.length) {
    return [];
  }

  const datos = hoja.getRange(2, 1, ultimaFila - 1, CABECERAS_CONTROL_CUMPLIMIENTO.length).getDisplayValues();

  return datos.map(function(fila) {
    const detalle = limpiarTexto_(fila[13]);
    const estacionReal = limpiarTexto_(fila[2]);
    const estacionProgramada = limpiarTexto_(fila[6]);
    return {
      fechaReal: limpiarTexto_(fila[0]),
      diaSemanaReal: limpiarTexto_(fila[1]).toUpperCase(),
      estacionReal: estacionReal,
      estacionRealCanonica: obtenerNombreEstacionCanonicoSeguimiento_(estacionReal),
      actividadReal: limpiarTexto_(fila[3]),
      profesorReal: limpiarTexto_(fila[4]),
      sectorDeCarga: limpiarTexto_(fila[5]),
      estacionProgramada: estacionProgramada,
      estacionProgramadaCanonica: obtenerNombreEstacionCanonicoSeguimiento_(estacionProgramada),
      diaSemanaProgramado: limpiarTexto_(fila[7]).toUpperCase(),
      horaInicioProgramada: limpiarTexto_(fila[8]),
      horaFinProgramada: limpiarTexto_(fila[9]),
      actividadProgramada: limpiarTexto_(fila[10]),
      profesorProgramado: limpiarTexto_(fila[11]),
      resultadoCruce: limpiarTexto_(fila[12]),
      detalle: detalle,
      claveCruce: limpiarTexto_(fila[14]),
      categoriaReal: limpiarTexto_(fila[15]),
      excluidaReal: limpiarTexto_(fila[16]) === "SI",
      codigoReal: limpiarTexto_(fila[17]),
      codigoProgramado: limpiarTexto_(fila[18]),
      profesorDistinto: false
    };
  }).filter(function(item) {
    return item.resultadoCruce && !item.excluidaReal;
  });
}

function normalizarFiltrosCronogramaSeguimiento_(filtros) {
  const origen = filtros || {};
  const estacion = limpiarTexto_(origen.estacion || "");

  return {
    estacion: obtenerNombreEstacionCanonicoSeguimiento_(estacion),
    actividad: limpiarTexto_(origen.actividad || ""),
    dia: limpiarTexto_(origen.dia || "").toUpperCase(),
    resultado: limpiarTexto_(origen.resultado || "")
  };
}

function coincideFiltrosCronogramaProgramado_(item, filtros) {
  if (filtros.estacion && obtenerNombreEstacionCanonicoSeguimiento_(item.estacionCanonica || item.estacion) !== filtros.estacion) return false;
  if (filtros.actividad && limpiarTexto_(item.actividad) !== filtros.actividad) return false;
  if (filtros.dia && limpiarTexto_(item.diaSemana).toUpperCase() !== filtros.dia) return false;
  return true;
}

function coincideFiltrosCronogramaControl_(item, filtros) {
  const estacionBase = obtenerNombreEstacionCanonicoSeguimiento_(
    item.estacionProgramadaCanonica || item.estacionProgramada || item.estacionRealCanonica || item.estacionReal
  );
  const actividadBase = limpiarTexto_(item.actividadProgramada || item.actividadReal);
  const diaBase = limpiarTexto_(item.diaSemanaProgramado || item.diaSemanaReal).toUpperCase();

  if (filtros.estacion && estacionBase !== filtros.estacion) return false;
  if (filtros.actividad && actividadBase !== filtros.actividad) return false;
  if (filtros.dia && diaBase !== filtros.dia) return false;
  if (filtros.resultado && item.resultadoCruce !== filtros.resultado) return false;
  return true;
}

function construirTotalesCronogramaSeguimiento_(programados, controles) {
  let realizadas = 0;
  let noCargadas = 0;
  let fueraCronograma = 0;
  let profesorDistinto = 0;
  let ultimaFechaReal = "";
  let ultimaFechaOrden = 0;

  controles.forEach(function(item) {
    if (item.resultadoCruce === "PROGRAMADO_Y_REALIZADO") realizadas++;
    if (item.resultadoCruce === "PROGRAMADO_NO_CARGADO") noCargadas++;
    if (item.resultadoCruce === "CARGADO_FUERA_DE_CRONOGRAMA") fueraCronograma++;
    if (item.profesorDistinto) profesorDistinto++;

    const fechaBase = item.fechaReal || extraerFechaTextoDesdeCodigoComparacion_(item.codigoProgramado);
    const orden = convertirFechaTextoAOrden_(fechaBase);
    if (orden && orden > ultimaFechaOrden) {
      ultimaFechaOrden = orden;
      ultimaFechaReal = fechaBase;
    }
  });

  const totalProgramadas = programados.length;
  const cumplimientoPorcentaje = totalProgramadas
    ? Math.round((realizadas / totalProgramadas) * 1000) / 10
    : 0;

  return {
    totalProgramadas: totalProgramadas,
    realizadas: realizadas,
    noCargadas: noCargadas,
    fueraCronograma: fueraCronograma,
    profesorDistinto: profesorDistinto,
    cumplimientoPorcentaje: cumplimientoPorcentaje,
    ultimaFechaReal: ultimaFechaReal
  };
}

function construirResultadosCronogramaSeguimiento_(controles) {
  const mapa = {};
  controles.forEach(function(item) {
    incrementarConteo_(mapa, item.resultadoCruce || "Sin dato");
  });
  return convertirMapaConteosALista_(mapa);
}

function construirAgrupadoCronogramaSeguimiento_(programados, controles, campo) {
  const mapa = {};

  function asegurar(nombre) {
    const clave = limpiarTexto_(nombre || "") || "Sin dato";
    if (!mapa[clave]) {
      mapa[clave] = {
        nombre: clave,
        programadas: 0,
        realizadas: 0,
        noCargadas: 0,
        fueraCronograma: 0,
        profesorDistinto: 0,
        cumplimientoPorcentaje: 0
      };
    }
    return mapa[clave];
  }

  programados.forEach(function(item) {
    let nombre = campo === "estacion"
      ? (item.estacionCanonica || item.estacion)
      : campo === "actividad"
        ? item.actividad
        : item.diaSemana;
    asegurar(nombre).programadas++;
  });

  controles.forEach(function(item) {
    let nombre = campo === "estacion"
      ? (item.estacionProgramadaCanonica || item.estacionProgramada || item.estacionRealCanonica || item.estacionReal)
      : campo === "actividad"
        ? (item.actividadProgramada || item.actividadReal)
        : (item.diaSemanaProgramado || item.diaSemanaReal);
    let fila = asegurar(nombre);

    if (item.resultadoCruce === "PROGRAMADO_Y_REALIZADO") fila.realizadas++;
    if (item.resultadoCruce === "PROGRAMADO_NO_CARGADO") fila.noCargadas++;
    if (item.resultadoCruce === "CARGADO_FUERA_DE_CRONOGRAMA") fila.fueraCronograma++;
    if (item.profesorDistinto) fila.profesorDistinto++;
  });

  return Object.keys(mapa).map(function(nombre) {
    let item = mapa[nombre];
    item.cumplimientoPorcentaje = item.programadas
      ? Math.round((item.realizadas / item.programadas) * 1000) / 10
      : 0;
    return item;
  }).sort(function(a, b) {
    if (b.noCargadas !== a.noCargadas) return b.noCargadas - a.noCargadas;
    if (b.fueraCronograma !== a.fueraCronograma) return b.fueraCronograma - a.fueraCronograma;
    return a.nombre.localeCompare(b.nombre);
  });
}

function construirSerieFechasCronogramaSeguimiento_(controles) {
  const mapa = {};

  controles.forEach(function(item) {
    const fechaBase = item.fechaReal || extraerFechaTextoDesdeCodigoComparacion_(item.codigoProgramado);
    if (!fechaBase) return;
    if (!mapa[fechaBase]) {
      mapa[fechaBase] = {
        fecha: fechaBase,
        orden: convertirFechaTextoAOrden_(fechaBase),
        realizadas: 0,
        noCargadas: 0,
        fueraCronograma: 0,
        profesorDistinto: 0
      };
    }

    if (item.resultadoCruce === "PROGRAMADO_Y_REALIZADO") mapa[fechaBase].realizadas++;
    if (item.resultadoCruce === "PROGRAMADO_NO_CARGADO") mapa[fechaBase].noCargadas++;
    if (item.resultadoCruce === "CARGADO_FUERA_DE_CRONOGRAMA") mapa[fechaBase].fueraCronograma++;
    if (item.profesorDistinto) mapa[fechaBase].profesorDistinto++;
  });

  return Object.keys(mapa).map(function(fecha) {
    return mapa[fecha];
  }).sort(function(a, b) {
    return b.orden - a.orden;
  }).slice(0, 60);
}

function construirIncidenciasCronogramaSeguimiento_(controles) {
  return controles.filter(function(item) {
    return item.resultadoCruce !== "PROGRAMADO_Y_REALIZADO" || item.profesorDistinto;
  }).sort(function(a, b) {
    const fechaB = b.fechaReal || extraerFechaTextoDesdeCodigoComparacion_(b.codigoProgramado);
    const fechaA = a.fechaReal || extraerFechaTextoDesdeCodigoComparacion_(a.codigoProgramado);
    const ordenB = convertirFechaTextoAOrden_(fechaB) || 0;
    const ordenA = convertirFechaTextoAOrden_(fechaA) || 0;
    return ordenB - ordenA;
  }).slice(0, 120).map(function(item) {
    return {
      fecha: item.fechaReal || extraerFechaTextoDesdeCodigoComparacion_(item.codigoProgramado) || "",
      estacion: item.estacionProgramada || item.estacionReal || "",
      dia: item.diaSemanaProgramado || item.diaSemanaReal || "",
      actividad: item.actividadProgramada || item.actividadReal || "",
      resultado: item.resultadoCruce || "",
      detalle: item.detalle || "",
      profesorReal: item.profesorReal || "",
      profesorProgramado: item.profesorProgramado || "",
      hora: item.horaInicioProgramada || ""
    };
  });
}

function construirFiltrosDisponiblesCronograma_(programados, controles) {
  const estaciones = {};
  const actividades = {};
  const dias = {};
  const resultados = {};

  programados.forEach(function(item) {
    const estacion = item.estacionCanonica || item.estacion;
    if (estacion) estaciones[estacion] = true;
    if (item.actividad) actividades[item.actividad] = true;
    if (item.diaSemana) dias[item.diaSemana] = true;
  });

  controles.forEach(function(item) {
    const estacion = item.estacionProgramadaCanonica || item.estacionProgramada || item.estacionRealCanonica || item.estacionReal;
    const actividad = item.actividadProgramada || item.actividadReal;
    const dia = item.diaSemanaProgramado || item.diaSemanaReal;

    if (estacion) estaciones[estacion] = true;
    if (actividad) actividades[actividad] = true;
    if (dia) dias[dia] = true;
    if (item.resultadoCruce) resultados[item.resultadoCruce] = true;
  });

  return {
    estaciones: Object.keys(estaciones).sort(function(a, b) { return a.localeCompare(b); }),
    actividades: Object.keys(actividades).sort(function(a, b) { return a.localeCompare(b); }),
    dias: Object.keys(dias).sort(function(a, b) { return a.localeCompare(b); }),
    resultados: Object.keys(resultados).sort(function(a, b) { return a.localeCompare(b); })
  };
}

function obtenerNombreEstacionCanonicoSeguimiento_(estacion) {
  return obtenerNombreEstacionVisible_(estacion);
}

function construirClaveProgramacionUnicaSeguimiento_(item) {
  if (!item) return "";
  const fecha = normalizarFechaCarga_(item.fechaProgramada || "");
  const estacion = obtenerNombreEstacionCanonicoSeguimiento_(item.estacionCanonica || item.estacion || "");
  const actividad = limpiarTexto_(item.actividad || "");
  const base = [
    fecha,
    estacion,
    actividad
  ].join("|");
  return normalizarTexto_(base).replace(/\s+/g, "");
}

function deduplicarProgramadosSeguimiento_(programados) {
  const lista = Array.isArray(programados) ? programados : [];
  const mapa = {};
  const resultado = [];

  lista.forEach(function(item) {
    const clave = construirClaveProgramacionUnicaSeguimiento_(item);
    if (!clave || mapa[clave]) return;
    mapa[clave] = true;
    resultado.push(item);
  });

  return resultado;
}

function obtenerNombreEstacionVisible_(estacion) {
  const limpio = limpiarTexto_(estacion || "");
  if (!limpio) return "";

  const normalizada = normalizarTexto_(limpio).toUpperCase();
  const mapa = obtenerMapaEstacionesVisibles_();
  if (mapa[normalizada]) {
    return mapa[normalizada];
  }

  const equivalencias = combinarEquivalenciasEstaciones_();
  const nombres = Object.keys(equivalencias);

  for (let i = 0; i < nombres.length; i++) {
    const nombre = nombres[i];
    const alias = equivalencias[nombre] || [];
    const valores = [nombre].concat(alias);
    const coincide = valores.some(function(item) {
      return normalizarTexto_(item).toUpperCase() === normalizada;
    });

    if (coincide) {
      return limpiarTexto_(nombre);
    }
  }

  return limpio;
}

function obtenerMapaEstacionesVisibles_() {
  if (cacheMapaEstacionesVisibles_) {
    return cacheMapaEstacionesVisibles_;
  }

  const mapa = {};

  function registrar(canonica, valor) {
    const limpioCanonico = limpiarTexto_(canonica || "");
    const limpioValor = limpiarTexto_(valor || "");
    if (!limpioCanonico || !limpioValor) return;

    const clave = normalizarTexto_(limpioValor).toUpperCase();
    if (!clave) return;

    mapa[clave] = limpioCanonico;

    const simplificada = simplificarNombreEstacionParaCruce_(limpioValor);
    if (simplificada) {
      mapa[simplificada] = limpioCanonico;
    }
  }

  ESTACIONES_SALUDABLES_VISIBLES.forEach(function(canonica) {
    registrar(canonica, canonica);

    const base = limpiarTexto_(canonica)
      .replace(/^Estaciones?\s+Saludables?\s+/i, "")
      .replace(/^Estaci(?:o|ó)n\s+Saludable\s+/i, "")
      .trim();

    registrar(canonica, base);

    (ALIAS_ESTACIONES_SALUDABLES_VISIBLES[canonica] || []).forEach(function(alias) {
      registrar(canonica, alias);
    });
  });

  cacheMapaEstacionesVisibles_ = mapa;
  return mapa;
}

function obtenerResumenSolapaEspecial_(hoja, nombreSolapa) {
  if (!hoja) {
    return {
      nombre: nombreSolapa,
      disponible: false,
      mensaje: "La solapa no existe en este archivo.",
      ultimaFechaCarga: "",
      fechas: []
    };
  }

  let ultimaFila = hoja.getLastRow();
  let ultimaColumna = hoja.getLastColumn();

  if (ultimaFila < 2 || ultimaColumna === 0) {
    return {
      nombre: nombreSolapa,
      disponible: true,
      mensaje: "La solapa todavia no tiene datos.",
      ultimaFechaCarga: "",
      fechas: []
    };
  }

  let datos = hoja.getRange(1, 1, ultimaFila, ultimaColumna).getDisplayValues();
  let encabezadosOriginales = datos[0].map(limpiarTexto_);
  let encabezados = encabezadosOriginales.map(normalizarTexto_);

  if (esSolapaEspecialDetallada_(nombreSolapa)) {
    return obtenerResumenEspecialDetallado_(datos, encabezados, encabezadosOriginales, nombreSolapa);
  }

  let idxFechaCarga = buscarIndiceEncabezado_(encabezados, [
    "fecha de carga",
    "fecha carga"
  ]);
  let idxDocumento = buscarIndiceEncabezado_(encabezados, [
    "numero documento",
    "n documento",
    "dni",
    "documento"
  ]);
  let idxNombre = buscarIndiceEncabezado_(encabezados, ["nombre"]);
  let idxApellido = buscarIndiceEncabezado_(encabezados, ["apellido"]);

  if (idxFechaCarga === -1) {
    return {
      nombre: nombreSolapa,
      disponible: true,
      mensaje: "No se encontro la columna FECHA DE CARGA.",
      ultimaFechaCarga: "",
      fechas: []
    };
  }

  let agrupado = {};
  let ultimaFecha = null;

  for (let i = 1; i < datos.length; i++) {
    let fila = datos[i];
    let fechaCargaCruda = fila[idxFechaCarga];
    let fechaClave = normalizarFechaCarga_(fechaCargaCruda);

    if (!fechaClave) continue;

    if (!agrupado[fechaClave]) {
      agrupado[fechaClave] = {
        fechaCarga: fechaClave,
        prestaciones: 0,
        personasSet: {}
      };
    }

    agrupado[fechaClave].prestaciones++;

    let personaId = obtenerIdentificadorPersona_(fila, idxDocumento, idxNombre, idxApellido);
    if (personaId) {
      agrupado[fechaClave].personasSet[personaId] = true;
    }

    let fechaOrden = convertirFechaTextoAOrden_(fechaClave);
    if (!ultimaFecha || fechaOrden > ultimaFecha.orden) {
      ultimaFecha = {
        texto: fechaClave,
        orden: fechaOrden
      };
    }
  }

  let fechas = Object.keys(agrupado).map(fecha => {
    return {
      fechaCarga: fecha,
      personasUnicas: Object.keys(agrupado[fecha].personasSet).length,
      prestaciones: agrupado[fecha].prestaciones,
      orden: convertirFechaTextoAOrden_(fecha)
    };
  });

  fechas.sort((a, b) => b.orden - a.orden);

  return {
    nombre: nombreSolapa,
    disponible: true,
    mensaje: fechas.length ? "" : "La solapa todavia no tiene filas validas con fecha de carga.",
    ultimaFechaCarga: ultimaFecha ? ultimaFecha.texto : "",
    fechas: fechas
  };
}

function obtenerResumenEspecialDetallado_(datos, encabezados, encabezadosOriginales, nombreSolapa) {
  let idxFechaCarga = buscarIndiceEncabezado_(encabezados, [
    "fecha de carga",
    "fecha carga"
  ]);
  let idxFechaPlanilla = buscarIndiceEncabezado_(encabezados, [
    "fecha planilla",
    "fecha de planilla"
  ]);
  let idxDocumento = buscarIndiceEncabezado_(encabezados, [
    "numero de documento",
    "numero documento",
    "n documento",
    "dni",
    "documento"
  ]);
  let idxNombre = buscarIndiceEncabezado_(encabezados, ["nombre"]);
  let idxApellido = buscarIndiceEncabezado_(encabezados, ["apellido"]);
  let columnaPrincipal = buscarColumnaResumenEspecial_(encabezados, encabezadosOriginales, [
    "prof",
    "profesor",
    "docente",
    "referente",
    "coordinador",
    "coordinadora",
    "guia",
    "responsable",
    "tallerista",
    "animador",
    "equipo"
  ], "Referente");
  let columnaSecundaria = buscarColumnaResumenEspecial_(encabezados, encabezadosOriginales, [
    "tipo de actividad",
    "actividad",
    "nombre de actividad",
    "taller",
    "tematica",
    "tema",
    "evento",
    "tipo de evento",
    "propuesta",
    "experiencia",
    "recorrido",
    "categoria"
  ], "Actividad");

  if (idxFechaCarga === -1) {
    return {
      nombre: nombreSolapa,
      disponible: true,
      tipoResumen: "especial_detallado",
      mensaje: "No se encontro la columna FECHA DE CARGA.",
      ultimaFechaCarga: "",
      fechas: [],
      meses: [],
      etiquetas: obtenerEtiquetasResumenEspecial_(columnaPrincipal, columnaSecundaria)
    };
  }

  if (idxFechaPlanilla === -1) {
    return {
      nombre: nombreSolapa,
      disponible: true,
      tipoResumen: "especial_detallado",
      mensaje: "No se encontro la columna FECHA PLANILLA.",
      ultimaFechaCarga: "",
      fechas: [],
      meses: [],
      etiquetas: obtenerEtiquetasResumenEspecial_(columnaPrincipal, columnaSecundaria)
    };
  }

  let mesesMap = {};
  let ultimaFecha = null;
  let totalPrestacionesArchivo = 0;
  let totalFilasConFechaPlanilla = 0;

  for (let i = 1; i < datos.length; i++) {
    let fila = datos[i];
    let fechaCarga = normalizarFechaCarga_(fila[idxFechaCarga]);
    let fechaPlanilla = normalizarFechaCarga_(fila[idxFechaPlanilla]);

    if (fechaCarga) {
      let fechaOrden = convertirFechaTextoAOrden_(fechaCarga);
      if (!ultimaFecha || fechaOrden > ultimaFecha.orden) {
        ultimaFecha = {
          texto: fechaCarga,
          orden: fechaOrden
        };
      }
    }

    if (!fechaPlanilla) continue;

    let mesClave = obtenerClaveMesDesdeFecha_(fechaPlanilla);
    if (!mesClave) continue;

    totalPrestacionesArchivo++;
    totalFilasConFechaPlanilla++;

    if (!mesesMap[mesClave]) {
      mesesMap[mesClave] = {
        mesClave: mesClave,
        mesTexto: formatearMesClave_(mesClave),
        orden: obtenerOrdenMes_(mesClave),
        prestacionesTotales: 0,
        personasMesSet: {},
        profesoresMap: {},
        actividadesMap: {},
        diasMap: {}
      };
    }

    let mes = mesesMap[mesClave];
    let personaId = obtenerIdentificadorPersona_(fila, idxDocumento, idxNombre, idxApellido);
    let principal = limpiarTexto_(columnaPrincipal.indice > -1 ? fila[columnaPrincipal.indice] : "") || "Sin dato";
    let secundaria = limpiarTexto_(columnaSecundaria.indice > -1 ? fila[columnaSecundaria.indice] : "") || "Sin dato";

    mes.prestacionesTotales++;
    incrementarConteo_(mes.profesoresMap, principal);
    incrementarConteo_(mes.actividadesMap, secundaria);

    if (personaId) {
      mes.personasMesSet[personaId] = true;
    }

    if (!mes.diasMap[fechaPlanilla]) {
      mes.diasMap[fechaPlanilla] = {
        fechaPlanilla: fechaPlanilla,
        orden: convertirFechaTextoAOrden_(fechaPlanilla),
        prestaciones: 0,
        personasSet: {},
        profesoresMap: {},
        actividadesMap: {}
      };
    }

    let dia = mes.diasMap[fechaPlanilla];
    dia.prestaciones++;
    incrementarConteo_(dia.profesoresMap, principal);
    incrementarConteo_(dia.actividadesMap, secundaria);

    if (personaId) {
      dia.personasSet[personaId] = true;
    }
  }

  let meses = Object.keys(mesesMap).map(function(mesClave) {
    let mes = mesesMap[mesClave];
    let dias = Object.keys(mes.diasMap).map(function(fechaPlanilla) {
      let dia = mes.diasMap[fechaPlanilla];
      return {
        fechaPlanilla: fechaPlanilla,
        orden: dia.orden,
        prestaciones: dia.prestaciones,
        personasUnicas: Object.keys(dia.personasSet).length,
        profesores: convertirMapaConteosALista_(dia.profesoresMap),
        actividades: convertirMapaConteosALista_(dia.actividadesMap)
      };
    });

    dias.sort(function(a, b) {
      return b.orden - a.orden;
    });

    return {
      mesClave: mes.mesClave,
      mesTexto: mes.mesTexto,
      orden: mes.orden,
      prestacionesTotales: mes.prestacionesTotales,
      personasUnicasMes: Object.keys(mes.personasMesSet).length,
      fechasConCarga: dias.length,
      profesores: convertirMapaConteosALista_(mes.profesoresMap),
      actividades: convertirMapaConteosALista_(mes.actividadesMap),
      dias: dias
    };
  });

  meses.sort(function(a, b) {
    return b.orden - a.orden;
  });

  let fechas = [];
  meses.forEach(function(mes) {
    mes.dias.forEach(function(dia) {
      fechas.push({
        fechaCarga: dia.fechaPlanilla,
        personasUnicas: dia.personasUnicas,
        prestaciones: dia.prestaciones,
        orden: dia.orden
      });
    });
  });

  fechas.sort(function(a, b) {
    return b.orden - a.orden;
  });

  return {
    nombre: nombreSolapa,
    disponible: true,
    tipoResumen: "especial_detallado",
    mensaje: meses.length ? "" : "La solapa todavia no tiene filas validas con FECHA PLANILLA.",
    ultimaFechaCarga: ultimaFecha ? ultimaFecha.texto : "",
    totalPrestacionesArchivo: totalPrestacionesArchivo,
    totalFilasConFechaPlanilla: totalFilasConFechaPlanilla,
    etiquetas: obtenerEtiquetasResumenEspecial_(columnaPrincipal, columnaSecundaria),
    meses: meses,
    fechas: fechas
  };
}

function obtenerResumenActividadExterna_(datos, nombreSolapa) {
  let registros = [];
  let ultimaFecha = null;

  for (let i = 1; i < datos.length; i++) {
    let fila = datos[i] || [];
    let dni = limpiarTexto_(fila[0]);
    let fechaActividad = normalizarFechaCarga_(fila[1]);
    let estacion = limpiarTexto_(fila[2]) || "Sin dato";
    let profesor = limpiarTexto_(fila[3]) || "Sin dato";
    let actividad = limpiarTexto_(fila[4]) || "Sin dato";
    let sector = limpiarTexto_(fila[5]) || "Sin dato";

    if (!fechaActividad) continue;

    let fechaOrden = convertirFechaTextoAOrden_(fechaActividad);
    if (!ultimaFecha || fechaOrden > ultimaFecha.orden) {
      ultimaFecha = {
        texto: fechaActividad,
        orden: fechaOrden
      };
    }

    let personaId = dni ? "DOC:" + dni.replace(/[^\d]/g, "") : "";
    registros.push({
      dni: dni,
      personaId: personaId,
      fechaPlanilla: fechaActividad,
      mesClave: obtenerClaveMesDesdeFecha_(fechaActividad),
      estacion: estacion,
      profesor: profesor,
      actividad: actividad,
      sector: sector
    });
  }

  return construirResumenActividadExternaDesdeRegistros_(registros, nombreSolapa, ultimaFecha ? ultimaFecha.texto : "");
}

function construirResumenActividadExternaDesdeRegistros_(registros, nombreSolapa, ultimaFechaTexto) {
  let listaRegistros = Array.isArray(registros) ? registros : [];
  let ultimaFechaCalculada = "";
  let ultimaFechaOrden = 0;
  let totalPrestacionesArchivo = listaRegistros.length;
  let totalFilasConFechaPlanilla = listaRegistros.length;
  let mesesMap = {};

  listaRegistros.forEach(function(registro) {
    let mesClave = registro.mesClave;
    if (!mesClave) return;

    let ordenRegistro = convertirFechaTextoAOrden_(registro.fechaPlanilla);
    if (ordenRegistro > ultimaFechaOrden) {
      ultimaFechaOrden = ordenRegistro;
      ultimaFechaCalculada = registro.fechaPlanilla;
    }

    if (!mesesMap[mesClave]) {
      mesesMap[mesClave] = {
        mesClave: mesClave,
        mesTexto: formatearMesClave_(mesClave),
        orden: obtenerOrdenMes_(mesClave),
        prestacionesTotales: 0,
        personasMesSet: {},
        estacionesMap: {},
        profesoresMap: {},
        actividadesMap: {},
        sectoresMap: {},
        diasMap: {}
      };
    }

    let mes = mesesMap[mesClave];
    mes.prestacionesTotales++;
    incrementarConteo_(mes.estacionesMap, registro.estacion || "Sin dato");
    incrementarConteo_(mes.profesoresMap, registro.profesor || "Sin dato");
    incrementarConteo_(mes.actividadesMap, registro.actividad || "Sin dato");
    incrementarConteo_(mes.sectoresMap, registro.sector || "Sin dato");

    if (registro.personaId) {
      mes.personasMesSet[registro.personaId] = true;
    }

    if (!mes.diasMap[registro.fechaPlanilla]) {
      mes.diasMap[registro.fechaPlanilla] = {
        fechaPlanilla: registro.fechaPlanilla,
        orden: convertirFechaTextoAOrden_(registro.fechaPlanilla),
        prestaciones: 0,
        personasSet: {},
        estacionesMap: {},
        profesoresMap: {},
        actividadesMap: {},
        sectoresMap: {}
      };
    }

    let dia = mes.diasMap[registro.fechaPlanilla];
    dia.prestaciones++;
    incrementarConteo_(dia.estacionesMap, registro.estacion || "Sin dato");
    incrementarConteo_(dia.profesoresMap, registro.profesor || "Sin dato");
    incrementarConteo_(dia.actividadesMap, registro.actividad || "Sin dato");
    incrementarConteo_(dia.sectoresMap, registro.sector || "Sin dato");

    if (registro.personaId) {
      dia.personasSet[registro.personaId] = true;
    }
  });

  let meses = Object.keys(mesesMap).map(function(mesClave) {
    let mes = mesesMap[mesClave];
    let dias = Object.keys(mes.diasMap).map(function(fechaPlanilla) {
      let dia = mes.diasMap[fechaPlanilla];
      return {
        fechaPlanilla: fechaPlanilla,
        orden: dia.orden,
        prestaciones: dia.prestaciones,
        personasUnicas: Object.keys(dia.personasSet).length,
        estaciones: convertirMapaConteosALista_(dia.estacionesMap),
        profesores: convertirMapaConteosALista_(dia.profesoresMap),
        actividades: convertirMapaConteosALista_(dia.actividadesMap),
        sectores: convertirMapaConteosALista_(dia.sectoresMap)
      };
    });

    dias.sort(function(a, b) {
      return b.orden - a.orden;
    });

    return {
      mesClave: mes.mesClave,
      mesTexto: mes.mesTexto,
      orden: mes.orden,
      prestacionesTotales: mes.prestacionesTotales,
      personasUnicasMes: Object.keys(mes.personasMesSet).length,
      fechasConCarga: dias.length,
      estaciones: convertirMapaConteosALista_(mes.estacionesMap),
      profesores: convertirMapaConteosALista_(mes.profesoresMap),
      actividades: convertirMapaConteosALista_(mes.actividadesMap),
      sectores: convertirMapaConteosALista_(mes.sectoresMap),
      dias: dias
    };
  });

  meses.sort(function(a, b) {
    return b.orden - a.orden;
  });

  let fechas = [];
  meses.forEach(function(mes) {
    mes.dias.forEach(function(dia) {
      fechas.push({
        fechaCarga: dia.fechaPlanilla,
        personasUnicas: dia.personasUnicas,
        prestaciones: dia.prestaciones,
        orden: dia.orden
      });
    });
  });

  fechas.sort(function(a, b) {
    return b.orden - a.orden;
  });

  return {
    nombre: nombreSolapa,
    disponible: true,
    tipoResumen: "especial_detallado",
    origenDatos: "actividad_externa",
    tieneFiltrosAvanzados: true,
    mensaje: meses.length ? "" : "La fuente externa todavia no tiene filas validas con FECHA ACTIVIDAD.",
    ultimaFechaCarga: ultimaFechaCalculada || ultimaFechaTexto || "",
    totalPrestacionesArchivo: totalPrestacionesArchivo,
    totalFilasConFechaPlanilla: totalFilasConFechaPlanilla,
    etiquetas: {
      cuarta: "Estacion",
      principal: "Profesor",
      secundaria: "Actividad",
      terciaria: "Sector de carga"
    },
    filtrosDisponibles: {
      estaciones: construirOpcionesFiltroDesdeRegistros_(listaRegistros, "estacion"),
      profesores: construirOpcionesFiltroDesdeRegistros_(listaRegistros, "profesor"),
      actividades: construirOpcionesFiltroDesdeRegistros_(listaRegistros, "actividad"),
      sectores: construirOpcionesFiltroDesdeRegistros_(listaRegistros, "sector")
    },
    registros: listaRegistros,
    meses: meses,
    fechas: fechas
  };
}

function construirOpcionesFiltroDesdeRegistros_(registros, campo) {
  let mapa = {};

  (Array.isArray(registros) ? registros : []).forEach(function(registro) {
    let valor = limpiarTexto_(registro && registro[campo]);
    if (valor) {
      mapa[valor] = true;
    }
  });

  return Object.keys(mapa).sort(function(a, b) {
    return a.localeCompare(b);
  });
}

function normalizarFiltrosResumenEspecial_(filtros) {
  let origen = filtros || {};

  return {
    estacion: limpiarTexto_(origen.estacion || ""),
    profesor: limpiarTexto_(origen.profesor || ""),
    actividad: limpiarTexto_(origen.actividad || ""),
    sector: limpiarTexto_(origen.sector || "")
  };
}

function aplicarFiltrosResumenEspecial_(resumen, filtros) {
  if (!resumen || !Array.isArray(resumen.registros)) {
    return resumen;
  }

  let filtrosNormalizados = normalizarFiltrosResumenEspecial_(filtros);
  let registrosBase = resumen.registros;
  let hayFiltros = Object.keys(filtrosNormalizados).some(function(clave) {
    return !!filtrosNormalizados[clave];
  });

  if (!hayFiltros) {
    return resumen;
  }

  let registrosFiltrados = registrosBase.filter(function(registro) {
    if (filtrosNormalizados.estacion && limpiarTexto_(registro.estacion) !== filtrosNormalizados.estacion) return false;
    if (filtrosNormalizados.profesor && limpiarTexto_(registro.profesor) !== filtrosNormalizados.profesor) return false;
    if (filtrosNormalizados.actividad && limpiarTexto_(registro.actividad) !== filtrosNormalizados.actividad) return false;
    if (filtrosNormalizados.sector && limpiarTexto_(registro.sector) !== filtrosNormalizados.sector) return false;
    return true;
  });

  let filtrosDisponiblesDinamicos = construirFiltrosDisponiblesDinamicosResumenEspecial_(registrosBase, filtrosNormalizados);
  let resumenFiltrado = construirResumenActividadExternaDesdeRegistros_(
    registrosFiltrados,
    resumen.nombre,
    resumen.ultimaFechaCarga || ""
  );
  resumenFiltrado.filtrosAplicados = filtrosNormalizados;
  resumenFiltrado.filtrosDisponibles = filtrosDisponiblesDinamicos;
  return resumenFiltrado;
}

function construirFiltrosDisponiblesDinamicosResumenEspecial_(registros, filtros) {
  let lista = Array.isArray(registros) ? registros : [];
  let filtrosNormalizados = normalizarFiltrosResumenEspecial_(filtros);

  function coincideConOtrosFiltros_(registro, campoIgnorado) {
    if (campoIgnorado !== "estacion" && filtrosNormalizados.estacion && limpiarTexto_(registro.estacion) !== filtrosNormalizados.estacion) return false;
    if (campoIgnorado !== "profesor" && filtrosNormalizados.profesor && limpiarTexto_(registro.profesor) !== filtrosNormalizados.profesor) return false;
    if (campoIgnorado !== "actividad" && filtrosNormalizados.actividad && limpiarTexto_(registro.actividad) !== filtrosNormalizados.actividad) return false;
    if (campoIgnorado !== "sector" && filtrosNormalizados.sector && limpiarTexto_(registro.sector) !== filtrosNormalizados.sector) return false;
    return true;
  }

  function obtenerOpcionesCampo_(campo, campoIgnorado) {
    let mapa = {};
    lista.forEach(function(registro) {
      if (!coincideConOtrosFiltros_(registro, campoIgnorado)) return;
      let valor = limpiarTexto_(registro && registro[campo]);
      if (valor) {
        mapa[valor] = true;
      }
    });
    return Object.keys(mapa).sort(function(a, b) {
      return a.localeCompare(b, "es", { sensitivity: "base" });
    });
  }

  return {
    estaciones: obtenerOpcionesCampo_("estacion", "estacion"),
    profesores: obtenerOpcionesCampo_("profesor", "profesor"),
    actividades: obtenerOpcionesCampo_("actividad", "actividad"),
    sectores: obtenerOpcionesCampo_("sector", "sector")
  };
}

function resumirPayloadResumenEspecial_(resumen) {
  if (!resumen) return resumen;

  let copia = JSON.parse(JSON.stringify(resumen));
  delete copia.registros;
  return copia;
}

function tieneFiltrosAplicados_(filtros) {
  let valor = filtros || {};
  return !!(valor.estacion || valor.profesor || valor.actividad || valor.sector);
}

function describirFiltrosAplicados_(filtros) {
  let valor = normalizarFiltrosResumenEspecial_(filtros);
  let partes = [];

  if (valor.estacion) partes.push("Estacion: " + valor.estacion);
  if (valor.profesor) partes.push("Profesor: " + valor.profesor);
  if (valor.actividad) partes.push("Actividad: " + valor.actividad);
  if (valor.sector) partes.push("Sector de carga: " + valor.sector);

  return partes.length ? partes.join(" | ") : "Sin filtros adicionales";
}

function esSolapaEspecialDetallada_(nombreSolapa) {
  let nombreNormalizado = normalizarTexto_(nombreSolapa);

  return [
    "clic",
    "eventos",
    "festejos",
    "cocina",
    "etz",
    "visitas escolares",
    "explorando caba",
    "talleres"
  ].indexOf(nombreNormalizado) !== -1;
}

function buscarColumnaResumenEspecial_(encabezados, encabezadosOriginales, candidatos, etiquetaFallback) {
  let indice = buscarIndiceEncabezado_(encabezados, candidatos);

  return {
    indice: indice,
    etiqueta: indice > -1 ? limpiarEtiquetaColumna_(encabezadosOriginales[indice]) : etiquetaFallback
  };
}

function obtenerEtiquetasResumenEspecial_(columnaPrincipal, columnaSecundaria) {
  return {
    principal: columnaPrincipal && columnaPrincipal.etiqueta ? columnaPrincipal.etiqueta : "Referente",
    secundaria: columnaSecundaria && columnaSecundaria.etiqueta ? columnaSecundaria.etiqueta : "Actividad"
  };
}

function limpiarEtiquetaColumna_(texto) {
  let limpio = limpiarTexto_(texto);
  if (!limpio) return "";

  return limpio.replace(/\b\w/g, function(letra) {
    return letra.toUpperCase();
  });
}

function buscarIndiceEncabezado_(encabezados, candidatos) {
  for (let j = 0; j < candidatos.length; j++) {
    let candidato = normalizarTexto_(candidatos[j]);

    for (let i = 0; i < encabezados.length; i++) {
      if (encabezados[i] === candidato) {
        return i;
      }
    }
  }

  for (let i = 0; i < encabezados.length; i++) {
    for (let j = 0; j < candidatos.length; j++) {
      let candidato = normalizarTexto_(candidatos[j]);

      if (encabezados[i].indexOf(candidato) !== -1) {
        return i;
      }
    }
  }

  return -1;
}

function obtenerIdentificadorPersona_(fila, idxDocumento, idxNombre, idxApellido) {
  let documento = idxDocumento > -1 ? limpiarTexto_(fila[idxDocumento]) : "";
  documento = documento.replace(/[^\d]/g, "");
  if (documento) return "DOC:" + documento;

  let nombre = idxNombre > -1 ? limpiarTexto_(fila[idxNombre]) : "";
  let apellido = idxApellido > -1 ? limpiarTexto_(fila[idxApellido]) : "";
  let combinado = (apellido + " " + nombre).trim();

  return combinado ? "NOM:" + combinado : "";
}

function normalizarFechaCarga_(valor) {
  if (!valor) return "";

  if (Object.prototype.toString.call(valor) === "[object Date]" && !isNaN(valor.getTime())) {
    return Utilities.formatDate(
      valor,
      Session.getScriptTimeZone(),
      "dd/MM/yyyy"
    );
  }

  let texto = String(valor).trim();
  if (!texto) return "";

  let match = texto.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})/);
  if (!match) return texto;

  let dia = ("0" + match[1]).slice(-2);
  let mes = ("0" + match[2]).slice(-2);
  let anio = match[3].length === 2 ? "20" + match[3] : match[3];

  return dia + "/" + mes + "/" + anio;
}

function convertirFechaTextoAOrden_(texto) {
  let partes = String(texto).split("/");
  if (partes.length !== 3) return 0;

  let dia = Number(partes[0]);
  let mes = Number(partes[1]) - 1;
  let anio = Number(partes[2]);

  return new Date(anio, mes, dia).getTime();
}

function obtenerClaveMesDesdeFecha_(texto) {
  let partes = String(texto).split("/");
  if (partes.length !== 3) return "";

  let mes = ("0" + Number(partes[1])).slice(-2);
  let anio = String(partes[2]);

  return anio + "-" + mes;
}

function obtenerOrdenMes_(mesClave) {
  let partes = String(mesClave).split("-");
  if (partes.length !== 2) return 0;

  return new Date(Number(partes[0]), Number(partes[1]) - 1, 1).getTime();
}

function formatearMesClave_(mesClave) {
  let partes = String(mesClave).split("-");
  if (partes.length !== 2) return mesClave;

  let fecha = new Date(Number(partes[0]), Number(partes[1]) - 1, 1);
  let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];

  return meses[fecha.getMonth()] + " " + fecha.getFullYear();
}

function incrementarConteo_(mapa, clave) {
  if (!clave) return;
  mapa[clave] = (mapa[clave] || 0) + 1;
}

function convertirMapaConteosALista_(mapa) {
  return Object.keys(mapa).map(function(nombre) {
    return {
      nombre: nombre,
      cantidad: mapa[nombre]
    };
  }).sort(function(a, b) {
    if (b.cantidad !== a.cantidad) {
      return b.cantidad - a.cantidad;
    }

    return a.nombre.localeCompare(b.nombre);
  });
}

function normalizarTexto_(texto) {
  return String(texto || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function limpiarTexto_(texto) {
  return String(texto || "")
    .trim()
    .replace(/\s+/g, " ");
}

function pluralizarEtiquetaBackend_(texto) {
  let valor = String(texto || "").trim();
  if (!valor) return "Items";

  let lower = valor.toLowerCase();
  if (lower.slice(-1) === "s") return valor;
  if (lower.slice(-1) === "z") return valor.slice(0, -1) + "ces";
  if (/[aeiou]$/i.test(valor)) return valor + "s";

  return valor + "es";
}

function informePareceIncompleto_(texto) {
  let valor = String(texto || "").trim();
  if (!valor) return true;
  if (valor.indexOf("[RESPUESTA_TRUNCADA_POR_TOKENS]") !== -1) return true;
  if (valor.length < 350) return true;

  let lineas = valor.split(/\r?\n/).filter(function(linea) {
    return String(linea).trim();
  });

  if (lineas.length < 5) return true;

  let textoNormalizado = valor.toLowerCase();
  let gruposObligatorios = [
    ["resumen ejecutivo"],
    ["hallazgos", "hallazgos clave"],
    ["lectura operativa"],
    ["recomendaciones"]
  ];

  for (let i = 0; i < gruposObligatorios.length; i++) {
    let cumpleGrupo = gruposObligatorios[i].some(function(opcion) {
      return textoNormalizado.indexOf(opcion) !== -1;
    });

    if (!cumpleGrupo) {
      return true;
    }
  }

  let ultimoCaracter = valor.slice(-1);
  let cierreValido = /[.!?)]/.test(ultimoCaracter);
  if (!cierreValido && valor.length < 500) return true;

  return false;
}

function redondearInforme_(valor) {
  return Number(Number(valor || 0).toFixed(1));
}

function construirMetricasPeriodo_(origen, mes, alcance, etiquetas) {
  let personasUnicas = Number(alcance === "dia" ? origen.personasUnicas : origen.personasUnicasMes || 0);
  let participaciones = Number(alcance === "dia" ? origen.prestaciones : origen.prestacionesTotales || 0);
  let fechasConCarga = Number(alcance === "dia" ? 1 : mes.fechasConCarga || 0);
  let promedioParticipacionesPorFecha = fechasConCarga ? redondearInforme_(participaciones / fechasConCarga) : 0;
  let promedioPersonasPorFecha = fechasConCarga ? redondearInforme_(personasUnicas / fechasConCarga) : 0;
  let ratioParticipacionesPorPersona = personasUnicas ? redondearInforme_(participaciones / personasUnicas) : 0;
  let topCuarta = resumirConteosParaPrompt_(origen.estaciones, 10);
  let topPrincipal = resumirConteosParaPrompt_(origen.profesores, 10);
  let topSecundaria = resumirConteosParaPrompt_(origen.actividades, 10);
  let topTerciaria = resumirConteosParaPrompt_(origen.sectores, 10);
  let dias = Array.isArray(mes && mes.dias) ? mes.dias.slice() : [];
  let picoMayor = null;
  let picoMenor = null;

  if (dias.length) {
    let ordenadosPorParticipaciones = dias.slice().sort(function(a, b) {
      return Number(b.prestaciones || 0) - Number(a.prestaciones || 0);
    });

    picoMayor = {
      fechaPlanilla: ordenadosPorParticipaciones[0].fechaPlanilla,
      participaciones: Number(ordenadosPorParticipaciones[0].prestaciones || 0),
      personasUnicas: Number(ordenadosPorParticipaciones[0].personasUnicas || 0)
    };

    picoMenor = {
      fechaPlanilla: ordenadosPorParticipaciones[ordenadosPorParticipaciones.length - 1].fechaPlanilla,
      participaciones: Number(ordenadosPorParticipaciones[ordenadosPorParticipaciones.length - 1].prestaciones || 0),
      personasUnicas: Number(ordenadosPorParticipaciones[ordenadosPorParticipaciones.length - 1].personasUnicas || 0)
    };
  }

  return {
    personasUnicas: personasUnicas,
    participaciones: participaciones,
    fechasConCarga: fechasConCarga,
    promedioParticipacionesPorFecha: promedioParticipacionesPorFecha,
    promedioPersonasPorFecha: promedioPersonasPorFecha,
    ratioParticipacionesPorPersona: ratioParticipacionesPorPersona,
    cantidadTopCuarta: topCuarta.length,
    cantidadTopPrincipal: topPrincipal.length,
    cantidadTopSecundaria: topSecundaria.length,
    cantidadTopTerciaria: topTerciaria.length,
    topCuarta: topCuarta,
    topPrincipal: topPrincipal,
    topSecundaria: topSecundaria,
    topTerciaria: topTerciaria,
    etiquetas: etiquetas,
    picoMayor: picoMayor,
    picoMenor: picoMenor
  };
}

function construirCambiosTop_(listaBase, listaComparada) {
  let base = Array.isArray(listaBase) ? listaBase : [];
  let comparada = Array.isArray(listaComparada) ? listaComparada : [];
  let mapaComparada = {};
  let mapaBase = {};

  comparada.forEach(function(item) {
    mapaComparada[item.nombre] = Number(item.cantidad || 0);
  });

  base.forEach(function(item) {
    mapaBase[item.nombre] = Number(item.cantidad || 0);
  });

  let variaciones = base.map(function(item) {
    return {
      nombre: item.nombre,
      base: Number(item.cantidad || 0),
      comparado: Number(mapaComparada[item.nombre] || 0),
      diferencia: Number(item.cantidad || 0) - Number(mapaComparada[item.nombre] || 0)
    };
  }).sort(function(a, b) {
    return Math.abs(b.diferencia) - Math.abs(a.diferencia);
  }).slice(0, 5);

  let nuevos = base.filter(function(item) {
    return !Object.prototype.hasOwnProperty.call(mapaComparada, item.nombre);
  }).slice(0, 3);

  let salen = comparada.filter(function(item) {
    return !Object.prototype.hasOwnProperty.call(mapaBase, item.nombre);
  }).slice(0, 3);

  return {
    variaciones: variaciones,
    nuevos: nuevos,
    salen: salen
  };
}

function construirInformeFallback_(nombreSolapa, contexto) {
  let metricas = contexto.metricas || {};
  let lineas = [];

  lineas.push("Informe de gestion operativa");
  lineas.push("Solapa: " + nombreSolapa);
  lineas.push("Alcance: " + contexto.titulo);
  if (tieneFiltrosAplicados_(contexto.filtrosAplicados)) {
    lineas.push("Filtros aplicados: " + describirFiltrosAplicados_(contexto.filtrosAplicados));
  }
  lineas.push("");
  lineas.push("Resumen ejecutivo");
  lineas.push(
    "En " + contexto.datosPrompt.periodo +
    " se registraron " + metricas.participaciones +
    " participaciones y " + metricas.personasUnicas +
    " personas unicas."
  );
  lineas.push(
    "La relacion entre participaciones y personas unicas fue de " +
    metricas.ratioParticipacionesPorPersona +
    ", lo que permite estimar el nivel de reiteracion de uso dentro del periodo analizado."
  );

  if (metricas.fechasConCarga > 1) {
    lineas.push(
      "El periodo tuvo " + metricas.fechasConCarga +
      " fechas con carga, con un promedio de " + metricas.promedioParticipacionesPorFecha +
      " participaciones por fecha."
    );
  }

  if (metricas.picoMayor && metricas.picoMenor) {
    lineas.push(
      "Dentro del periodo, el mayor volumen se observo el " + metricas.picoMayor.fechaPlanilla +
      " (" + metricas.picoMayor.participaciones + " participaciones) y el menor el " +
      metricas.picoMenor.fechaPlanilla + " (" + metricas.picoMenor.participaciones + ")."
    );
  }

  lineas.push("");
  lineas.push("Hallazgos clave");

  if (metricas.topPrincipal && metricas.topPrincipal.length) {
    lineas.push(
      "En " + metricas.etiquetas.principalPlural.toLowerCase() +
      ", los mayores volumenes correspondieron a " +
      metricas.topPrincipal.slice(0, 3).map(function(item) {
        return item.nombre + " (" + item.cantidad + ")";
      }).join(", ") + "."
    );
  }

  if (metricas.topCuarta && metricas.topCuarta.length) {
    lineas.push(
      "En " + metricas.etiquetas.cuartaPlural.toLowerCase() +
      ", los mayores volumenes se concentraron en " +
      metricas.topCuarta.slice(0, 3).map(function(item) {
        return item.nombre + " (" + item.cantidad + ")";
      }).join(", ") + "."
    );
  }

  if (metricas.topSecundaria && metricas.topSecundaria.length) {
    lineas.push(
      "En " + metricas.etiquetas.secundariaPlural.toLowerCase() +
      ", se destacaron " +
      metricas.topSecundaria.slice(0, 3).map(function(item) {
        return item.nombre + " (" + item.cantidad + ")";
      }).join(", ") + "."
    );
  }

  if (metricas.topTerciaria && metricas.topTerciaria.length) {
    lineas.push(
      "En " + metricas.etiquetas.terciariaPlural.toLowerCase() +
      ", se observaron mayores volumenes en " +
      metricas.topTerciaria.slice(0, 3).map(function(item) {
        return item.nombre + " (" + item.cantidad + ")";
      }).join(", ") + "."
    );
  }

  lineas.push("");
  lineas.push("Lectura operativa");
  lineas.push(
    "Los datos sugieren revisar el rendimiento del periodo no solo por volumen total sino tambien por distribucion entre fechas, composicion de la oferta y concentracion de la actividad."
  );
  lineas.push(
    "La lectura debe mantenerse situada: una variacion de volumen puede responder a cambios de agenda, modalidad de intervencion o intensidad de carga, y no necesariamente a un deterioro del dispositivo."
  );

  if (contexto.comparacion && contexto.comparacion.datosPrompt) {
    let comparacion = contexto.comparacion.datosPrompt;
    lineas.push("");
    lineas.push("Comparacion con " + comparacion.periodoComparado);
    lineas.push(
      "Frente al periodo comparado, las personas unicas pasaron de " +
      comparacion.personasUnicasComparado + " a " + comparacion.personasUnicasBase +
      ", con una variacion de " + comparacion.variacionPersonasUnicas.diferenciaAbsoluta +
      (comparacion.variacionPersonasUnicas.diferenciaPorcentual !== null
        ? " (" + comparacion.variacionPersonasUnicas.diferenciaPorcentual + "%)."
        : ".")
    );
    lineas.push(
      "Las participaciones pasaron de " + comparacion.participacionesComparado +
      " a " + comparacion.participacionesBase +
      ", con una variacion de " + comparacion.variacionParticipaciones.diferenciaAbsoluta +
      (comparacion.variacionParticipaciones.diferenciaPorcentual !== null
        ? " (" + comparacion.variacionParticipaciones.diferenciaPorcentual + "%)."
        : ".")
    );

    if (comparacion.cambiosTopPrincipal && comparacion.cambiosTopPrincipal.variaciones.length) {
      lineas.push(
        "Entre los cambios de composicion en " + metricas.etiquetas.principalPlural.toLowerCase() +
        " se observa: " +
        comparacion.cambiosTopPrincipal.variaciones.slice(0, 2).map(function(item) {
          return item.nombre + " (" + (item.diferencia >= 0 ? "+" : "") + item.diferencia + ")";
        }).join(", ") + "."
      );
    }

    if (comparacion.cambiosTopCuarta && comparacion.cambiosTopCuarta.variaciones.length) {
      lineas.push(
        "En " + metricas.etiquetas.cuartaPlural.toLowerCase() +
        " tambien se observan cambios relevantes: " +
        comparacion.cambiosTopCuarta.variaciones.slice(0, 2).map(function(item) {
          return item.nombre + " (" + (item.diferencia >= 0 ? "+" : "") + item.diferencia + ")";
        }).join(", ") + "."
      );
    }

    if (comparacion.cambiosTopSecundaria && comparacion.cambiosTopSecundaria.variaciones.length) {
      lineas.push(
        "En " + metricas.etiquetas.secundariaPlural.toLowerCase() +
        " tambien se registran variaciones relevantes: " +
        comparacion.cambiosTopSecundaria.variaciones.slice(0, 2).map(function(item) {
          return item.nombre + " (" + (item.diferencia >= 0 ? "+" : "") + item.diferencia + ")";
        }).join(", ") + "."
      );
    }

    lineas.push(
      "Desde una mirada de gestion, la comparacion sugiere monitorear si este cambio responde a una menor intensidad de actividad, a una redistribucion de la oferta o a una modificacion en la composicion de la demanda."
    );
  }

  lineas.push("");
  lineas.push("Proyeccion y tendencias probables");
  lineas.push(
    "Si el comportamiento observado se sostuviera en el corto plazo, es esperable que los resultados futuros mantengan una alta sensibilidad a la cantidad de fechas efectivamente cargadas y a la concentracion de la actividad en pocos momentos."
  );
  lineas.push(
    "Esta proyeccion debe leerse con prudencia, ya que la evolucion puede modificarse por decisiones operativas, agenda territorial, clima, modalidad de intervencion o cambios en la oferta."
  );

  lineas.push("");
  lineas.push("Recomendaciones");
  lineas.push(
    "1. Revisar la distribucion por fechas para identificar si el volumen depende de pocos dias de alta concentracion o si existe una caida sostenida."
  );
  lineas.push(
    "2. Monitorear la composicion de " + metricas.etiquetas.principalPlural.toLowerCase() +
    " y " + metricas.etiquetas.secundariaPlural.toLowerCase() +
    " para detectar cambios en la oferta efectiva o en las preferencias de participacion."
  );
  lineas.push(
    "3. Complementar esta lectura con informacion operativa del territorio, agenda y modalidad de intervencion antes de extraer conclusiones causales."
  );

  return lineas.join("\n");
}

function obtenerEtiquetaOrigenInforme_(origen) {
  return origen === "ia" ? "Informe con asistencia de IA" : "Informe de dato duro";
}

function construirNotaOrigenInforme_(origen) {
  if (origen === "ia") {
    return "Este informe combina metricas estructuradas del sistema con interpretacion asistida por IA, validada sobre los datos disponibles.";
  }

  return "Este informe fue generado a partir de metricas estructuradas y reglas de analisis predefinidas, sin asistencia de IA por disponibilidad o cuota.";
}

function obtenerGlosarioInforme_() {
  return [
    {
      termino: "participaciones",
      patrones: ["participaciones", "participacion"],
      definicion: "Cantidad total de registros o intervenciones cargadas. Una misma persona puede sumar mas de una participacion."
    },
    {
      termino: "personas unicas",
      patrones: ["personas unicas", "persona unica"],
      definicion: "Cantidad de personas sin repetir dentro del periodo analizado, usualmente identificadas por DNI."
    },
    {
      termino: "variacion",
      patrones: ["variacion", "variaciones"],
      definicion: "Cambio entre un periodo y otro, expresado en diferencia absoluta y, cuando corresponde, en porcentaje."
    },
    {
      termino: "concentracion",
      patrones: ["concentracion", "concentrado", "concentrada"],
      definicion: "Situacion en la que gran parte del volumen se explica por pocos dias, actividades o referentes."
    },
    {
      termino: "composicion",
      patrones: ["composicion"],
      definicion: "Distribucion interna del volumen segun actividades, referentes u otros componentes del analisis."
    },
    {
      termino: "tendencia probable",
      patrones: ["tendencia probable", "tendencias probables", "proyeccion", "proyecciones"],
      definicion: "Direccion esperable del comportamiento futuro si las condiciones observadas se mantuvieran, sin implicar certeza."
    },
    {
      termino: "lectura operativa",
      patrones: ["lectura operativa"],
      definicion: "Interpretacion orientada a gestion sobre lo que los datos sugieren para la planificacion o el seguimiento."
    }
  ];
}

function obtenerGlosarioDetectado_(texto) {
  let glosario = obtenerGlosarioInforme_();
  let textoNormalizado = normalizarTexto_(texto || "");

  return glosario.filter(function(item) {
    let patrones = Array.isArray(item.patrones) ? item.patrones : [item.termino];

    return patrones.some(function(patron) {
      return textoNormalizado.indexOf(normalizarTexto_(patron)) !== -1;
    });
  });
}

function agregarGlosarioDocumento_(body, texto) {
  let glosario = obtenerGlosarioDetectado_(texto);
  if (!glosario.length) return;

  body.appendPageBreak();
  body.appendParagraph("Glosario breve").setHeading(DocumentApp.ParagraphHeading.HEADING1);

  glosario.forEach(function(item) {
    body.appendParagraph(item.termino).setHeading(DocumentApp.ParagraphHeading.HEADING3);
    body.appendParagraph(item.definicion).setFontSize(10);
  });
}

function limpiarMarcadoTexto_(texto) {
  return String(texto || "")
    .replace(/^#+\s*/, "")
    .replace(/\*\*/g, "")
    .replace(/\*/g, "")
    .trim();
}

function agregarLineaListaDocumento_(body, texto) {
  body.appendParagraph("- " + limpiarMarcadoTexto_(texto))
    .setFontSize(10.5)
    .setBold(false);
}

function agregarTextoInformeADocumento_(body, texto) {
  let lineas = String(texto || "").split(/\r?\n/);

  lineas.forEach(function(linea) {
    let valor = String(linea || "").trim();
    if (!valor) {
      body.appendParagraph("");
      return;
    }

    let limpio = limpiarMarcadoTexto_(valor);

    if (/^###\s+/.test(valor)) {
      body.appendParagraph(limpio)
        .setHeading(DocumentApp.ParagraphHeading.HEADING3)
        .setBold(true);
      return;
    }

    if (/^##\s+/.test(valor) || /^\*\*.+\*\*$/.test(valor)) {
      body.appendParagraph(limpio)
        .setHeading(DocumentApp.ParagraphHeading.HEADING2)
        .setBold(true);
      return;
    }

    if (esTituloSeccionInforme_(limpio)) {
      body.appendParagraph(limpio)
        .setBold(true)
        .setFontSize(13);
      return;
    }

    if (/^[-]\s+/.test(valor) || /^\d+\.\s+/.test(valor)) {
      agregarLineaListaDocumento_(body, limpio.replace(/^\d+\.\s+/, ""));
      return;
    }

    body.appendParagraph(limpio)
      .setFontSize(10.5)
      .setBold(false);
  });
}

function esTituloSeccionInforme_(texto) {
  let valor = limpiarMarcadoTexto_(texto);
  let normalizado = normalizarTexto_(valor);

  return [
    "informe de gestion operativa",
    "resumen ejecutivo",
    "hallazgos clave",
    "lectura operativa",
    "comparacion",
    "proyeccion y tendencias probables",
    "recomendaciones"
  ].some(function(item) {
    return normalizado === item || normalizado.indexOf(item + " con ") === 0;
  });
}

function formatearDiferenciaPdf_(valor, porcentaje) {
  let diferencia = Number(valor || 0);
  let texto = (diferencia > 0 ? "+" : "") + diferencia;

  if (porcentaje !== null && porcentaje !== undefined && porcentaje !== "") {
    texto += " (" + (Number(porcentaje) > 0 ? "+" : "") + porcentaje + "%)";
  }

  return texto;
}

function aplicarColorTextoParrafo_(parrafo, color, fontSize, bold) {
  let texto = parrafo.editAsText();
  texto.setForegroundColor(color);
  if (fontSize) {
    texto.setFontSize(fontSize);
  }
  if (bold !== undefined) {
    texto.setBold(bold);
  }
  return parrafo;
}

function agregarFranjaDocumento_(body, texto, colorFondo, colorTexto, fontSize) {
  let tabla = body.appendTable([[String(texto || "")]]);
  let celda = tabla.getCell(0, 0);
  celda.setBackgroundColor(colorFondo);
  let textoCelda = celda.editAsText();
  textoCelda.setForegroundColor(colorTexto);
  textoCelda.setBold(true);
  if (fontSize) {
    textoCelda.setFontSize(fontSize);
  }
  return tabla;
}

function agregarFranjaPieDocumento_(body, colorFondo) {
  let tabla = body.appendTable([[" "]]);
  let celda = tabla.getCell(0, 0);
  celda.setBackgroundColor(colorFondo);
  celda.editAsText().setForegroundColor(colorFondo).setFontSize(6).setBold(true);
  return tabla;
}

function agregarTablaDocumento_(body, titulo, encabezados, filas) {
  if (!filas || !filas.length) return;

  aplicarColorTextoParrafo_(
    body.appendParagraph(titulo).setHeading(DocumentApp.ParagraphHeading.HEADING3),
    "#153244",
    11.5,
    true
  );

  let tabla = [encabezados].concat(filas);
  let table = body.appendTable(tabla);
  let header = table.getRow(0);

  for (let i = 0; i < header.getNumCells(); i++) {
    header.getCell(i).setBackgroundColor("#153244");
    header.getCell(i).editAsText().setBold(true).setFontSize(9.5).setForegroundColor("#ffffff");
  }

  for (let row = 1; row < table.getNumRows(); row++) {
    for (let col = 0; col < table.getRow(row).getNumCells(); col++) {
      table.getRow(row).getCell(col).editAsText().setFontSize(9.5).setForegroundColor("#111111");
      table.getRow(row).getCell(col).setBackgroundColor("#ffffff");
    }
  }
}

function construirFilasTablaResumen_(contexto) {
  let metricas = contexto.metricas || {};

  return [
    ["Personas unicas", String(metricas.personasUnicas || 0)],
    ["Participaciones", String(metricas.participaciones || 0)],
    ["Fechas con carga", String(metricas.fechasConCarga || 0)],
    ["Promedio participaciones / fecha", String(metricas.promedioParticipacionesPorFecha || 0)],
    ["Promedio personas / fecha", String(metricas.promedioPersonasPorFecha || 0)],
    ["Participaciones / persona", String(metricas.ratioParticipacionesPorPersona || 0)]
  ];
}

function construirFilasTablaComparacion_(contexto) {
  if (!contexto.comparacion || !contexto.comparacion.datosPrompt) return [];

  let comparacion = contexto.comparacion.datosPrompt;

  return [
    [
      "Personas unicas",
      String(comparacion.personasUnicasBase || 0),
      String(comparacion.personasUnicasComparado || 0),
      formatearDiferenciaPdf_(
        comparacion.variacionPersonasUnicas.diferenciaAbsoluta,
        comparacion.variacionPersonasUnicas.diferenciaPorcentual
      )
    ],
    [
      "Participaciones",
      String(comparacion.participacionesBase || 0),
      String(comparacion.participacionesComparado || 0),
      formatearDiferenciaPdf_(
        comparacion.variacionParticipaciones.diferenciaAbsoluta,
        comparacion.variacionParticipaciones.diferenciaPorcentual
      )
    ]
  ];
}

function construirFilasTablaTop_(items) {
  return (Array.isArray(items) ? items : []).slice(0, 5).map(function(item) {
    return [String(item.nombre || "-"), String(item.cantidad || 0)];
  });
}

function construirFilasTablaDiasPdf_(contexto) {
  if (!contexto.mes || !Array.isArray(contexto.mes.dias)) return [];

  return contexto.mes.dias.slice(0, 10).map(function(dia) {
    return [
      String(dia.fechaPlanilla || "-"),
      String(dia.personasUnicas || 0),
      String(dia.prestaciones || 0)
    ];
  });
}

function generarPdfInformeEspecial_(nombreSolapa, contexto, texto, origenInforme) {
  let titulo = "Informe de Gestion Operativa - Programa Estaciones Saludables " + nombreSolapa;
  let doc = DocumentApp.create(titulo);
  let body = doc.getBody();

  body.clear();
  agregarFranjaDocumento_(body, titulo, "#153244", "#ffffff", 15);
  aplicarColorTextoParrafo_(
    body.appendParagraph(obtenerEtiquetaOrigenInforme_(origenInforme))
      .setHeading(DocumentApp.ParagraphHeading.SUBTITLE),
    "#153244",
    10.5,
    true
  );
  aplicarColorTextoParrafo_(body.appendParagraph("Periodo analizado: " + contexto.titulo).setFontSize(10.5), "#111111", 10.5, true);
  if (tieneFiltrosAplicados_(contexto.filtrosAplicados)) {
    aplicarColorTextoParrafo_(body.appendParagraph("Filtros aplicados: " + describirFiltrosAplicados_(contexto.filtrosAplicados)).setFontSize(9.5), "#111111", 9.5, false);
  }
  aplicarColorTextoParrafo_(
    body.appendParagraph(
      "Generado: " + Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "dd/MM/yyyy HH:mm")
    ).setFontSize(9.5),
    "#111111",
    9.5,
    false
  );
  aplicarColorTextoParrafo_(body.appendParagraph(construirNotaOrigenInforme_(origenInforme)).setFontSize(9.5), "#111111", 9.5, false);

  if (contexto.errorIA) {
    body.appendParagraph("Motivo de respaldo automatico: " + contexto.errorIA)
      .setFontSize(8.5)
      .setForegroundColor("#8a5a00");
  }

  body.appendParagraph("");

  agregarTablaDocumento_(body, "Resumen de indicadores", ["Indicador", "Valor"], construirFilasTablaResumen_(contexto));

  if (contexto.comparacion && contexto.comparacion.datosPrompt) {
    agregarTablaDocumento_(
      body,
      "Tabla comparativa",
      ["Indicador", "Periodo A", "Periodo B", "Variacion"],
      construirFilasTablaComparacion_(contexto)
    );
  }

  if (contexto.metricas.topCuarta && contexto.metricas.topCuarta.length) {
    agregarTablaDocumento_(
      body,
      "Top " + contexto.etiquetas.cuartaPlural,
      [contexto.etiquetas.cuarta, "Cantidad"],
      construirFilasTablaTop_(contexto.metricas.topCuarta)
    );
  }

  agregarTablaDocumento_(
    body,
    "Top " + contexto.etiquetas.principalPlural,
    [contexto.etiquetas.principal, "Cantidad"],
    construirFilasTablaTop_(contexto.metricas.topPrincipal)
  );

  agregarTablaDocumento_(
    body,
    "Top " + contexto.etiquetas.secundariaPlural,
    [contexto.etiquetas.secundaria, "Cantidad"],
    construirFilasTablaTop_(contexto.metricas.topSecundaria)
  );

  if (contexto.metricas.topTerciaria && contexto.metricas.topTerciaria.length) {
    agregarTablaDocumento_(
      body,
      "Top " + contexto.etiquetas.terciariaPlural,
      [contexto.etiquetas.terciaria, "Cantidad"],
      construirFilasTablaTop_(contexto.metricas.topTerciaria)
    );
  }

  if (contexto.datosPrompt.alcance === "mes") {
    agregarTablaDocumento_(
      body,
      "Detalle de fechas del periodo",
      ["Fecha", "Personas unicas", "Participaciones"],
      construirFilasTablaDiasPdf_(contexto)
    );
  }

  body.appendPageBreak();
  agregarFranjaDocumento_(body, "Interpretacion y analisis", "#153244", "#ffffff", 13);
  agregarTextoInformeADocumento_(body, texto);

  if (origenInforme !== "ia") {
    agregarGlosarioDocumento_(body, texto);
  }

  body.appendParagraph("");
  agregarFranjaPieDocumento_(body, "#ffcb00");

  doc.saveAndClose();

  let archivo = DriveApp.getFileById(doc.getId());
  let pdf = archivo.getAs(MimeType.PDF).setName(construirNombreArchivoInformeIA_(nombreSolapa, contexto, origenInforme));
  let base64 = Utilities.base64Encode(pdf.getBytes());

  archivo.setTrashed(true);

  return {
    archivo: pdf.getName(),
    mimeType: "application/pdf",
    base64: base64
  };
}

function generarInformeEspecialIA(nombreSolapa, mesClave, fechaPlanilla, comparacion, filtros, emailSesion) {
  let resumen = obtenerResumenSolapaEspecial(nombreSolapa, null, emailSesion);
  resumen = aplicarFiltrosResumenEspecial_(resumen, filtros);

  if (!resumen || !resumen.disponible) {
    throw new Error("No se pudo leer la solapa seleccionada.");
  }

  if (resumen.tipoResumen !== "especial_detallado" && resumen.tipoResumen !== "clic") {
    throw new Error("La solapa seleccionada no tiene un resumen compatible para IA.");
  }

  let contexto = obtenerContextoInformeIA_(resumen, mesClave, fechaPlanilla, comparacion, filtros);
  let prompt = construirPromptInformeIA_(nombreSolapa, resumen, contexto);
  let texto = "";
  let origenInforme = "ia";

  try {
    //texto = solicitarInformeGemini_(prompt);
    texto = solicitarInformeOpenRouter_(prompt);

    if (informePareceIncompleto_(texto)) {
      let promptRefuerzo = [
        prompt,
        "",
        "La respuesta anterior fue demasiado breve, incompleta o quedo truncada.",
        "Reescribe el informe completo desde cero.",
        "Debes entregar todas las secciones obligatorias, incluir comparacion si fue solicitada y cerrar con recomendaciones concretas.",
        "No entregues encabezados solos ni frases truncas.",
        "El informe debe terminar con la seccion Recomendaciones completa y con cierre en una frase final completa."
      ].join("\n");

      //texto = solicitarInformeGemini_(promptRefuerzo);
      texto = solicitarInformeOpenRouter_(promptRefuerzo);
    }

    if (informePareceIncompleto_(texto)) {
      origenInforme = "dato_duro";
      texto = construirInformeFallback_(nombreSolapa, contexto);
    }
  } catch (error) {
    origenInforme = "dato_duro";
    texto = construirInformeFallback_(nombreSolapa, contexto);
    contexto.errorIA = error && error.message ? String(error.message) : "";
  }

  let pdf = generarPdfInformeEspecial_(nombreSolapa, contexto, texto, origenInforme);

  return {
    nombre: nombreSolapa,
    alcance: contexto.titulo,
    archivo: pdf.archivo,
    mimeType: pdf.mimeType,
    base64: pdf.base64,
    origenInforme: origenInforme,
    motivoRespaldo: contexto.errorIA || (origenInforme !== "ia" ? "Gemini devolvio una respuesta incompleta y se genero un informe de dato duro." : ""),
    contenido: texto
  };
}

function enviarInformeDashboardIA(datos, imagenes, emailDestino, asunto, mensaje, emailSesion) {
  let destinatario = String(emailDestino || "").trim();
  if (!destinatario) throw new Error("Debes indicar un correo electronico de destino.");

  // 1. Preparar Prompt para IA
  let prompt = [
    "Actua como un analista institucional del programa Estaciones Saludables del GCBA.",
    "Analiza los siguientes datos agregados del Tablero Gerencial:",
    "",
    "DATOS GENERALES:",
    "- Estaciones Lideres: " + datos.estaciones.slice(0, 8).map(e => e[0] + " (" + e[1] + " participaciones)").join(", "),
    "- Actividades con mayor volumen: " + datos.actividades.slice(0, 8).map(a => a[0] + " (" + a[1] + " participaciones)").join(", "),
    "- Evolucion Mensual (Participaciones vs Unicas): " + datos.mensual.slice(-8).map(m => m[0] + ": " + m[1] + " cargas / " + m[2] + " personas").join(" | "),
    "",
    "CONSIGNA:",
    "Genera un informe analitico ejecutivo (maximo 500 palabras).",
    "Estructura obligatoria:",
    "1. Resumen de Situacion: interpreta el volumen total y la tendencia de los ultimos meses.",
    "2. Analisis de Composicion: destaca que estaciones y actividades traccionan el programa.",
    "3. Lectura de Gestion: que sugieren estos numeros para la toma de decisiones (ej: reforzar horarios, diversificar oferta).",
    "4. Recomendaciones: 3 puntos clave de accion.",
    "Estilo profesional, institucional y basado estrictamente en la evidencia provista."
  ].join("\n");

  let analisis = "";
  try {
    analisis = solicitarInformeOpenRouter_(prompt);
  } catch (e) {
    analisis = "INFORME ANALITICO (MODO RESPALDO)\n\n" + 
               "El analisis detallado por IA no pudo completarse. Basado en los datos directos:\n" +
               "- La estacion con mayor volumen es " + (datos.estaciones[0] ? datos.estaciones[0][0] : "N/D") + ".\n" +
               "- La actividad predominante es " + (datos.actividades[0] ? datos.actividades[0][0] : "N/D") + ".\n" +
               "- Se observa una evolucion mensual con picos en " + (datos.mensual.length ? datos.mensual[datos.mensual.length-1][0] : "el ultimo mes") + ".\n" +
               "Se recomienda revisar la consistencia de carga y la distribucion territorial.";
  }

  // 2. Generar Documento y PDF
  let nombreArchivo = "Informe_Estadistico_Tablero_" + Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyyMMdd_HHmm");
  let doc = DocumentApp.create(nombreArchivo);
  let body = doc.getBody();
  
  body.clear();
  agregarFranjaDocumento_(body, "INFORME EJECUTIVO DE ESTADISTICAS", "#153244", "#ffffff", 14);
  
  body.appendParagraph("Generado: " + Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "dd/MM/yyyy HH:mm")).setFontSize(9);
  body.appendParagraph("Analisis asistido por Inteligencia Artificial basado en el Tablero Gerencial.").setItalic(true).setFontSize(9);
  
  body.appendParagraph("\nANALISIS Y DIAGNOSTICO").setHeading(DocumentApp.ParagraphHeading.HEADING1);
  agregarTextoInformeADocumento_(body, analisis);

  // Agregar Graficos
  if (imagenes && (imagenes.est || imagenes.act || imagenes.mes)) {
    body.appendPageBreak();
    body.appendParagraph("ANEXO: VISUALIZACIONES COMPLEMENTARIAS").setHeading(DocumentApp.ParagraphHeading.HEADING1);
    
    if (imagenes.est) {
      body.appendParagraph("\nRanking de Estaciones Saludables").setBold(true);
      try {
        let partes = imagenes.est.split(',');
        let mime = partes[0].match(/:(.*?);/)[1];
        let b = Utilities.base64Decode(partes[1]);
        let img = body.appendImage(Utilities.newBlob(b, mime));
        let w = img.getWidth();
        let h = img.getHeight();
        if (w > 460) {
            img.setWidth(460);
            img.setHeight(h * (460/w));
        }
      } catch(e){}
    }

    if (imagenes.act) {
      body.appendParagraph("\nDistribucion por Actividad").setBold(true);
      try {
        let partes = imagenes.act.split(',');
        let mime = partes[0].match(/:(.*?);/)[1];
        let b = Utilities.base64Decode(partes[1]);
        let img = body.appendImage(Utilities.newBlob(b, mime));
        img.setWidth(300);
        img.setHeight(300);
      } catch(e){}
    }

    if (imagenes.mes) {
      body.appendParagraph("\nEvolucion de Participaciones y Personas").setBold(true);
      try {
        let partes = imagenes.mes.split(',');
        let mime = partes[0].match(/:(.*?);/)[1];
        let b = Utilities.base64Decode(partes[1]);
        let img = body.appendImage(Utilities.newBlob(b, mime));
        let w = img.getWidth();
        let h = img.getHeight();
        if (w > 460) {
            img.setWidth(460);
            img.setHeight(h * (460/w));
        }
      } catch(e){}
    }
  }

  doc.saveAndClose();
  let pdf = DriveApp.getFileById(doc.getId()).getAs("application/pdf");
  DriveApp.getFileById(doc.getId()).setTrashed(true); // Borrar temporal

  // 3. Enviar Email
  MailApp.sendEmail({
    to: destinatario,
    subject: asunto || ("[Estaciones Saludables] Informe de Estadisticas"),
    body: (mensaje || "Se adjunta el informe analitico solicitado desde el Tablero Gerencial.") + "\n\nEste es un mensaje generado automaticamente desde el sistema.",
    attachments: [pdf]
  });

  return { ok: true, destino: destinatario };
}

function enviarInformeEspecialIA(nombreSolapa, mesClave, fechaPlanilla, comparacion, filtros, emailDestino, asuntoPersonalizado, mensajePersonalizado, emailSesion) {
  let destinatario = String(emailDestino || "").trim();
  if (!destinatario) {
    throw new Error("Debes indicar un correo electronico de destino.");
  }

  let resultado = generarInformeEspecialIA(nombreSolapa, mesClave, fechaPlanilla, comparacion, filtros, emailSesion);
  let bytes = Utilities.base64Decode(resultado.base64 || "");
  let adjunto = Utilities.newBlob(bytes, resultado.mimeType || "application/pdf", resultado.archivo || "informe.pdf");
  let asunto = String(asuntoPersonalizado || "").trim() || ("[Estaciones Saludables] " + (resultado.archivo || "Informe PDF"));
  let lineasCuerpo = [
    "Hola,",
    "",
    "Se adjunta el informe solicitado del programa Estaciones Saludables."
  ];

  if (String(mensajePersonalizado || "").trim()) {
    lineasCuerpo = lineasCuerpo.concat([
      "",
      String(mensajePersonalizado || "").trim()
    ]);
  }

  lineasCuerpo = lineasCuerpo.concat([
    "",
    "Tipo de informe: " + obtenerEtiquetaOrigenInforme_(resultado.origenInforme || "dato_duro"),
    "Alcance: " + (resultado.alcance || "-"),
    "",
    "Mensaje generado automaticamente desde la aplicacion."
  ]);

  let cuerpo = lineasCuerpo.join("\n");

  MailApp.sendEmail({
    to: destinatario,
    subject: asunto,
    body: cuerpo,
    attachments: [adjunto]
  });

  return {
    ok: true,
    destino: destinatario,
    archivo: resultado.archivo,
    origenInforme: resultado.origenInforme
  };
}

function obtenerContextoInformeIA_(resumen, mesClave, fechaPlanilla, comparacion, filtros) {
  let meses = Array.isArray(resumen.meses) ? resumen.meses : [];
  if (!meses.length) {
    throw new Error("La solapa no tiene meses con datos para generar un informe.");
  }

  let mes = null;

  for (let i = 0; i < meses.length; i++) {
    if (meses[i].mesClave === mesClave) {
      mes = meses[i];
      break;
    }
  }

  if (!mes) {
    mes = meses[0];
  }

  let dia = null;

  if (fechaPlanilla) {
    for (let j = 0; j < mes.dias.length; j++) {
      if (mes.dias[j].fechaPlanilla === fechaPlanilla) {
        dia = mes.dias[j];
        break;
      }
    }
  }

  let etiquetas = resumen.etiquetas || {
    cuarta: "Estacion",
    principal: "Referente",
    secundaria: "Actividad",
    terciaria: "Sector"
  };
  etiquetas = {
    cuarta: etiquetas.cuarta || "Estacion",
    principal: etiquetas.principal || "Referente",
    secundaria: etiquetas.secundaria || "Actividad",
    terciaria: etiquetas.terciaria || "Sector",
    cuartaPlural: pluralizarEtiquetaBackend_(etiquetas.cuarta || "Estacion"),
    principalPlural: pluralizarEtiquetaBackend_(etiquetas.principal || "Referente"),
    secundariaPlural: pluralizarEtiquetaBackend_(etiquetas.secundaria || "Actividad"),
    terciariaPlural: pluralizarEtiquetaBackend_(etiquetas.terciaria || "Sector")
  };
  let origen = dia || mes;
  let comparacionContexto = obtenerComparacionInformeIA_(resumen, comparacion, mes, dia);
  let metricas = construirMetricasPeriodo_(origen, mes, dia ? "dia" : "mes", etiquetas);

  return {
    mes: mes,
    dia: dia,
    comparacion: comparacionContexto,
    metricas: metricas,
    titulo: dia ? ("Dia " + dia.fechaPlanilla + " de " + mes.mesTexto) : ("Mes " + mes.mesTexto),
    etiquetas: etiquetas,
    filtrosAplicados: normalizarFiltrosResumenEspecial_(filtros),
    datosPrompt: {
      solapa: resumen.nombre,
      alcance: dia ? "dia" : "mes",
      periodo: dia ? dia.fechaPlanilla : mes.mesTexto,
      ultimaFechaCargaDetectada: resumen.ultimaFechaCarga || "",
      filtrosAplicados: normalizarFiltrosResumenEspecial_(filtros),
      personasUnicas: dia ? dia.personasUnicas : mes.personasUnicasMes,
      participaciones: dia ? dia.prestaciones : mes.prestacionesTotales,
      fechasConCargaDelMes: mes.fechasConCarga,
      totalGeneralParticipacionesArchivo: resumen.totalPrestacionesArchivo || 0,
      topCuarta: resumirConteosParaPrompt_(origen.estaciones, 8),
      topPrincipal: resumirConteosParaPrompt_(origen.profesores, 8),
      topSecundaria: resumirConteosParaPrompt_(origen.actividades, 8),
      topTerciaria: resumirConteosParaPrompt_(origen.sectores, 8),
      detalleDiasMes: resumirDiasParaPrompt_(mes.dias, 12),
      metricasDerivadas: metricas,
      etiquetas: etiquetas,
      comparacion: comparacionContexto ? comparacionContexto.datosPrompt : null
    }
  };
}

function obtenerComparacionInformeIA_(resumen, comparacion, mesBase, diaBase) {
  if (!comparacion || !comparacion.tipo) {
    return null;
  }

  let tipo = String(comparacion.tipo).toLowerCase();
  if (tipo !== "mes" && tipo !== "dia") {
    return null;
  }

  let meses = Array.isArray(resumen.meses) ? resumen.meses : [];
  let mesComparado = null;
  let diaComparado = null;

  for (let i = 0; i < meses.length; i++) {
    if (meses[i].mesClave === comparacion.mesClave) {
      mesComparado = meses[i];
      break;
    }
  }

  if (!mesComparado) {
    throw new Error("No se encontro el periodo de comparacion seleccionado.");
  }

  if (tipo === "dia") {
    if (!comparacion.fechaPlanilla) {
      throw new Error("Falta seleccionar la fecha a comparar.");
    }

    for (let j = 0; j < mesComparado.dias.length; j++) {
      if (mesComparado.dias[j].fechaPlanilla === comparacion.fechaPlanilla) {
        diaComparado = mesComparado.dias[j];
        break;
      }
    }

    if (!diaComparado) {
      throw new Error("No se encontro el dia de comparacion seleccionado.");
    }
  }

  if (diaBase && tipo !== "dia") {
    throw new Error("Si el informe principal es diario, la comparacion tambien debe ser diaria.");
  }

  if (!diaBase && tipo !== "mes") {
    throw new Error("Si el informe principal es mensual, la comparacion tambien debe ser mensual.");
  }

  let origenBase = diaBase || mesBase;
  let origenComparado = diaComparado || mesComparado;
  let tituloBase = diaBase ? diaBase.fechaPlanilla : mesBase.mesTexto;
  let tituloComparado = diaComparado ? diaComparado.fechaPlanilla : mesComparado.mesTexto;
  let personasBase = diaBase ? diaBase.personasUnicas : mesBase.personasUnicasMes;
  let personasComparadas = diaComparado ? diaComparado.personasUnicas : mesComparado.personasUnicasMes;
  let participacionesBase = diaBase ? diaBase.prestaciones : mesBase.prestacionesTotales;
  let participacionesComparadas = diaComparado ? diaComparado.prestaciones : mesComparado.prestacionesTotales;

  return {
    tipo: tipo,
    titulo: (tipo === "dia" ? "Comparacion diaria" : "Comparacion mensual") + ": " + tituloBase + " vs " + tituloComparado,
    datosPrompt: {
      alcanceComparado: tipo,
      periodoBase: tituloBase,
      periodoComparado: tituloComparado,
      personasUnicasBase: personasBase,
      personasUnicasComparado: personasComparadas,
      variacionPersonasUnicas: construirVariacionPrompt_(personasBase, personasComparadas),
      participacionesBase: participacionesBase,
      participacionesComparado: participacionesComparadas,
      variacionParticipaciones: construirVariacionPrompt_(participacionesBase, participacionesComparadas),
      topCuartaBase: resumirConteosParaPrompt_(origenBase.estaciones, 8),
      topCuartaComparado: resumirConteosParaPrompt_(origenComparado.estaciones, 8),
      topPrincipalBase: resumirConteosParaPrompt_(origenBase.profesores, 8),
      topPrincipalComparado: resumirConteosParaPrompt_(origenComparado.profesores, 8),
      topSecundariaBase: resumirConteosParaPrompt_(origenBase.actividades, 8),
      topSecundariaComparado: resumirConteosParaPrompt_(origenComparado.actividades, 8),
      cambiosTopCuarta: construirCambiosTop_(
        resumirConteosParaPrompt_(origenBase.estaciones, 10),
        resumirConteosParaPrompt_(origenComparado.estaciones, 10)
      ),
      cambiosTopPrincipal: construirCambiosTop_(
        resumirConteosParaPrompt_(origenBase.profesores, 10),
        resumirConteosParaPrompt_(origenComparado.profesores, 10)
      ),
      cambiosTopSecundaria: construirCambiosTop_(
        resumirConteosParaPrompt_(origenBase.actividades, 10),
        resumirConteosParaPrompt_(origenComparado.actividades, 10)
      )
    }
  };
}

function construirVariacionPrompt_(actual, comparado) {
  let base = Number(comparado || 0);
  let valorActual = Number(actual || 0);
  let diferencia = valorActual - base;
  let porcentaje = base ? Number(((diferencia / base) * 100).toFixed(1)) : null;

  return {
    diferenciaAbsoluta: diferencia,
    diferenciaPorcentual: porcentaje
  };
}

function construirPromptInformeIA_(nombreSolapa, resumen, contexto) {
  let datosTexto = JSON.stringify(contexto.datosPrompt, null, 2);
  let tieneComparacion = !!contexto.comparacion;
  let seccionComparacion = tieneComparacion
    ? [
        "Bloque comparativo obligatorio:",
        "- Debes incluir una seccion titulada Comparacion con " + contexto.comparacion.datosPrompt.periodoComparado + ".",
        "- Debes comparar explicitamente personas unicas y participaciones, mencionando si suben, bajan o se mantienen.",
        "- Debes mencionar la diferencia absoluta y, si existe, la diferencia porcentual aproximada.",
        "- Debes señalar al menos 2 cambios relevantes en la composicion del periodo si pueden verse en los tops de " + contexto.etiquetas.principalPlural + " o " + contexto.etiquetas.secundariaPlural + ".",
        "- Si el JSON incluye " + contexto.etiquetas.cuartaPlural + " o " + contexto.etiquetas.terciariaPlural + ", debes incorporarlos de manera explicita en la lectura comparativa y no dejarlos como dato accesorio.",
        "- Debes cerrar esa seccion con una interpretacion de gestion y una implicancia operativa concreta."
      ].join("\n")
    : "No hay comparacion solicitada. No inventes comparaciones.";

  return [
    "Actua como un analista institucional especializado en salud publica, gestion territorial y analisis de datos del programa Estaciones Saludables del Gobierno de la Ciudad de Buenos Aires.",
    "Necesito un informe profesional, accionable y con capacidad real de interpretacion sobre datos de una solapa operativa.",
    "El informe debe ir mas alla de describir datos: tiene que identificar tendencias, variaciones relevantes, alertas prudentes, logros, comparaciones y lecturas utiles para la gestion.",
    "Recorda que no toda variacion negativa implica un problema estructural. Considera estacionalidad, clima, dinamicas territoriales, diferencias entre dispositivos y cambios en la oferta.",
    "El programa no busca solo volumen: tambien acceso, prevencion y presencia territorial.",
    "Reglas obligatorias:",
    "1. No inventes datos ni tendencias que no esten en el JSON.",
    "2. Si algo no puede inferirse, decilo explicitamente.",
    "3. Escribi con tono institucional, claro y concreto.",
    "4. Usa titulos cortos.",
    "5. Cierra con observaciones operativas y oportunidades de mejora especificas, no genericas.",
    "6. Si el alcance es mensual, menciona comportamientos destacados dentro de los dias del mes.",
    "7. Si el alcance es diario, enfocate en ese dia sin exagerar conclusiones mensuales.",
    "8. No entregues un texto vacio, incompleto o de menos de 350 palabras.",
    "9. No te limites a enumerar numeros: cada seccion debe incluir interpretacion.",
    "10. Si hay comparacion solicitada, la comparacion es obligatoria y no opcional.",
    "11. Si en los datos aparecen " + contexto.etiquetas.cuartaPlural + " o " + contexto.etiquetas.terciariaPlural + ", debes analizarlos como dimensiones de gestion y no solo mencionarlos en una lista.",
    "12. Cuando sea posible, vincula volumen, composicion y concentracion entre " + contexto.etiquetas.cuartaPlural + ", " + contexto.etiquetas.principalPlural + ", " + contexto.etiquetas.secundariaPlural + " y " + contexto.etiquetas.terciariaPlural + ".",
    "",
    "Estructura obligatoria:",
    "1. Resumen ejecutivo: 3 a 5 oraciones con los hallazgos mas importantes.",
    "2. Hallazgos clave: desarrolla tendencias, volumen, composicion y comportamientos destacados. Si hay datos de " + contexto.etiquetas.cuartaPlural + " o " + contexto.etiquetas.terciariaPlural + ", debes incorporarlos en este apartado.",
    "3. Lectura operativa: interpreta que implican los datos para la gestion del dispositivo. Debes incluir al menos una lectura concreta sobre distribucion por " + contexto.etiquetas.cuartaPlural + " y/o por " + contexto.etiquetas.terciariaPlural + " si esos datos existen.",
    "4. " + (tieneComparacion ? "Comparacion con " + contexto.comparacion.datosPrompt.periodoComparado + ": obligatoria." : "Comparacion: solo si corresponde, sin inventar."),
    "5. Proyeccion y tendencias probables: anticipa escenarios razonables a corto plazo sin afirmar certezas absolutas.",
    "6. Recomendaciones: 2 o 3 sugerencias concretas, realistas y basadas en evidencia.",
    "",
    seccionComparacion,
    "",
    "Solapa: " + nombreSolapa,
    "Alcance solicitado: " + contexto.titulo,
    "Ultima fecha de carga detectada: " + (resumen.ultimaFechaCarga || "Sin dato"),
    "",
    "Datos estructurados:",
    datosTexto
  ].join("\n");
}

function solicitarInformeGemini_(prompt) {
  let props = PropertiesService.getScriptProperties();
  let apiKey = props.getProperty("GEMINI_API_KEY");
  let model = props.getProperty("GEMINI_MODEL") || "gemini-2.5-flash";

  if (!apiKey) {
    throw new Error("Falta configurar GEMINI_API_KEY en las propiedades del script.");
  }

  let url = "https://generativelanguage.googleapis.com/v1beta/models/" + encodeURIComponent(model) + ":generateContent?key=" + encodeURIComponent(apiKey);
  let payload = {
    contents: [
      {
        parts: [
          {
            text: prompt
          }
        ]
      }
    ],
    generationConfig: {
      temperature: 0.3,
      topP: 0.9,
      maxOutputTokens: 2400
    }
  };

  let response = UrlFetchApp.fetch(url, {
    method: "post",
    contentType: "application/json",
    muteHttpExceptions: true,
    payload: JSON.stringify(payload)
  });

  let status = response.getResponseCode();
  let body = response.getContentText();
  let data = {};

  try {
    data = JSON.parse(body);
  } catch (error) {
    throw new Error("Gemini devolvio una respuesta no valida.");
  }

  if (status < 200 || status >= 300) {
    let mensaje = data && data.error && data.error.message ? data.error.message : body;
    throw new Error("Error al generar el informe con Gemini: " + mensaje);
  }

  let texto = extraerTextoGemini_(data);
  let finishReason = obtenerFinishReasonGemini_(data);
  if (!texto) {
    throw new Error("Gemini no devolvio contenido de texto.");
  }

  if (finishReason && String(finishReason).toUpperCase() === "MAX_TOKENS") {
    texto += "\n[RESPUESTA_TRUNCADA_POR_TOKENS]";
  }

  return texto;
}

/**
 * Función para configurar la API KEY de OpenRouter de forma segura.
 */
function configurarOpenRouter() {
  const ui = SpreadsheetApp.getUi();
  const res = ui.prompt("Configuración de OpenRouter", "Ingresa tu API KEY de OpenRouter:", ui.ButtonSet.OK_CANCEL);
  
  if (res.getSelectedButton() == ui.Button.OK) {
    const key = res.getResponseText().trim();
    if (key.indexOf("sk-or-") !== 0) {
      ui.alert("⚠️ Error: La clave ingresada no parece ser una clave de OpenRouter válida.");
      return;
    }
    PropertiesService.getScriptProperties().setProperty("OPENROUTER_API_KEY", key);
    PropertiesService.getScriptProperties().setProperty("OPENROUTER_MODEL", "anthropic/claude-3-haiku");
    ui.alert("✅ Configuración exitosa. Ahora el sistema usará Claude 3 Haiku vía OpenRouter.");
  }
}

/**
 * Motor de solicitudes para OpenRouter (Claude/Gemini/GPT).
 */
function solicitarInformeOpenRouter_(prompt) {
  const props = PropertiesService.getScriptProperties();
  const apiKey = props.getProperty("OPENROUTER_API_KEY");
  const model = props.getProperty("OPENROUTER_MODEL") || "anthropic/claude-3-haiku";

  if (!apiKey) {
    throw new Error("⚠️ Falta configurar OPENROUTER_API_KEY. Ve al menú Administración > Configurar OpenRouter.");
  }

  const url = "https://openrouter.ai/api/v1/chat/completions";
  const payload = {
    "model": model,
    "messages": [
      {"role": "system", "content": "Eres un analista experto en gestión operativa de estaciones saludables. Tu objetivo es generar informes precisos y profesionales."},
      {"role": "user", "content": prompt}
    ],
    "temperature": 0.3,
    "max_tokens": 2500
  };

  const response = UrlFetchApp.fetch(url, {
    "method": "post",
    "contentType": "application/json",
    "headers": {
      "Authorization": "Bearer " + apiKey,
      "HTTP-Referer": "https://google.com", // Requerido por OpenRouter
      "X-Title": "Antigravity ES System"
    },
    "muteHttpExceptions": true,
    "payload": JSON.stringify(payload)
  });

  const status = response.getResponseCode();
  const body = response.getContentText();
  let data = {};

  try {
    data = JSON.parse(body);
  } catch (e) {
    throw new Error("Error: No se pudo interpretar la respuesta de OpenRouter.");
  }

  if (status !== 200) {
    const errorMsg = data.error ? (data.error.message || JSON.stringify(data.error)) : body;
    throw new Error("Error de OpenRouter (" + status + "): " + errorMsg);
  }

  if (data.choices && data.choices[0] && data.choices[0].message) {
    return data.choices[0].message.content;
  }

  throw new Error("OpenRouter no devolvió contenido de texto.");
}

function obtenerFinishReasonGemini_(data) {
  let candidatos = data && data.candidates ? data.candidates : [];
  for (let i = 0; i < candidatos.length; i++) {
    if (candidatos[i] && candidatos[i].finishReason) {
      return candidatos[i].finishReason;
    }
  }

  return "";
}

function extraerTextoGemini_(data) {
  let candidatos = data && data.candidates ? data.candidates : [];

  for (let i = 0; i < candidatos.length; i++) {
    let partes = candidatos[i] &&
      candidatos[i].content &&
      candidatos[i].content.parts
      ? candidatos[i].content.parts
      : [];

    let fragmentos = [];

    for (let j = 0; j < partes.length; j++) {
      if (partes[j] && partes[j].text) {
        fragmentos.push(partes[j].text);
      }
    }

    let texto = fragmentos.join("\n").trim();
    if (texto) {
      return texto;
    }
  }

  return "";
}

function resumirConteosParaPrompt_(items, limite) {
  let lista = Array.isArray(items) ? items.slice(0, limite) : [];

  return lista.map(function(item) {
    return {
      nombre: item.nombre,
      cantidad: item.cantidad
    };
  });
}

function resumirDiasParaPrompt_(dias, limite) {
  let lista = Array.isArray(dias) ? dias.slice(0, limite) : [];

  return lista.map(function(dia) {
    return {
      fechaPlanilla: dia.fechaPlanilla,
      personasUnicas: dia.personasUnicas,
      participaciones: dia.prestaciones
    };
  });
}

function construirNombreArchivoInformeIA_(nombreSolapa, contexto, origenInforme) {
  let partes = ["informe", nombreSolapa];

  if (contexto && contexto.dia && contexto.dia.fechaPlanilla) {
    partes.push(contexto.dia.fechaPlanilla);
  } else if (contexto && contexto.mes && contexto.mes.mesClave) {
    partes.push(contexto.mes.mesClave);
  }

  if (contexto && contexto.comparacion) {
    partes.push("comparativo");
  }

  if (origenInforme) {
    partes.push(origenInforme === "ia" ? "con_ia" : "dato_duro");
  }

  return partes.join("_")
    .toLowerCase()
    .replace(/[^\w\-]+/g, "_")
    .replace(/_+/g, "_") + ".pdf";
}

/**
 * Genera una solapa de GRAFICOS con tablas dinámicas y gráficos basados en TALLERES.
 */
function generarDashboardGerencial() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let hojaGraficos = ss.getSheetByName("GRAFICOS");
  
  if (hojaGraficos) {
    ss.deleteSheet(hojaGraficos);
  }
  hojaGraficos = ss.insertSheet("GRAFICOS");
  
  const hojaTalleres = ss.getSheetByName("TALLERES");
  if (!hojaTalleres || hojaTalleres.getLastRow() < 2) {
    SpreadsheetApp.getUi().alert("❌ Error: La solapa TALLERES está vacía o no existe. No se pueden generar gráficos.");
    return;
  }
  
  const datos = hojaTalleres.getDataRange().getValues();
  const headers = datos[0];
  const filas = datos.slice(1);
  
  // 1. Procesar Datos para Tablas de Resumen
  const resumenEstaciones = {};
  const resumenActividades = {};
  const resumenMensual = {};
  
  const idxFecha = headers.indexOf("FECHA ACTIVIDAD");
  const idxEstacion = headers.indexOf("ESTACION");
  const idxActividad = headers.indexOf("ACTIVIDAD");
  
  filas.forEach(fila => {
    const estacion = fila[idxEstacion] || "Sin Datos";
    const actividad = fila[idxActividad] || "Sin Datos";
    const fechaRaw = fila[idxFecha];
    
    // Conteo Estaciones
    resumenEstaciones[estacion] = (resumenEstaciones[estacion] || 0) + 1;
    
    // Conteo Actividades
    resumenActividades[actividad] = (resumenActividades[actividad] || 0) + 1;
    
    // Conteo Mensual
    if (fechaRaw instanceof Date) {
      const mesAnio = Utilities.formatDate(fechaRaw, ss.getSpreadsheetTimeZone(), "yyyy-MM");
      resumenMensual[mesAnio] = (resumenMensual[mesAnio] || 0) + 1;
    }
  });
  
  // 2. Volcar Tablas en GRAFICOS (Zona oculta o lateral)
  // Tabla Estaciones (A:B)
  const dataEst = [["ESTACION", "PARTICIPANTES"]].concat(Object.entries(resumenEstaciones).sort((a,b) => b[1] - a[1]));
  hojaGraficos.getRange(1, 1, dataEst.length, 2).setValues(dataEst);
  
  // Tabla Actividades (D:E)
  const dataAct = [["ACTIVIDAD", "PARTICIPANTES"]].concat(Object.entries(resumenActividades).sort((a,b) => b[1] - a[1]));
  hojaGraficos.getRange(1, 4, dataAct.length, 2).setValues(dataAct);
  
  // Tabla Mensual (G:H)
  const dataMes = [["MES", "PARTICIPANTES"]].concat(Object.entries(resumenMensual).sort((a,b) => a[0].localeCompare(b[0])));
  hojaGraficos.getRange(1, 7, dataMes.length, 2).setValues(dataMes);
  
  // 3. Crear Gráficos
  
  // Gráfico 1: Barras - Estaciones (A tope)
  const chartEst = hojaGraficos.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(hojaGraficos.getRange(1, 1, Math.min(dataEst.length, 15), 2))
    .setPosition(2, 10, 0, 0)
    .setOption('title', 'Top 15 Estaciones con Mayor Participación')
    .setOption('width', 600)
    .setOption('height', 400)
    .setOption('colors', ['#153244'])
    .build();
    
  // Gráfico 2: Torta - Actividades
  const chartAct = hojaGraficos.newChart()
    .setChartType(Charts.ChartType.PIE)
    .addRange(hojaGraficos.getRange(1, 4, Math.min(dataAct.length, 10), 2))
    .setPosition(2, 20, 0, 0)
    .setOption('title', 'Distribución por Tipo de Actividad (Top 10)')
    .setOption('width', 500)
    .setOption('height', 400)
    .setOption('is3D', true)
    .build();

  // Gráfico 3: Líneas/Áreas - Evolución Mensual
  const chartMes = hojaGraficos.newChart()
    .setChartType(Charts.ChartType.AREA)
    .addRange(hojaGraficos.getRange(1, 7, dataMes.length, 2))
    .setPosition(23, 10, 0, 0)
    .setOption('title', 'Evolución Mensual de Asistencia')
    .setOption('width', 1110)
    .setOption('height', 350)
    .setOption('colors', ['#ffcb00'])
    .setOption('legend', {position: 'bottom'})
    .build();

  hojaGraficos.insertChart(chartEst);
  hojaGraficos.insertChart(chartAct);
  hojaGraficos.insertChart(chartMes);
  
  // Formateo final
  hojaGraficos.getRange("A1:H1").setFontWeight("bold").setBackground("#f3f3f3");
  hojaGraficos.autoResizeColumns(1, 8);
  
  // Ocultar las columnas de datos crudos si prefieres que se vea solo el gráfico
  // hojaGraficos.hideColumns(1, 8); 

  ss.setActiveSheet(hojaGraficos);
  SpreadsheetApp.getUi().alert("✅ Dashboard de Gráficos generado con éxito en la solapa GRAFICOS.");
}

/**
 * Procesa los datos de TALLERES para el frontend.
 * Evita enviar miles de filas, solo envía los totales agregados.
 */
function obtenerDatosGraficos(filtroEstacion, filtroDias) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const hojaTalleres = ss.getSheetByName("TALLERES");
  if (!hojaTalleres || hojaTalleres.getLastRow() < 2) return { ok: false, msg: "Sin datos" };

  const datos = hojaTalleres.getDataRange().getValues();
  const headers = datos[0];
  const filas = datos.slice(1);

  const idxDni = headers.indexOf("DNI");
  const idxFecha = headers.indexOf("FECHA ACTIVIDAD");
  const idxEstacion = headers.indexOf("ESTACION");
  const idxActividad = headers.indexOf("ACTIVIDAD");
  
  // Buscar columna para Tipo de Día o usar la última
  let idxTipoDia = -1;
  for (let i = 0; i < headers.length; i++) {
    const h = String(headers[i]).toUpperCase();
    if (h.includes("TIPO") && h.includes("DIA")) idxTipoDia = i;
    else if (h.includes("FERIADO") || h.includes("FINDE")) idxTipoDia = i;
  }
  if (idxTipoDia === -1) {
    idxTipoDia = headers.length - 1; // usar la ultima si no hay coincidencia
  }

  const est = {};
  const act = {};
  const mesCounts = {};
  const mesUnicos = {};
  const listaEstaciones = {};

  filas.forEach(fila => {
    const e = fila[idxEstacion] || "Sin Datos";
    listaEstaciones[e] = true;
    
    if (filtroEstacion && e !== filtroEstacion) return;

    const f = fila[idxFecha];
    
    let isFinde = false;
    const tipoColVal = String(fila[idxTipoDia] || "").toUpperCase();
    
    // Validar por la columna de feriados o por el día de la semana
    if (tipoColVal.includes("FINDE") || tipoColVal.includes("FERIADO") || tipoColVal.includes("SAB") || tipoColVal.includes("DOM") || tipoColVal.includes("SADOFE")) {
      isFinde = true;
    } else if (f instanceof Date) {
      const day = f.getDay();
      isFinde = (day === 0 || day === 6);
    }
    
    if (filtroDias === "semana" && isFinde) return;
    if (filtroDias === "finde" && !isFinde) return;

    const d = String(fila[idxDni] || "").trim();
    const a = fila[idxActividad] || "Sin Datos";

    est[e] = (est[e] || 0) + 1;
    act[a] = (act[a] || 0) + 1;
    
    if (f instanceof Date) {
      const m = f.getFullYear() + "-" + String(f.getMonth() + 1).padStart(2, '0');
      mesCounts[m] = (mesCounts[m] || 0) + 1;
      
      if (!mesUnicos[m]) mesUnicos[m] = {};
      if (d) mesUnicos[m][d] = true;
    }
  });

  const mensual = Object.keys(mesCounts).sort().map(m => {
    return [
      m, 
      mesCounts[m], 
      mesUnicos[m] ? Object.keys(mesUnicos[m]).length : 0
    ];
  });

  return {
    ok: true,
    estaciones: Object.entries(est).sort((a,b) => b[1] - a[1]).slice(0, 15),
    actividades: Object.entries(act).sort((a,b) => b[1] - a[1]).slice(0, 10),
    mensual: mensual,
    listaEstaciones: Object.keys(listaEstaciones)
  };
}

/**
 * Rellena automáticamente la columna "TIPO DIA" (H) en TALLERES.
 * Si ya tiene la palabra "SADOFE", la respeta (útil para feriados cargados a mano).
 * Si está vacía o dice "SEMANA", evalúa si es fin de semana o no y la sobrescribe.
 */
function actualizarColumnaSadofe(silencioso = false) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const hoja = ss.getSheetByName("TALLERES");
  if (!hoja) {
    if (!silencioso) SpreadsheetApp.getUi().alert("❌ No se encontró la solapa TALLERES");
    return;
  }
  
  const datos = hoja.getDataRange().getValues();
  if (datos.length < 2) {
    if (!silencioso) SpreadsheetApp.getUi().alert("⚠️ La solapa TALLERES está vacía.");
    return;
  }
  
  const headers = datos[0];
  const idxFecha = headers.indexOf("FECHA ACTIVIDAD");
  
  if (idxFecha === -1) {
    if (!silencioso) SpreadsheetApp.getUi().alert("❌ No se encontró la columna 'FECHA ACTIVIDAD'");
    return;
  }
  
  // Buscar columna TIPO DIA, o usar la H (índice 7)
  let idxTipoDia = -1;
  for (let i = 0; i < headers.length; i++) {
    const h = String(headers[i]).toUpperCase();
    if (h.includes("TIPO") || h.includes("SADOFE") || h.includes("FERIADO")) {
      idxTipoDia = i;
      break;
    }
  }
  
  // Forzar el índice 7 si el usuario pidió la columna H y no había un header previo claro
  if (idxTipoDia === -1) {
    idxTipoDia = 7; // Columna H
    hoja.getRange(1, idxTipoDia + 1).setValue("TIPO DIA");
  }
  
  const rangoActualizar = hoja.getRange(2, idxTipoDia + 1, datos.length - 1, 1);
  const valoresNuevos = [];
  
  let cambiados = 0;

  for (let i = 1; i < datos.length; i++) {
    const f = datos[i][idxFecha];
    const valorActual = String(datos[i][idxTipoDia] || "").toUpperCase().trim();
    
    // Si ya dice explícitamente SADOFE o FERIADO, lo respetamos por si fue cargado a mano
    if (valorActual === "SADOFE" || valorActual.includes("FERIADO")) {
      valoresNuevos.push([valorActual]);
      continue;
    }

    if (f instanceof Date) {
      const day = f.getDay();
      const esFinde = (day === 0 || day === 6);
      const valorNuevo = esFinde ? "SADOFE" : "SEMANA";
      
      if (valorActual !== valorNuevo) cambiados++;
      valoresNuevos.push([valorNuevo]);
    } else {
      valoresNuevos.push([datos[i][idxTipoDia]]); // dejar como estaba si la fecha es inválida
    }
  }
  
  if (valoresNuevos.length > 0) {
    rangoActualizar.setValues(valoresNuevos);
  }
  
  if (!silencioso) {
    SpreadsheetApp.getUi().alert(`✅ Columna actualizada correctamente en ${cambiados} filas.\n\nTodos los fines de semana dicen 'SADOFE' y los días hábiles dicen 'SEMANA'.\n\nSi hay un feriado en día de semana, puedes escribir manualmente 'SADOFE' en esa celda y este script lo respetará.`);
  }
}
