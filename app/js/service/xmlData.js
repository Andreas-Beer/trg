var xmlData = (function () {

  'use strict';
  
  var cache = {
    XML: null,
    file: null
  };
  
  /**
   * Layzy loading for the XML file
   * 
   * @param {string} file
   * @param {function} cb
   * @returns {void}
   */
  function loadXML(file, cb) {

    if (typeof file === 'function') {
      cb = file;
      file = cache.file;
    } else {
      cache.file = file; 
    }

    if (file === null) {
      throw Error('no file found!');
    }
        
    if (cache.file === file && cache.XML !== null) {
      cb(getXML());
    } else {
      $.get(file + '?v=' + Math.random(), function (data) {
        console.info('new data');
        cache.XML = parseXML(data);       
        cb(cache.XML); 
      }); 
    }
  }
  
  function reloadXML (cb) {
    cache.XML = null;
    loadXML(cb);
  }
  
  function getXML () {
    if (cache.XML !== null) {
      console.info('cached data');
      return cache.XML;
    } else {
      throw Error('no XML in chache!');
    }
  }

  /**
   * Parses the XML Data into a datastructure
   * 
   * Structure:
   * [
   *    catName: string - The name of the category
   *    questions: {
   *      question:       string - The question in plain text
   *      answers:        array  - []
   *      correctAnswers: array  - []
   *      }
   *  ]
   *  
   * ---
   * I would prefere:
   * Structure:
   * [
   *    catName: string - The name of the category
   *    catType: string - (e.g. default, complex)
   *    catTag:  string
   *    
   *    questions: {
   *      question: string - The question in plain text
   *      type:     string - mainly for styling (e.g. one answer, two answer, long text)
   *      points:   int    - points for the question (like in driving school?)
   *      infoLink: string - a website where the answer ist explained. (optional)
   *      image:    string - an image which belongs to the question (optional)
   *      
   *      answers: {
   *        text:    string  - The answer in plain text (optional)
   *        image:   string  - an image as answer or which belongs to the answer (optional)
   *        correct: boolean - if the answer is the correct one
   *      }
   *    }
   *  ]
   *  ---
   * 
   * @param {object} xml
   * @returns {Array|parseXML.questionAnswerCatalog}
   */
  function parseXML(xml) {
    
    var questionAnswerCatalog = [];

    $(xml).find('qcategory').each(function (index, item) {

      var qaItem = {};
      qaItem.questions = [];
      qaItem.catName = $(item).attr('name');
      qaItem.catUri = $(item).attr('uri');
      qaItem.catTag = $(item).attr('uri').slice( $(item).attr('uri').lastIndexOf('/') + 1,  $(item).attr('uri').length);

      $(item).find('qcatquestions').each(function (index, item) {

        var questionData = {};
        questionData.question = $(item).find('qcatquestiontxt').text();

        questionData.answers = $.map($(item).find('answer'), function (item) {
          return $(item).text();
        });

        questionData.correctAnswers = $.map($(item).find('correctanswer'), function (item) {
          return $(item).text();
        });

        qaItem.questions.push(questionData);
      });

      questionAnswerCatalog.push(qaItem);
    });

    return questionAnswerCatalog;
  }

  return {
    getXML: getXML,
    loadXML: loadXML,
    reloadXML: reloadXML
  };

})();
