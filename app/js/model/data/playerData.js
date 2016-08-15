/*exported playerData*/

var playerData = (function () {
  
  'use strict';
  
  var rightAnswers = 0;
  var wrongAnswers = 0;
  var points = 0;
  
  var lastUri = null;
  var lastCat = null;
  
  return {
    rightAnswers: rightAnswers,
    wrongAnswers: wrongAnswers,
    points: points,
    
    lastUri: lastUri,
    lastCat: lastCat
  };
  
})();
