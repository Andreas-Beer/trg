
/**
 * 
 * @param {Array} categories
 * @returns {qa_Manager}
 */
function QA_Manager (categories) {
  
  this.categories = [];
  
  /**
   * 
   * @param {string} name
   * @returns {boolean}
   */
  this.hasCategory = function (name) {
    return this.getCategoryById(name) !== undefined ||
      this.getCategoryByName(name) !== undefined;
  };
  
  /**
   * 
   * @param {string} id
   * @returns {Category}
   */
  this.getCategoryById = function (id) {
    return getCategoryBy.call(this, 'id', id);
  };
  
  /**
   * 
   * @param {string} name
   * @returns {Category}
   */
  this.getCategoryByName = function (name) {
    return getCategoryBy.call(this, 'name', name);
  };
  
  /**
   * 
   * @param {string} type
   * @param {string} name
   * @returns {Category}
   */
  function getCategoryBy(type, name) {
    return this.categories.filter(function (cat) {
      if(cat[type] === name) {
        return cat;
      }   
    })[0];
  }
  
  (function init (cats) {
    this.categories = cats;
    for (var i = 0; i < cats.length; i++) {
      cats[i].manager = this;
    }
  }).bind(this)(categories);
  
}