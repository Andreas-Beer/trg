
/**
 * 
 * @param {Array} categories
 * @returns {qa_Manager}
 */
function QA_Manager (categories) {
  
  this.categories = [];
  
  (function init (cats) {
    
    this.categories = cats;

    for (var i = 0; i < cats.length; i++) {
      cats[i].manager = this;
    }
    
  }).bind(this)(categories);
  
}