function debugFidelizadosPatricios() {
  const filtros = {
    estacion: "Parque Patricios",
    anios: ["2025", "2026"],
    tipoDia: "Todos",
    modo: "general"
  };
  
  const res = obtenerEstadisticasPersonasUnicasGlobal(filtros);
  
  console.log("--- RESULTADOS DIAGNÓSTICO ---");
  console.log("Total Registros Cargados:", res.diagnostico.totalCargados);
  console.log("Descartados por Estación:", res.diagnostico.descartadosEstacion);
  console.log("Total Únicas Histórico (Baseline):", res.totalUnicasHistorico);
  console.log("Resumen Anual:");
  res.resumenAnual.forEach(a => {
    console.log(`Año ${a.anio}: Únicas=${a.unicas}, Nuevas=${a.nuevas}, Fidelizadas=${a.fidelizadas}`);
  });
  
  // Verificación de nombres de estaciones en 2025
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const hoja2025 = ss.getSheetByName("2025_HISTORICO");
  if (hoja2025) {
    const data = hoja2025.getRange(1, 1, 10, 5).getValues();
    console.log("Primeras filas 2025 (Muestra):", JSON.stringify(data));
  } else {
    console.log("¡ERROR! No se encuentra la solapa 2025_HISTORICO");
  }
}
