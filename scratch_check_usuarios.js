function checkUsuariosHeaders() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const hoja = ss.getSheetByName("USUARIOS");
  if (!hoja) {
    console.log("No se encontró la solapa USUARIOS");
    return;
  }
  const headers = hoja.getRange(1, 1, 1, hoja.getLastColumn()).getValues()[0];
  console.log("Headers USUARIOS: " + JSON.stringify(headers));
  
  const colO = hoja.getRange(1, 15).getValue();
  console.log("Header Columna O (15): " + colO);
}
