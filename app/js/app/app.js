/* global xmlData, logger, xmlParser */

$(function(){

  // init
  console = logger;
  var data = xmlData;
  data.setParser(xmlParser);
  
  data.loadData('xml/fragen.xml', function (qa_Manager) {
    startGame(qa_Manager);    
  });
  
  /**
   * 
   * @param {QA_Manager} qa_Manager
   * @returns {undefined}
   */
  function startGame (qa_Manager) {
    
    var questions = qa_Manager.getCategoryById('verantwortung').questions;
    var q = questions[5];
    
    console.info(q);
    console.info(q.index());
    console.info(q.next());
    
    
  }
  
 
});