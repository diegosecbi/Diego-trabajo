function diagnosticarTalleres() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const hoja = ss.getSheetByName("TALLERES");
  if (!hoja) {
    console.log("No se encontró la solapa TALLERES localmente.");
    return;
  }
  const headers = hoja.getRange(1, 1, 1, hoja.getLastColumn()).getValues()[0];
  console.log("Cabeceras de TALLERES: " + JSON.stringify(headers));
  const data = hoja.getRange(2, 1, 5, hoja.getLastColumn()).getDisplayValues();
  console.log("Muestra de datos: " + JSON.stringify(data));
}
