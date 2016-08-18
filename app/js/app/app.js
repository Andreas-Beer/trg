/*global xmlData, logger, xmlParser, config, textData, hbsTamplates */

$(function(){

  // init
  console = logger;
  
  hbsTamplates
    .setNamespace('JST')
    .setObjects(textData.de);
  
  var data = xmlData.setParser(xmlParser);
  
  //---------------------------------------
  
  data.loadData('xml/fragen.xml', function (qa_Manager) {
    
    hbsTamplates.initTemplates();
    startGame(qa_Manager);  
    
  });
  
  function init () {
    
    
  }
  
  /**
   * 
   * @param {QA_Manager} qa_Manager
   * @returns {undefined}
   */
  function startGame (qa_Manager) {
    
    
  }
  
  
  
  
  
});