function userClicked(userInfo) {
  var url = "https://docs.google.com/spreadsheets/d/1_b5N8JfiYAEJn8i1DXnBdLKQYhC3WAksxOa1smFjfdo/edit#gid=0"; //url de la SS
  
  var ss = SpreadsheetApp.openByUrl(url); 
  var ws = ss.getSheetByName("Agudeza Visual"); // nombre de la hoja en la SS
  
  ws.appendRow([new Date(), userInfo.email,userInfo.nombre,userInfo.apellido,userInfo.dni, userInfo.acepto, userInfo.derecho, userInfo.izquierdo]);
  
  
  var subject = "Su test fue registrado";
  var body = "Gracias por reponder";
  var htmlTemplate = HtmlService.createTemplateFromFile("email");
  
//  htmlTemplate.formuTest = userInfo.formuTest;
  htmlTemplate.nombre = userInfo.nombre;
  htmlTemplate.apellido = userInfo.apellido;
  
//  htmlTemplate.derecho = userInfo.derecho;
//  htmlTemplate.derechoCom = userInfo.derechoCom; 
//  htmlTemplate.izquierdo = userInfo.izquierdo; 
//  htmlTemplate.izquierdoCom = userInfo.izquierdoCom;
  
  
  var htmlBody = htmlTemplate.evaluate().getContent();
  
  
  GmailApp.sendEmail(userInfo.email, subject, body, {htmlBody: htmlBody});
  
}
