const SHEET_ID = "1LhHAQQNZ1-M0vsH-LkDa0Dnk9d6ZnSTJHVgowSSgquU";

function doGet(e) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();

    sheet.appendRow([
      e.parameter.prenom    || "",
      e.parameter.nom       || "",
      e.parameter.email     || "",
      e.parameter.telephone || "",
      new Date()
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function testInsertion() {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
  sheet.appendRow(["Jean", "Test", "test@exemple.com", "+1 000 000 0000", new Date()]);
  Logger.log("Ligne de test ajoutée !");
}
