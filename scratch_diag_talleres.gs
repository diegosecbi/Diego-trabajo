function diagnosticTALLERES() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const hoja = ss.getSheetByName("TALLERES");
  if (!hoja) {
    console.log("No se encontro la solapa TALLERES");
    return;
  }

  const datos = hoja.getDataRange().getValues();
  const headers = datos[0].map(h => String(h).toUpperCase().trim());
  const filas = datos.slice(1);

  const idxFecha = headers.indexOf("FECHA ACTIVIDAD");
  const idxEstacion = headers.indexOf("ESTACION");

  const stats = {};
  const years = {};

  filas.forEach(fila => {
    const f = fila[idxFecha];
    const e = String(fila[idxEstacion] || "").trim();
    
    if (f instanceof Date) {
      const y = f.getFullYear();
      years[y] = (years[y] || 0) + 1;
    }

    stats[e] = (stats[e] || 0) + 1;
  });

  console.log("Distribucion de Aos:");
  console.log(JSON.stringify(years, null, 2));
  console.log("Distribucion de Estaciones:");
  console.log(JSON.stringify(stats, null, 2));
}
