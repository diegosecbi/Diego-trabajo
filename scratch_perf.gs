function debugTalleresPerformance() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const hoja = ss.getSheetByName("TALLERES");
  if (!hoja) {
    console.log("No TALLERES");
    return;
  }
  
  const start = new Date().getTime();
  const lastRow = hoja.getLastRow();
  const lastCol = hoja.getLastColumn();
  console.log("Rows:", lastRow, "Cols:", lastCol);
  
  const startRead = new Date().getTime();
  const data = hoja.getDataRange().getValues();
  const endRead = new Date().getTime();
  console.log("Read time (ms):", endRead - startRead);
}
