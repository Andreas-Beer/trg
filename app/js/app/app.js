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
    .when('score/:catId', function (param) {
      
      if (!qa_Manager.hasCategory(param.catId)) {
        gotoDefaultPage();
        return;
      }   
      var cat = qa_Manager.getCategoryById(param.catId);
      showCatScore(cat);
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
  hbsTemplates.renderAllTemplates();
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
  hideBottomNav();
}

function switchMainContent (name) {
  $('#mainContent').attr('data-temp', name);
  hbsTemplates.renderTemplate(name);
}

/**
 * 
 * @param {Category} currCat current Category
 * @returns {void}
 */
function showCatScore (currCat) {  
  hbsTemplates.scope().score.cat = currCat;
  hbsTemplates.scope().score.name = currCat.name;
  switchMainContent('score');
}

/**
 * 
 * @param {Category} currCat current Category
 * @returns {void}
 */
function showCatStart (currCat) {
  console.i('Start Screen for:', currCat.name );
}

/**
 * 
 * @param {Category} currCat current Category
 * @param {Int} qestNr questionNumber
 * @returns {void}
 */
function showCatQuestion (currCat, qestNr) {
  
  if(qestNr === 0) {
    showCatStart(currCat);
    return;
  }
  
  var currQuestion = currCat.questions[qestNr - 1];
  var info = {
    curr: qestNr,
    length: currCat.questions.length
 };
  
  hbsTemplates.scope().quiz.info = info;
  hbsTemplates.scope().quiz.question = currQuestion;
  switchMainContent('quiz');
  showBottomNav(currQuestion);
}

/**
 * 
 * @param {type} currQuestion
 * @returns {void}
 */
function showBottomNav (currQuestion) {
  
  var nextNr, nextLink, text;
  var nextQuestion = currQuestion.next();
    
  if (nextQuestion !== undefined) {
    text = 'Weiter zu Frage ';
    nextNr = nextQuestion.nr();
    nextLink = '#/quiz/' + currQuestion.category.id + '/' + nextNr;
  } else {
    text = 'Auswertung';
    nextNr = '';
    nextLink = '#/score/' + currQuestion.category.id;
  }
  
  hbsTemplates.scope().nav_bottom.buttons.next.text = text;   
  hbsTemplates.scope().nav_bottom.buttons.next.nr = nextNr;
  hbsTemplates.scope().nav_bottom.buttons.next.link = nextLink;
  hbsTemplates.scope().nav_bottom.visible = true;
  hbsTemplates.renderTemplate('nav_bottom'); 
}

function hideBottomNav () {
  hbsTemplates.scope().nav_bottom.visible = false;
  hbsTemplates.renderTemplate('nav_bottom'); 
}