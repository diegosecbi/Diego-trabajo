/**
 * Sincroniza las solapas con '*' restaurando nombres (Col B) y datos S1 (Col C).
 * Optimiza el rendimiento al evitar múltiples IMPORTRANGE en las celdas.
 */
function sincronizarTodasLasEstacionesIndependientes() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const hojas = ss.getSheets();
  const stationsToProcess = hojas.filter(h => h.getName().startsWith("*"));
  
  // 1. Agrupar solapas locales por el ID del archivo externo (A2)
  const fuentesUnicas = {};
  stationsToProcess.forEach(hoja => {
    const rawValue = hoja.getRange("A2").getValue();
    const id = extraerIdDeUrl_(rawValue);
    if (id) {
      if (!fuentesUnicas[id]) fuentesUnicas[id] = [];
      fuentesUnicas[id].push(hoja);
    }
  });

  // 2. Procesar cada archivo externo una sola vez (o n veces si son todos distintos)
  for (const idExterno in fuentesUnicas) {
    try {
      const extSs = SpreadsheetApp.openById(idExterno);
      const hojaFinal = extSs.getSheetByName("FINAL");
      if (!hojaFinal) continue;

      // Obtener lista de nombres de la columna I (limitamos a 100 filas por seguridad)
      const dataI = hojaFinal.getRange("I2:I100").getValues();
      const nombres = [];
      for (let i = 0; i < dataI.length; i++) {
        const val = String(dataI[i][0] || "").trim();
        // Traer todo hasta encontrar la primera celda vacía
        if (!val) break; 
        nombres.push(val);
      }

      if (nombres.length === 0) continue;

      // Obtener valores S1 de cada profesor
      const mapaS1 = {};
      nombres.forEach(nombre => {
        try {
          const hProf = extSs.getSheetByName(nombre);
          mapaS1[nombre] = hProf ? hProf.getRange("S1").getValue() : "No encontrado";
        } catch (e) { mapaS1[nombre] = "Error"; }
      });

      // 3. Actualizar todas las solapas locales que dependen de este origen
      const matrizB = nombres.map(n => [n]);
      const matrizC = nombres.map(n => [mapaS1[n]]);

      fuentesUnicas[idExterno].forEach(hojaLocal => {
        const maxR = Math.max(hojaLocal.getMaxRows() - 1, 1);
        hojaLocal.getRange(2, 2, maxR, 2).clearContent();
        
        hojaLocal.getRange(2, 2, nombres.length, 1).setValues(matrizB);
        hojaLocal.getRange(2, 3, nombres.length, 1).setValues(matrizC);
      });

    } catch (err) {
      console.error("Error procesando origen " + idExterno + ": " + err.message);
    }
  }
}

/**
 * Instala los gatillos para ejecutar la sincronización 3 veces al día.
 */
function instalarGatillosSincronizacionEstaciones() {
  // 1. Limpiar gatillos anteriores para no duplicar
  const gatillos = ScriptApp.getProjectTriggers();
  gatillos.forEach(g => {
    if (g.getHandlerFunction() === "sincronizarTodasLasEstacionesIndependientes") {
      ScriptApp.deleteTrigger(g);
    }
  });

  // 2. Programar 3 veces al día: 8 AM, 2 PM y 8 PM aprox.
  ScriptApp.newTrigger("sincronizarTodasLasEstacionesIndependientes")
    .timeBased()
    .everyDays(1)
    .atHour(8)
    .create();

  ScriptApp.newTrigger("sincronizarTodasLasEstacionesIndependientes")
    .timeBased()
    .everyDays(1)
    .atHour(14)
    .create();

  ScriptApp.newTrigger("sincronizarTodasLasEstacionesIndependientes")
    .timeBased()
    .everyDays(1)
    .atHour(20)
    .create();

  SpreadsheetApp.getUi().alert("🚀 Sincronización Automática Activada:\nSe ejecutará todos los días a las 8:00, 14:00 y 20:00.");
}

function extraerIdDeUrl_(valor) {
  if (!valor) return null;
  const texto = String(valor).trim();
  if (texto.includes("/d/")) {
    const match = texto.match(/\/d\/(.*?)(\/|$)/);
    return match ? match[1] : null;
  }
  return !texto.includes("/") ? texto : null;
}

