function Question () {
  
  this.category = {};
  this.text = '';
  this.image = '';
  this.type = '';
  this.info = '';
  this.points = 0;
  this.answers = [];
  
  
  this.index = function index () {
    var questions = this.category.questions;
    for (var i = 0; i < questions.length; i++) {
      if (questions[i] === this) {
        return i;
      }
    }
  };
  
  this.next = function next () {
    return this.category.questions[this.index() + 1];
  };
  
}