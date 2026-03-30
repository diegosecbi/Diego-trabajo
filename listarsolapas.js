function listarSolapas() {
  var hojas = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  var nombres = [];
  for (var i = 0; i < hojas.length; i++) {
    nombres.push([hojas[i].getName()]);
  }
  return nombres;
}
