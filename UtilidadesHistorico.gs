/**
 * Normaliza la columna F (Tipo de Día) en la solapa 2025_HISTORICO
 * Basado en el calendario oficial de feriados 2025 de Argentina.
 */
function normalizarTipoDia2025() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const hoja = ss.getSheetByName("2025_HISTORICO");
  if (!hoja) {
    SpreadsheetApp.getUi().alert("No se encontró la solapa '2025_HISTORICO'.");
    return;
  }

  const ultimaFila = hoja.getLastRow();
  if (ultimaFila < 2) return;

  // 1. Definir Feriados 2025 (Formato MM-DD para facilitar búsqueda)
  const feriados2025 = [
    "01-01", // Año Nuevo
    "03-03", // Carnaval
    "03-04", // Carnaval
    "03-24", // Memoria
    "04-02", // Malvinas
    "04-17", // Jueves Santo
    "04-18", // Viernes Santo
    "05-01", // Trabajador
    "05-02", // Puente Turístico
    "05-25", // Revolución Mayo
    "06-16", // Güemes (Trasladable)
    "06-20", // Belgrano
    "07-09", // Independencia
    "08-15", // Puente Turístico
    "08-17", // San Martín
    "10-12", // Diversidad Cultural
    "11-20", // Soberanía (Se traslada al 24?) -> El decreto dice 21 puente
    "11-21", // Puente Turístico
    "11-24", // Soberanía (Trasladado)
    "12-08", // Inmaculada
    "12-25"  // Navidad
  ];

  // 2. Leer Fechas (Asumimos que están en la columna B o similar, buscamos cabecera FECHA)
  const datos = hoja.getDataRange().getValues();
  const headers = datos[0].map(h => String(h || "").toUpperCase().trim());
  let idxFecha = headers.indexOf("FECHA ACTIVIDAD");
  if (idxFecha === -1) idxFecha = headers.indexOf("FECHA");
  
  // Columna F es índice 5 (0-based)
  const idxTipoDia = 5; 

  if (idxFecha === -1) {
    SpreadsheetApp.getUi().alert("No se encontró la columna de FECHA.");
    return;
  }

  const nuevasMarcas = [];

  for (let i = 1; i < datos.length; i++) {
    const fechaRaw = datos[i][idxFecha];
    let tipoDia = "SEMANA";
    
    if (fechaRaw instanceof Date && !isNaN(fechaRaw.getTime())) {
      const fecha = fechaRaw;
      const diaSemana = fecha.getDay(); // 0=Dom, 6=Sab
      const mesDia = Utilities.formatDate(fecha, "GMT-3", "MM-dd");

      const esFeriado = feriados2025.indexOf(mesDia) !== -1;
      const esFinde = (diaSemana === 0 || diaSemana === 6);

      if (esFeriado || esFinde) {
        tipoDia = "SADOFE";
      } else {
        tipoDia = "SEMANA";
      }
    }
    nuevasMarcas.push([tipoDia]);
  }

  // 3. Escribir en Columna F (desde fila 2)
  hoja.getRange(2, 6, nuevasMarcas.length, 1).setValues(nuevasMarcas);
  
  // Asegurar cabecera si no existe
  hoja.getRange(1, 6).setValue("TIPO DE DIA");
  
  SpreadsheetApp.getUi().alert("Proceso completado. Columna F (Tipo de Día) actualizada en 2025_HISTORICO.");
}

