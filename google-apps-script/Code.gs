const SHEET_NAME = "Enquiries";
const SPREADSHEET_ID = "1MCt5x3vrYihf3YoJn23w12HKCjGD32iCGB_Mp4YmQKU";
const NOTIFICATION_EMAIL = "info@dijonconsultants.com";

function doPost(e) {
  const secret = PropertiesService.getScriptProperties().getProperty("WEBHOOK_SECRET");
  const data = e.parameter;
  if (!secret || data.secret !== secret) return response({ success: false, error: "Unauthorized" });

  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
  if (!sheet) return response({ success: false, error: `Sheet '${SHEET_NAME}' was not found.` });

  const headers = ["Submitted at", "Full name", "WhatsApp", "Email", "City", "Qualification", "Percentage / CGPA", "Graduation year", "Preferred country", "Preferred course", "Study level", "English test status", "Budget range", "Message"];
  if (sheet.getLastRow() === 0) sheet.appendRow(headers);

  sheet.appendRow([data.submittedAt, data.fullName, data.whatsapp, data.email, data.city, data.qualification, data.grade, data.graduationYear, data.country, data.course, data.level, data.englishTest, data.budget, data.message]);

  const subject = `New Dijon Consultants enquiry: ${data.fullName}`;
  const message = `A new admissions enquiry has been received.\n\nName: ${data.fullName}\nWhatsApp: ${data.whatsapp}\nEmail: ${data.email}\nCity: ${data.city}\nQualification: ${data.qualification}\nGrade: ${data.grade}\nGraduation year: ${data.graduationYear}\nCountry: ${data.country}\nCourse: ${data.course}\nLevel: ${data.level}\nEnglish test: ${data.englishTest}\nBudget: ${data.budget}\nMessage: ${data.message}`;
  MailApp.sendEmail(NOTIFICATION_EMAIL, subject, message);

  return response({ success: true });
}

function response(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
