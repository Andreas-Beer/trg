/*global module*/

module.exports = {
  
  hasBirthday: function (birthday) {
    
    'use strict';
    
    var current = new Date();
    return current.getDate() === birthday.getDate() &&
      current.getMonth() === birthday.getMonth();
  },
  
  fromYyyyMmDd: function (date) {
    
    'use strict';
    
    return new Date(
      date.substring(0,4),
      +date.substring(4,6) - 1,
      date.substring(6,8)
    );
  }
  
};