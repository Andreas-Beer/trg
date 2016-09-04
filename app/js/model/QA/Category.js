
function Category () {
  
  this.manager = {};
  this.name = '';
  this.id = '';
  this.uri = '';
  this.type = '';
  this.questions = [];
    
  this.index = function () {
    var cats = this.manager.categories;
    for ( var i = 0; i < cats.length; i++ ) {
      if (cats[i] === this) {
        return i;
      }
    }
  };
  
  this.nr = function () {
    return +this.index() + 1;
  };
  
  this.hasQuestionNr = function (nr) {
    return this.hasQuestionIndex(nr - 1);
  };
  
  this.hasQuestionIndex = function (i) {
    return this.questions[i] !== undefined;
  };
  
  this.next = function () {
    return this.manager.categories[this.index() + 1];
  };
  
}