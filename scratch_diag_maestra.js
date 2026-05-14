/**
 * Diagnóstico de solapas en la Hoja Maestra
 */
function diagnosticarSolapasMaestras() {
  const MASTER_SS_ID = "1QMzJPBMWo0qCaSTD5cw78BX_sleg-5h2u914cDGvo4g";
  let masterSs;
  try {
    masterSs = SpreadsheetApp.openById(MASTER_SS_ID);
  } catch (e) {
    SpreadsheetApp.getUi().alert("Error acceso Maestra: " + e.message);
    return;
  }
  
  const nombres = masterSs.getSheets().map(s => s.getName());
  console.log("Solapas en Maestra:", nombres);
  SpreadsheetApp.getUi().alert("Solapas encontradas en Maestra:\n" + nombres.join("\n"));
}
