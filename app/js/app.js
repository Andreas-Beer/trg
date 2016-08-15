/* global xmlData */

$(function(){
  
  var data = xmlData;
  
  var data.loadData('xml/fragen.xml', function (qa_Manager) {
    
    console.info(qa_Manager);
    
  });
  
  
});