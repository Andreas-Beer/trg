/*global module*/

var date = require('./mocha_date.js');

module.exports = {
  
  birthdays: function (birthdayList) {
   
    'use strict';
    
    var result = [];
    var persons = birthdayList.length;
    var person;
    
    for (var i = 0; i < persons; i++) {
      person = birthdayList[i];
      if (date.hasBirthday(person.birthday)) {
        result.push(person.name);
      }
    }
    
    return result;
  }
  
};