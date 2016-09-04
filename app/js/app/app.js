/*global xmlData, logger, xmlParser, config, textData, hbsTemplates, router, Handlebars*/

$(function(){
  
  'use strict';

  // init
  console = logger;
  
  hbsTemplates
    .scope(textData.de)
    .setNamespace('JST');
    
    
  Handlebars.registerHelper("offset", function (value, offset){
      return value + offset;
  });
  
  var dataLoader = new xmlDataLoader(xmlParser);
  
  //---------------------------------------
  
  dataLoader.loadData('xml/fragen.xml', function (qa_Manager) {
    createScreen();  
    initRoutes(qa_Manager);
  });
  
});

/**
 * 
 * @param {QA_Manager} qa_Manager
 * @returns {undefined}
 */
function initRoutes (qa_Manager) {
  
  router
    .when('quiz/:catId/:nr', function (param) {
      
      if (!qa_Manager.hasCategory(param.catId)) {
        gotoDefaultPage();
        return;
      }

      var cat = qa_Manager.getCategoryById(param.catId);
                   
      if (param.nr > 0 && !cat.hasQuestionNr(param.nr)) {
        gotoDefaultPage();
        return;
      }
      
      showCatQuestion(cat, +param.nr);   
      
    })
    .when('main', function () {
      showMain(qa_Manager);
    })
    .otherwise(function () {
      window.location.href = '#/main';
    })
    .listen();
}

/**
 * 
 * @returns {undefined}
 */
function createScreen () {
  hbsTemplates.initTemplates();
}

/**
 * 
 * @returns {undefined}
 */
function gotoDefaultPage () {
  window.location.href = '';
}

/**
 * 
 * @param {QA_Manager} qa_Manager
 * @returns {undefined}
 */
function showMain (qa_Manager) {
  hbsTemplates.scope().main.cats = qa_Manager.categories;
  switchMainContent('main');
}

function switchMainContent (name) {
  $('#mainContent').attr('data-temp', name);
  hbsTemplates.renderTemplate(name);
}

/**
 * 
 * @param {Category} currCat
 * @returns {undefined}
 */
function showCatStart (currCat) {
  console.i('Start Screen for:', currCat.name );
}

/**
 * 
 * @param {Category} currCat
 * @param {Int} nr
 * @returns {undefined}
 */
function showCatQuestion (currCat, nr) {
  
  if(nr === 0) {
    showCatStart(currCat);
    return;
  }
  
  var currQuestion = currCat.questions[nr - 1];
  var nextQuestion = currQuestion.next();
   
  hbsTemplates.scope().quiz.question = currQuestion;
  switchMainContent('quiz');
}