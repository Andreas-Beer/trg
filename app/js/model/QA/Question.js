

/**
 * @property {String} this.info - The name of the Person. 
 * @returns {Question}
 */
function Question () {
  
  this.category = {};
  this.text = '';
  this.image = '';
  this.type = '';
  this.info = '';
  this.points = 0;
  this.answers = [];
  
  this.index = function () {
    var cats = this.category.questions;
    for ( var i = 0; i < cats.length; i++ ) {
      if (cats[i] === this) {
        return i;
      }
    }
  };
    
  this.next = function () {
    return this.category.questions[this.index() + 1];
  };
  
}