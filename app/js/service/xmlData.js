var xmlData = (function () {

  'use strict';
  
  var cache = {
    parsedXML: null,
    filePath: null
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
      file = cache.filePath;
    } else {
      cache.filePath = file; 
    }

    if (file === null) {
      throw Error('no file found!');
    }
        
    if (cache.filePath === file && cache.parsedXML !== null) {
      cb(getXML());
    } else {
      $.get(file + '?v=' + Math.random(), function (data) {
        console.info('new data');
        cache.parsedXML = parseXML(data);       
        cb(cache.parsedXML); 
      }); 
    }
  }
  
  function reloadXML (cb) {
    cache.parsedXML = null;
    loadXML(cb);
  }
  
  function getXML () {
    if (cache.parsedXML !== null) {
      console.info('cached data');
      return cache.parsedXML;
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
   *    catType: string - (e.g. default, complex)
   *    catTag:  string
   *    
   *    questions: {
   *      text: string - The question in plain text
   *      image:    string - an image which belongs to the question (optional)
   *      type:     string - mainly for styling (e.g. one answer, two answer, long text)
   *      points:   int    - points for the question (like in driving school?)
   *      infoLink: string - a website where the answer ist explained. (optional)
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
    getData: getXML,
    loadData: loadXML,
    reloadData: reloadXML
  };

})();
