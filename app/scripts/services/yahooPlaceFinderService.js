'use strict';

angular.module('weatherApp')
	.factory('yahooPlaceFinderService', ['$resource', function($resource){
		return $resource('http://query.yahooapis.com/v1/public/yql?q=:q:latitude:comma:longitude:qa', {}, {
			query: {method:'GET', params:{q:'select * from geo.placefinder where text="', latitude:42.73, comma:',', longitude:-84.56, qa:'" and gflags="R"', format:'json', diagnostics:true}}
		});
	}]);