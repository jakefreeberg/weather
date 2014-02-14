'use strict';

/* Filters */

angular.module('weatherApp')
.filter('fullDayName', function() {
  return function(input) {
  	
  	var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      name = "error";

    for(var i = 0; i < 7; i++){
      if(days[i].indexOf(input) != -1){
        name = days[i];
        break;
      }
    }
    return name;
  }
});


