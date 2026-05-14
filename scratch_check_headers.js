/**
 * Revisa las cabeceras de la solapa 2026 en la Maestra
 */
function revisarCabeceras2026Maestra() {
  const MASTER_SS_ID = "1QMzJPBMWo0qCaSTD5cw78BX_sleg-5h2u914cDGvo4g";
  const masterSs = SpreadsheetApp.openById(MASTER_SS_ID);
  const hoja = masterSs.getSheetByName("2026");
  if (!hoja) {
    SpreadsheetApp.getUi().alert("No se encontró la solapa '2026' en la Maestra.");
    return;
  }
  
  const headers = hoja.getRange(1, 1, 1, hoja.getLastColumn()).getValues()[0];
  console.log("Cabeceras 2026:", headers);
  SpreadsheetApp.getUi().alert("Cabeceras en '2026':\n" + headers.join(" | "));
}
