function printSpreadsheetInfo() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  console.log("ID: " + ss.getId());
  console.log("URL: " + ss.getUrl());
}
