function listarEstacionesDebug() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const hoja = ss.getSheetByName("TALLERES");
  const headers = hoja.getRange(1, 1, 1, hoja.getLastColumn()).getValues()[0];
  const idxEstacion = headers.indexOf("ESTACION");
  const data = hoja.getRange(2, idxEstacion + 1, 20, 1).getValues();
  console.log("Primeras 20 estaciones:");
  data.forEach(r => console.log("-" + r[0] + "-"));
}
