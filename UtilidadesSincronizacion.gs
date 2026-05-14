/**
 * Sincroniza las solapas con '*' restaurando nombres (Col B) y datos S1 (Col C).
 * Optimiza el rendimiento al evitar múltiples IMPORTRANGE en las celdas.
 */
function sincronizarTodasLasEstacionesIndependientes() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const hojas = ss.getSheets();
  const stationsToProcess = hojas.filter(h => h.getName().startsWith("*"));
  
  let logs = "Sincronización Completa (B y C):\n";

  stationsToProcess.forEach(hojaDestino => {
    const nombreEstacion = hojaDestino.getName().replace("*", "").trim();
    let rawValue = hojaDestino.getRange("A2").getValue();
    const externalId = extraerIdDeUrl_(rawValue);
    
    if (!externalId) {
      logs += "⚠️ " + nombreEstacion + ": Sin ID en A2\n";
      return;
    }

    try {
      const extSs = SpreadsheetApp.openById(externalId);
      const hojaFinal = extSs.getSheetByName("FINAL");
      
      if (!hojaFinal) {
        logs += "❌ " + nombreEstacion + ": No existe solapa 'FINAL'\n";
        return;
      }

      const ultimaFilaFinal = hojaFinal.getLastRow();
      const valoresRaw = hojaFinal.getRange(2, 9, Math.min(ultimaFilaFinal - 1, 500), 1).getValues();
      
      let nombres = [];
      for (let i = 0; i < valoresRaw.length; i++) {
        const valor = String(valoresRaw[i][0] || "").trim();
        nombres.push(valor);
        if (valor.toUpperCase() === "FINAL") break;
      }

      if (nombres.length === 0) {
        logs += "ℹ️ " + nombreEstacion + ": No se encontraron nombres\n";
        return;
      }

      let resultadosC = [];
      nombres.forEach(nombre => {
        if (nombre.toUpperCase() === "FINAL") {
          resultadosC.push([""]); 
          return;
        }

        try {
          const hojaPersona = extSs.getSheetByName(nombre);
          if (hojaPersona) {
            const datoS1 = hojaPersona.getRange("S1").getValue();
            resultadosC.push([datoS1]);
          } else {
            resultadosC.push(["No encontrado"]);
          }
        } catch (err) {
          resultadosC.push(["Error"]);
        }
      });

      const numFilas = nombres.length;
      hojaDestino.getRange(2, 2, Math.max(hojaDestino.getMaxRows() - 1, 1), 2).clearContent();
      const matrizB = nombres.map(n => [n]);
      hojaDestino.getRange(2, 2, numFilas, 1).setValues(matrizB);
      hojaDestino.getRange(2, 3, numFilas, 1).setValues(resultadosC);
      
      logs += "✅ " + nombreEstacion + ": OK\n";
      
    } catch (e) {
      logs += "🚫 " + nombreEstacion + ": Error (" + e.message.split(".")[0] + ")\n";
    }
  });

  // Solo mostramos alerta si la ejecución NO es automática (interactiva)
  if (typeof MailApp !== "undefined") {
     // En ejecución manual, podríamos avisar, pero en automática no es posible usar Ui.alert
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
