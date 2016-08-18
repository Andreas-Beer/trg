/*global xmlData, logger, xmlParser, config, textData, hbsTemplates, router */

$(function(){

  // init
  console = logger;

  hbsTemplates
    .scope(textData.de)
    .setNamespace('JST');
  
  var dataLoader = new xmlDataLoader(xmlParser);
  
  //---------------------------------------
  
  dataLoader.loadData('xml/fragen.xml', function (qa_Manager) {
    initRoutes();
    hbsTemplates.initTemplates();
    startGame(qa_Manager);  
    
  });
  
});

function initRoutes () {
  
  router
    .when('quiz/:v/:nr?', function (param) {
      
      if(param.nr === undefined) {
        param.nr = 0;
      }
    
      console.info('quiz route:', '#/quiz/' + param.v + '/' + param.nr);

    })
    .otherwise(function () {
      console.info('default!');
    })
    .listen();
  
}

/**
 * 
 * @param {QA_Manager} qa_Manager
 * @returns {undefined}
 */
function startGame (qa_Manager) {

  hbsTemplates.scope().main.cats = qa_Manager.categories;
  hbsTemplates.renderTemplate('main');

}
