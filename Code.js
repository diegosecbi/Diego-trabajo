const SOLAPAS_ESPECIALES = [
  "CRONOGRAMA",
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
  "CRONOGRAMA_NORMALIZADO",
  "CONTROL_CUMPLIMIENTO",
  "DIAGNOSTICO_CRONOGRAMA"
];

const FUENTES_ESPECIALES_EXTERNAS = {
  "TALLERES": {
    spreadsheetId: "1QMzJPBMWo0qCaSTD5cw78BX_sleg-5h2u914cDGvo4g",
    sheetName: "2026",
    tipoResumen: "actividad_externa"
  }
};

const PERFILES_USUARIOS = {
  admin: [],
  coordinacion: [],
  operativo: []
};

const CABECERAS_USUARIOS = [
  "EMAIL",
  "PERFIL",
  "ACTIVO",
  "OBSERVACIONES"
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

const FUENTE_CRONOGRAMA = {
  spreadsheetId: "1Bqoe1OC10jfXZ5t0CAuF_oko3Y5vZnK5ad4O4Vck2tM",
  sheetId: 1547157225,
  nombreReferencia: "Grilla de clases Estaciones Saludables",
  rangoLectura: "A1:W567",
  anioObjetivo: 2026,
  mesObjetivo: 3
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
let cacheProfesoresBase_ = null;

function doGet() {
  return HtmlService.createHtmlOutputFromFile("index");
}

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Administracion")
    .addItem("Preparar Hoja De Usuarios", "prepararHojaUsuarios")
    .addSeparator()
    .addSubMenu(
      SpreadsheetApp.getUi()
        .createMenu("Cronograma")
        .addItem("Preparar Solapas De Control", "prepararSolapasControlCronograma")
        .addItem("Importar Cronograma Normalizado", "importarCronogramaNormalizado")
        .addItem("Diagnosticar Importacion De Cronograma", "diagnosticarImportacionCronograma")
        .addItem("Generar Control De Cumplimiento", "generarControlCumplimiento")
    )
    .addToUi();
}

function prepararHojaUsuarios() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const hoja = asegurarSolapaEstructural_(
    ss,
    "USUARIOS",
    CABECERAS_USUARIOS,
    "Administracion de accesos. Completa EMAIL, PERFIL (operativo/coordinacion/admin) y ACTIVO (SI/NO)."
  );

  if (hoja.getLastRow() <= 1) {
    hoja.getRange(2, 1, 3, CABECERAS_USUARIOS.length).setValues([
      ["admin@dominio.com", "admin", "SI", "Ejemplo"],
      ["coordinacion@dominio.com", "coordinacion", "SI", "Ejemplo"],
      ["operativo@dominio.com", "operativo", "SI", "Ejemplo"]
    ]);
  }

  hoja.getRange("B2:B").setDataValidation(
    SpreadsheetApp.newDataValidation()
      .requireValueInList(["admin", "coordinacion", "operativo"], true)
      .setAllowInvalid(false)
      .build()
  );

  hoja.getRange("C2:C").setDataValidation(
    SpreadsheetApp.newDataValidation()
      .requireValueInList(["SI", "NO"], true)
      .setAllowInvalid(false)
      .build()
  );

  hoja.autoResizeColumns(1, CABECERAS_USUARIOS.length);

  SpreadsheetApp.getUi().alert(
    "La hoja USUARIOS esta lista. Completa EMAIL, PERFIL y ACTIVO para habilitar accesos."
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

function prepararSolapaEstructural_(ss, nombreSolapa, cabeceras, descripcion) {
  let hoja = ss.getSheetByName(nombreSolapa);

  if (!hoja) {
    hoja = ss.insertSheet(nombreSolapa);
  }

  hoja.clear();
  hoja.getRange(1, 1, 1, cabeceras.length).setValues([cabeceras]);
  hoja.setFrozenRows(1);
  hoja.getRange(1, 1, 1, cabeceras.length)
    .setBackground("#153244")
    .setFontColor("#ffffff")
    .setFontWeight("bold");
  hoja.autoResizeColumns(1, cabeceras.length);

  if (descripcion) {
    hoja.getRange(1, 1).setNote(descripcion);
  }
}

function asegurarSolapaEstructural_(ss, nombreSolapa, cabeceras, descripcion) {
  let hoja = ss.getSheetByName(nombreSolapa);

  if (!hoja) {
    hoja = ss.insertSheet(nombreSolapa);
  }

  const rangoCabecera = hoja.getRange(1, 1, 1, cabeceras.length);
  const cabeceraActual = hoja.getLastColumn() >= cabeceras.length
    ? rangoCabecera.getDisplayValues()[0]
    : [];

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
  hoja.autoResizeColumns(1, cabeceras.length);

  if (descripcion) {
    hoja.getRange(1, 1).setNote(descripcion);
  }

  return hoja;
}

function importarCronogramaNormalizado() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  prepararSolapasControlCronogramaSilencioso_(ss);

  const hojaDestino = ss.getSheetByName("CRONOGRAMA_NORMALIZADO");
  const hojaOrigen = obtenerHojaCronogramaExterna_();
  const datos = leerDatosCronogramaExterno_(hojaOrigen);
  const filas = construirFilasCronogramaNormalizado_(datos);

  hojaDestino.clear();
  hojaDestino.getRange(1, 1, 1, CABECERAS_CRONOGRAMA_NORMALIZADO.length)
    .setValues([CABECERAS_CRONOGRAMA_NORMALIZADO]);

  if (filas.length) {
    hojaDestino.getRange(2, 1, filas.length, CABECERAS_CRONOGRAMA_NORMALIZADO.length)
      .setValues(filas);
  }

  hojaDestino.setFrozenRows(1);
  hojaDestino.getRange(1, 1, 1, CABECERAS_CRONOGRAMA_NORMALIZADO.length)
    .setBackground("#153244")
    .setFontColor("#ffffff")
    .setFontWeight("bold");
  hojaDestino.autoResizeColumns(1, CABECERAS_CRONOGRAMA_NORMALIZADO.length);

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

  hojaDestino.clear();
  hojaDestino.getRange(1, 1, 1, CABECERAS_DIAGNOSTICO_CRONOGRAMA.length)
    .setValues([CABECERAS_DIAGNOSTICO_CRONOGRAMA]);

  if (diagnostico.length) {
    hojaDestino.getRange(2, 1, diagnostico.length, CABECERAS_DIAGNOSTICO_CRONOGRAMA.length)
      .setValues(diagnostico);
  }

  hojaDestino.setFrozenRows(1);
  hojaDestino.getRange(1, 1, 1, CABECERAS_DIAGNOSTICO_CRONOGRAMA.length)
    .setBackground("#153244")
    .setFontColor("#ffffff")
    .setFontWeight("bold");
  hojaDestino.autoResizeColumns(1, CABECERAS_DIAGNOSTICO_CRONOGRAMA.length);

  SpreadsheetApp.getUi().alert(
    "Diagnostico generado. Filas analizadas: " + diagnostico.length
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

  hojaDestino.clear();
  hojaDestino.getRange(1, 1, 1, CABECERAS_CONTROL_CUMPLIMIENTO.length)
    .setValues([CABECERAS_CONTROL_CUMPLIMIENTO]);

  if (filas.length) {
    hojaDestino.getRange(2, 1, filas.length, CABECERAS_CONTROL_CUMPLIMIENTO.length)
      .setValues(filas);
  }

  hojaDestino.setFrozenRows(1);
  hojaDestino.getRange(1, 1, 1, CABECERAS_CONTROL_CUMPLIMIENTO.length)
    .setBackground("#153244")
    .setFontColor("#ffffff")
    .setFontWeight("bold");
  hojaDestino.autoResizeColumns(1, CABECERAS_CONTROL_CUMPLIMIENTO.length);

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
    const actividadMeta = obtenerMetadatosActividad_(fila[4]);
    const profesorCanonico = obtenerProfesorCanonico_(fila[5]);
    return {
      estacionProgramada: estacionProgramada,
      diaSemanaProgramado: limpiarTexto_(fila[1]).toUpperCase(),
      horaInicioProgramada: limpiarTexto_(fila[2]),
      horaFinProgramada: limpiarTexto_(fila[3]),
      actividadProgramada: actividadMeta.nombreCanonico || limpiarTexto_(fila[4]),
      profesorProgramado: profesorCanonico || limpiarTexto_(fila[5]),
      claveEstacion: limpiarTexto_(fila[9]),
      claveEstacionCanonica: obtenerClaveEstacionCanonica_(estacionProgramada),
      claveActividad: limpiarTexto_(fila[10]),
      claveProfesor: limpiarTexto_(fila[11]) || obtenerClaveProfesorCanonica_(fila[5]),
      fechaProgramada: normalizarFechaCarga_(fila[12]),
      categoriaActividad: limpiarTexto_(fila[13]) || actividadMeta.categoria || "",
      excluidaCruce: limpiarTexto_(fila[14]) === "SI" || actividadMeta.excluida,
      codigoCruce: limpiarTexto_(fila[15])
    };
  }).filter(function(item) {
    return item.estacionProgramada && item.diaSemanaProgramado && item.actividadProgramada && item.fechaProgramada;
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

  const datos = hoja.getRange(2, 1, ultimaFila - 1, 6).getValues();

  return datos.map(function(fila) {
    const fecha = normalizarFechaTalleresControl_(fila[1]);
    const diaSemana = obtenerDiaSemanaDesdeFechaTexto_(fecha);
    const estacion = limpiarTexto_(fila[2]);
    const profesor = obtenerProfesorCanonico_(fila[3]);
    const actividadMeta = obtenerMetadatosActividad_(fila[4]);
    const sector = limpiarTexto_(fila[5]);
    const claveEstacionCanonica = obtenerClaveEstacionCanonica_(estacion);
    const claveActividad = normalizarTexto_(actividadMeta.nombreCanonico || fila[4]).toUpperCase();

    return {
      fechaReal: fecha,
      diaSemanaReal: diaSemana,
      estacionReal: estacion,
      actividadReal: actividadMeta.nombreCanonico || limpiarTexto_(fila[4]),
      profesorReal: profesor,
      sectorDeCarga: sector,
      claveEstacion: normalizarTexto_(estacion).toUpperCase(),
      claveEstacionCanonica: claveEstacionCanonica,
      claveActividad: claveActividad,
      claveProfesor: obtenerClaveProfesorCanonica_(profesor),
      categoriaActividad: actividadMeta.categoria || "",
      excluidaCruce: !!actividadMeta.excluida,
      codigoCruce: construirCodigoCruce_(fecha, claveEstacionCanonica || normalizarTexto_(estacion).toUpperCase(), claveActividad)
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
  const indiceCronograma = {};
  const filas = [];

  programados.forEach(function(item, indice) {
    item._idCumplimiento = "P" + indice;
    item._cumplido = false;
    const clave = item.codigoCruce || construirCodigoCruce_(
      item.fechaProgramada,
      item.claveEstacionCanonica || item.claveEstacion,
      item.claveActividad
    );

    if (!indiceCronograma[clave]) {
      indiceCronograma[clave] = [];
    }
    indiceCronograma[clave].push(item);
  });

  reales.forEach(function(item) {
    const claveReal = item.codigoCruce || construirCodigoCruce_(
      item.fechaReal,
      item.claveEstacionCanonica || item.claveEstacion,
      item.claveActividad
    );
    const programado = buscarMejorCoincidenciaCronograma_(indiceCronograma, claveReal);
    const claveProgramada = programado
      ? (programado.codigoCruce || construirCodigoCruce_(programado.fechaProgramada, programado.claveEstacionCanonica || programado.claveEstacion, programado.claveActividad))
      : "";

    if (programado) {
      programado._cumplido = true;
    }

    filas.push([
      item.fechaReal,
      item.diaSemanaReal,
      item.estacionReal,
      item.actividadReal,
      item.profesorReal,
      item.sectorDeCarga,
      programado ? programado.estacionProgramada : "",
      programado ? programado.diaSemanaProgramado : "",
      programado ? programado.horaInicioProgramada : "",
      programado ? programado.horaFinProgramada : "",
      programado ? programado.actividadProgramada : "",
      programado ? programado.profesorProgramado : "",
      programado ? "PROGRAMADO_Y_REALIZADO" : "CARGADO_FUERA_DE_CRONOGRAMA",
      construirDetalleCumplimiento_(item, programado),
      claveProgramada || claveReal,
      item.categoriaActividad || "",
      item.excluidaCruce ? "SI" : "NO",
      claveReal,
      claveProgramada
    ]);
  });

  programados.forEach(function(programado) {
    if (programado._cumplido) return;

    const clave = programado.codigoCruce || construirCodigoCruce_(
      programado.fechaProgramada,
      programado.claveEstacionCanonica || programado.claveEstacion,
      programado.claveActividad
    );

    filas.push([
      "",
      "",
      "",
      "",
      "",
      "",
      programado.estacionProgramada,
      programado.diaSemanaProgramado,
      programado.horaInicioProgramada,
      programado.horaFinProgramada,
      programado.actividadProgramada,
      programado.profesorProgramado,
      "PROGRAMADO_NO_CARGADO",
      "No se encontraron registros en TALLERES para esta fecha, estacion y actividad.",
      clave,
      "",
      "NO",
      "",
      clave
    ]);
  });

  return filas;
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

  if (real.claveProfesor && programado.claveProfesor && real.claveProfesor !== programado.claveProfesor) {
    return "Cumple cronograma por fecha, estacion y actividad. Profesor distinto al programado.";
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
        let profesorCanonico = obtenerProfesorCanonico_(entrada.profesor || "");
        let claves = construirClavesCronograma_(estacionActual, actividadMeta.nombreCanonico || entrada.actividad || contenido, profesorCanonico);
        let fechasProgramadas = fechasPorDia[mapeoDias[columna]] || [];

        fechasProgramadas.forEach(function(fechaProgramada) {
          resultado.push([
            estacionActual,
            mapeoDias[columna],
            entrada.horaInicio || "",
            entrada.horaFin || "",
            actividadMeta.nombreCanonico || entrada.actividad || contenido,
            profesorCanonico || "",
            entrada.tipo || "",
            FUENTE_CRONOGRAMA.nombreReferencia,
            entrada.observaciones || "",
            claves.estacion,
            claves.actividad,
            claves.profesor,
            fechaProgramada,
            actividadMeta.categoria || "",
            actividadMeta.excluida ? "SI" : "NO",
            construirCodigoCruce_(fechaProgramada, claves.estacion, claves.actividad)
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
  return {
    estacion: normalizarTexto_(estacion).toUpperCase(),
    actividad: normalizarTexto_(actividad).toUpperCase(),
    profesor: normalizarTexto_(profesor).toUpperCase()
  };
}

function obtenerClaveEstacionCanonica_(estacion) {
  const variantes = obtenerVariantesClaveEstacion_(estacion);
  return variantes.length ? variantes[0] : "";
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

  ESTACIONES_SALUDABLES_OFICIALES.forEach(function(canonica) {
    agregar(canonica, canonica);

    const base = limpiarTexto_(canonica)
      .replace(/^Estaciones?\s+Saludables?\s+/i, "")
      .replace(/^Estación\s+Saludable\s+/i, "")
      .trim();

    agregar(canonica, base);
    agregar(canonica, simplificarNombreEstacionParaCruce_(base));

    (ALIAS_ESTACIONES_SALUDABLES[canonica] || []).forEach(function(alias) {
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

  const actividades = ACTIVIDADES_CATALOGO_TEXTO.split(/\r?\n/).map(limpiarTexto_).filter(Boolean);
  const categorias = ACTIVIDADES_CATEGORIAS_TEXTO.split(/\r?\n/).map(limpiarTexto_).filter(Boolean);
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

function normalizarNombreActividadBase_(actividad) {
  return limpiarTexto_(actividad || "")
    .replace(/\s+\d+$/, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function obtenerMetadatosActividad_(actividad) {
  const original = limpiarTexto_(actividad || "");
  const catalogo = obtenerCatalogoActividades_();
  const candidatos = [
    original,
    normalizarNombreActividadBase_(original)
  ];

  for (let i = 0; i < candidatos.length; i++) {
    const clave = normalizarTexto_(candidatos[i]);
    if (catalogo[clave]) {
      return {
        nombreCanonico: catalogo[clave].nombre,
        categoria: catalogo[clave].categoria || "",
        excluida: esActividadExcluidaDeCronograma_(catalogo[clave].nombre, catalogo[clave].categoria || "")
      };
    }
  }

  return {
    nombreCanonico: original || normalizarNombreActividadBase_(original),
    categoria: "",
    excluida: esActividadExcluidaDeCronograma_(original, "")
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
  const anioConfigurado = Number(FUENTE_CRONOGRAMA.anioObjetivo || 0);
  if (anioConfigurado >= 2000 && anioConfigurado <= 2100) {
    return anioConfigurado;
  }

  const fuenteTalleres = FUENTES_ESPECIALES_EXTERNAS["TALLERES"];
  const candidato = fuenteTalleres ? Number(String(fuenteTalleres.sheetName || "").trim()) : 0;
  if (candidato >= 2000 && candidato <= 2100) {
    return candidato;
  }
  return new Date().getFullYear();
}

function obtenerMesCronogramaObjetivo_() {
  const mesConfigurado = Number(FUENTE_CRONOGRAMA.mesObjetivo || 0);
  if (mesConfigurado >= 1 && mesConfigurado <= 12) {
    return mesConfigurado;
  }
  return 3;
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

function obtenerDatos(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const hojas = ss.getSheets();
  const solapasEspeciales = obtenerNombresSolapasEspeciales_();
  const contextoUsuario = obtenerContextoUsuarioActual_();

  let estaciones = [];
  let totalRegistros = 0;
  let estacionesActivas = 0;

  const ahora = new Date();

  hojas.forEach(hoja => {
    let nombre = hoja.getName();

    if (SOLAPAS_EXCLUIDAS_SUPERVISION.indexOf(nombre) !== -1 || solapasEspeciales.indexOf(nombre) !== -1) return;

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
    usuario: contextoUsuario
  };
}

function obtenerContextoUsuarioActual_() {
  const email = obtenerEmailUsuarioActual_();
  const perfil = resolverPerfilUsuario_(email);
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
  const emailNormalizado = String(email || "").trim().toLowerCase();
  const perfiles = obtenerPerfilesUsuariosConfigurados_();

  if (!emailNormalizado) {
    return "sin_acceso";
  }

  if (perfiles.admin.indexOf(emailNormalizado) !== -1) {
    return "admin";
  }

  if (perfiles.coordinacion.indexOf(emailNormalizado) !== -1) {
    return "coordinacion";
  }

  if (perfiles.operativo.indexOf(emailNormalizado) !== -1) {
    return "operativo";
  }

  return "sin_acceso";
}

function obtenerPerfilesUsuariosConfigurados_() {
  const base = clonarPerfilesUsuarios_(PERFILES_USUARIOS);
  const props = PropertiesService.getScriptProperties();
  const json = String(props.getProperty("USUARIOS_PERFILES_JSON") || "").trim();

  if (!json) {
    return base;
  }

  try {
    const configuracion = JSON.parse(json);
    return mezclarPerfilesUsuarios_(base, configuracion);
  } catch (error) {
    Logger.log("USUARIOS_PERFILES_JSON invalido: " + error.message);
    return base;
  }
}

function clonarPerfilesUsuarios_(origen) {
  return {
    admin: normalizarListaEmails_(origen && origen.admin),
    coordinacion: normalizarListaEmails_(origen && origen.coordinacion),
    operativo: normalizarListaEmails_(origen && origen.operativo)
  };
}

function mezclarPerfilesUsuarios_(base, configuracion) {
  const salida = clonarPerfilesUsuarios_(base);

  if (!configuracion || typeof configuracion !== "object") {
    return salida;
  }

  if (Array.isArray(configuracion.admin) || Array.isArray(configuracion.coordinacion) || Array.isArray(configuracion.operativo)) {
    ["admin", "coordinacion", "operativo"].forEach(function(perfil) {
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
    } else if (perfil === "COORDINACION") {
      salida.coordinacion.push(String(email || "").trim().toLowerCase());
    } else if (perfil === "OPERATIVO") {
      salida.operativo.push(String(email || "").trim().toLowerCase());
    }
  });

  salida.admin = normalizarListaEmails_(salida.admin);
  salida.coordinacion = normalizarListaEmails_(salida.coordinacion);
  salida.operativo = normalizarListaEmails_(salida.operativo);

  return salida;
}

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

function obtenerResumenesEspeciales_(ss, nombresSolapas) {
  let resumenes = {};

  nombresSolapas.forEach(nombre => {
    resumenes[nombre] = obtenerResumenSolapaEspecialDesdeOrigen_(ss, nombre);
  });

  return resumenes;
}

function obtenerResumenSolapaEspecial(nombreSolapa, filtros) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return obtenerResumenSolapaEspecialDesdeOrigen_(ss, nombreSolapa, filtros);
}

function obtenerResumenSolapaEspecialDesdeOrigen_(ss, nombreSolapa, filtros) {
  if (nombreSolapa === "CRONOGRAMA") {
    return obtenerResumenCronogramaSeguimiento_(ss, filtros);
  }

  let fuenteExterna = FUENTES_ESPECIALES_EXTERNAS[nombreSolapa];

  if (fuenteExterna) {
    return obtenerResumenSolapaEspecialExterna_(fuenteExterna, nombreSolapa, filtros);
  }

  const hoja = ss.getSheetByName(nombreSolapa);
  return obtenerResumenSolapaEspecial_(hoja, nombreSolapa);
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
  const controlesFiltrados = controles.filter(function(item) {
    return coincideFiltrosCronogramaControl_(item, filtrosNormalizados);
  });
  const totales = construirTotalesCronogramaSeguimiento_(programadosFiltrados, controlesFiltrados);

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
    estaciones: construirAgrupadoCronogramaSeguimiento_(programadosFiltrados, controlesFiltrados, "estacion"),
    actividades: construirAgrupadoCronogramaSeguimiento_(programadosFiltrados, controlesFiltrados, "actividad"),
    dias: construirAgrupadoCronogramaSeguimiento_(programadosFiltrados, controlesFiltrados, "diaSemana"),
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
      profesorDistinto: detalle.indexOf("Profesor distinto") !== -1
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

    const fechaBase = item.fechaReal || item.codigoProgramado.split(" | ")[0] || "";
    const orden = convertirFechaTextoAOrden_(fechaBase);
    if (orden && orden > ultimaFechaOrden) {
      ultimaFechaOrden = orden;
      ultimaFechaReal = fechaBase;
    }
  });

  const totalProgramadas = programados.length;
  const cumplimientoPorcentaje = totalProgramadas
    ? Math.round(((totalProgramadas - noCargadas) / totalProgramadas) * 1000) / 10
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
      ? Math.round(((item.programadas - item.noCargadas) / item.programadas) * 1000) / 10
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
    const fechaBase = item.fechaReal || (item.codigoProgramado ? item.codigoProgramado.split(" | ")[0] : "");
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
    const fechaB = b.fechaReal || (b.codigoProgramado ? b.codigoProgramado.split(" | ")[0] : "");
    const fechaA = a.fechaReal || (a.codigoProgramado ? a.codigoProgramado.split(" | ")[0] : "");
    const ordenB = convertirFechaTextoAOrden_(fechaB) || 0;
    const ordenA = convertirFechaTextoAOrden_(fechaA) || 0;
    return ordenB - ordenA;
  }).slice(0, 120).map(function(item) {
    return {
      fecha: item.fechaReal || (item.codigoProgramado ? item.codigoProgramado.split(" | ")[0] : "") || "",
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
  const clave = obtenerClaveEstacionCanonica_(estacion);
  if (!clave) return limpiarTexto_(estacion || "");

  for (let i = 0; i < ESTACIONES_SALUDABLES_OFICIALES.length; i++) {
    const nombreOficial = ESTACIONES_SALUDABLES_OFICIALES[i];
    if (normalizarTexto_(nombreOficial).toUpperCase() === clave) {
      return nombreOficial;
    }
  }

  const equivalencias = combinarEquivalenciasEstaciones_();
  const nombres = Object.keys(equivalencias);

  for (let i = 0; i < nombres.length; i++) {
    const nombre = nombres[i];
    if (normalizarTexto_(nombre).toUpperCase() === clave) {
      return limpiarTexto_(nombre);
    }
  }

  return limpiarTexto_(estacion || "");
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
  let hayFiltros = Object.keys(filtrosNormalizados).some(function(clave) {
    return !!filtrosNormalizados[clave];
  });

  if (!hayFiltros) {
    return resumen;
  }

  let registrosFiltrados = resumen.registros.filter(function(registro) {
    if (filtrosNormalizados.estacion && limpiarTexto_(registro.estacion) !== filtrosNormalizados.estacion) return false;
    if (filtrosNormalizados.profesor && limpiarTexto_(registro.profesor) !== filtrosNormalizados.profesor) return false;
    if (filtrosNormalizados.actividad && limpiarTexto_(registro.actividad) !== filtrosNormalizados.actividad) return false;
    if (filtrosNormalizados.sector && limpiarTexto_(registro.sector) !== filtrosNormalizados.sector) return false;
    return true;
  });

  let resumenFiltrado = construirResumenActividadExternaDesdeRegistros_(
    registrosFiltrados,
    resumen.nombre,
    resumen.ultimaFechaCarga || ""
  );
  resumenFiltrado.filtrosAplicados = filtrosNormalizados;
  resumenFiltrado.filtrosDisponibles = resumen.filtrosDisponibles || resumenFiltrado.filtrosDisponibles;
  return resumenFiltrado;
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

function generarInformeEspecialIA(nombreSolapa, mesClave, fechaPlanilla, comparacion, filtros) {
  let resumen = obtenerResumenSolapaEspecial(nombreSolapa);
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
    texto = solicitarInformeGemini_(prompt);

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

      texto = solicitarInformeGemini_(promptRefuerzo);
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

function enviarInformeEspecialIA(nombreSolapa, mesClave, fechaPlanilla, comparacion, filtros, emailDestino, asuntoPersonalizado, mensajePersonalizado) {
  let destinatario = String(emailDestino || "").trim();
  if (!destinatario) {
    throw new Error("Debes indicar un correo electronico de destino.");
  }

  let resultado = generarInformeEspecialIA(nombreSolapa, mesClave, fechaPlanilla, comparacion, filtros);
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
