var xmlData = (function () {

  'use strict';
  
  var cache = {
    parsedXML: null,
    filePath: null
  };
  
  /**
   * 
   * @returns {cache.parsedXML|xmlData_L1.cache.parsedXML}
   */
  function getXML () {
    if (cache.parsedXML !== null) {
      return cache.parsedXML;
    } else {
      throw Error('no XML in chache!');
    }
  }
  
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
        cache.parsedXML = parseXML(data);       
        cb(cache.parsedXML); 
      }); 
    }
  }
  
  function reloadXML (cb) {
    cache.parsedXML = null;
    loadXML(cb);
  }
  
  /**
   * Parses the XML Data into a datastructure
   * @param {object} xml
   * @returns {Array|parseXML.questionAnswerCatalog}
   */
  function parseXML(xml) {
    
    /**
     * @param {type} elm_cat
     * @returns {QA_Manager}
     */
    return new QA_Manager(
            
      $.map($(xml).find('qcategory'), function (elm_cat) {
      
        /**
         * @type Category
         */
        var category = new Category();
        category.name = $(elm_cat).attr('name');
        category.catTag = $(elm_cat).attr('name').toLowerCase().replace(/[-_ ]/ig , '_').replace(/[ö]/ig , 'oe').replace(/[ü]/ig , 'ue').replace(/[ä]/ig , 'ae');
        category.uri = 'quiz/' + category.catTag;
        category.questions = $.map($(elm_cat).find('qcatquestiontxt'), function (elm_ques) {

          /**
           * @type Question
           */
          var question = new Question();
          question.category = category;
          question.text = $(elm_ques).text();
          question.answers = $.map($(elm_ques).closest('qcatquestions').find('answer'), function (elm_ans) {

            /**
             * @type Answer
             */
            var answer = new Answer();
            answer.text = $(elm_ans).text();
            answer.correct = $(elm_ans).closest('qcatquestions').find('correctanswer').toArray().some(function (elm_corAns) {
                  return $(elm_ans).text() === $(elm_corAns).text();
              });
    
            return answer;
          });

          return question;
        });

        return category;   
      })
    );
  }

  return {
    getData: getXML,
    loadData: loadXML,
    reloadData: reloadXML
  };

})();
