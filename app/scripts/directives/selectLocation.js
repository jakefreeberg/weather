'use strict';

angular.module('weatherApp')
	.directive('selectLocation', function(yahooWeatherService) {
	return {
		link: function (scope, element, attrs) {
			element.on('change', function(){

				var woeid = element[0].options[element[0].selectedIndex].value;
				scope.weatherData = yahooWeatherService.query({'woeid':woeid});

			});
		}
	};
});