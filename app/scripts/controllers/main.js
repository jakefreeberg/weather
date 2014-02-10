'use strict';

angular.module('weatherApp')
	.controller('MainCtrl', function ($scope, yahooWeatherService) {
		$scope.weatherData = yahooWeatherService.query();

		$scope.$watch('weatherData', function(n){
			console.log(n);
		})
	});

