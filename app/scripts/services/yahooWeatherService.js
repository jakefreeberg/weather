'use strict';

angular.module('weatherApp')
	.factory('yahooWeatherService', ['$resource', function($resource){
		return $resource('http://query.yahooapis.com/v1/public/yql?q=:q:woeid', {}, {
			query: {method:'GET', params:{q:'select * from weather.forecast where woeid=', woeid:'2502265', format:'json', diagnostics:true}}
		});
	}]);