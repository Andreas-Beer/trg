
/**
 * 
 * @param {Array} categories
 * @returns {qa_Manager}
 */
function qa_Manager (categories) {
  
  this.categories = [];
  
  (function init (cats) {
    this.categories = cats;
    
    this.categories = this.categories.map(function (cat) {
      cat.manager = this;
    });
    
    console.log(this.categories);
    
  })(categories);
  
}