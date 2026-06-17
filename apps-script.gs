// ─────────────────────────────────────────────────────────────────────────────
// L'Atelier IA — Google Apps Script
// À déployer comme "Application Web" dans le Google Sheet suivant :
// https://docs.google.com/spreadsheets/d/1LhHAQQNZ1-M0vsH-LkDa0Dnk9d6ZnSTJHVgowSSgquU
//
// Instructions : voir README.md → Étape 2
// ─────────────────────────────────────────────────────────────────────────────

const SHEET_ID = "1LhHAQQNZ1-M0vsH-LkDa0Dnk9d6ZnSTJHVgowSSgquU";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const ss    = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getActiveSheet();

    // Ajoute les en-têtes si la feuille est vide
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Prénom", "Nom", "Email", "Téléphone", "Date"]);
    }

    // Ajoute la nouvelle inscription
    sheet.appendRow([
      data.prenom    || "",
      data.nom       || "",
      data.email     || "",
      data.telephone || "",
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

// Fonction de test — exécute-la manuellement pour vérifier que le script fonctionne
function testInsertion() {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
  sheet.appendRow(["Test", "Inscription", "test@exemple.com", "+1 000 000 0000", new Date()]);
  Logger.log("Ligne de test ajoutée avec succès !");
}
