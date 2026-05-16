function checkTalleresHeaders() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const hoja = ss.getSheetByName("TALLERES");
  if (!hoja) {
    console.log("No se encontró la solapa TALLERES");
    return;
  }
  const headers = hoja.getRange(1, 1, 1, hoja.getLastColumn()).getValues()[0];
  console.log("Headers:", headers);
}
