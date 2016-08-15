/* global xmlData, logger */

$(function(){

  // init
  console = logger;
  
  var data = xmlData;
  
  data.loadData('xml/fragen.xml', function (qa_Manager) {
    
    console.info(qa_Manager);
    
  });
  
  
});