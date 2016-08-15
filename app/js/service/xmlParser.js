var xmlParser = (function () {
  
  'use strict';
  
  /**
   * Parses the XML Data into a datastructure
   * @param {object} xml
   * @returns {Array|parseXML.questionAnswerCatalog}
   */
  function parseXml (xml) {
    
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
        category.id = $(elm_cat).attr('name').toLowerCase().replace(/[-_ ]/ig , '_').replace(/[ö]/ig , 'oe').replace(/[ü]/ig , 'ue').replace(/[ä]/ig , 'ae');
        category.uri = 'quiz/' + category.id;
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
    parseData: parseXml
  };
  
})();