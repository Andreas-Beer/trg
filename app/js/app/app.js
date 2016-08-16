/* global xmlData, logger, xmlParser, config */

$(function(){

  // init
  console = logger;
  
  var data = xmlData.setParser(xmlParser);
  
  data.loadData('xml/fragen.xml', function (qa_Manager) {
    startGame(qa_Manager);    
  });
  
  /**
   * 
   * @param {QA_Manager} qa_Manager
   * @returns {undefined}
   */
  function startGame (qa_Manager) {
    
    var t = new Question();
    
  }
  
});