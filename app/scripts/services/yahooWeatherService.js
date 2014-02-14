'use strict';

angular.module('weatherApp')
	.factory('yahooWeatherService', ['$resource', function($resource){
		return $resource('http://query.yahooapis.com/v1/public/yql?q=:q:woeid', {}, {
			query: {method:'GET', params:{q:'select * from weather.forecast where woeid=', woeid:'2502265', format:'json', diagnostics:true}}
		});
	}]);

//http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'http%3A%2F%2Fweather.yahooapis.com%2Fforecastrss%3Fw%3D2502265%26d%3D7'&format=json&diagnostics=true&callback=