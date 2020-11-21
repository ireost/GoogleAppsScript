function doGet(e) {
    
  var tmp = HtmlService.createTemplateFromFile("page");
  var pageData = tmp.evaluate()
    .setTitle('Gordillo Visions') // Set Title 
//    .setFaviconUrl('https://drive.google.com/drive/folders/11Rh-hz9VWyNddA5z5VHmeom2y0istxVv')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME) //This method now has no effect — previously it set the sandbox mode used for client-side scripts
    .addMetaTag('viewport', 'width=device-width, initial-scale=1') // It is very important tag for Responsive 
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL) // Sets the state of the page's X-Frame-Options header, which controls clickjacking prevention.
     return pageData;
  
    
}
