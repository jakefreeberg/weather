'use strict';

angular.module('weatherApp')
	.controller('MainCtrl', function ($scope, geolocation, yahooPlaceFinderService, yahooWeatherService) {
		
	$scope.locationChoices = [{name:'Duluth, MN',woeid:'2394207'},{name:'Branson, MO',woeid:'2368233'},{name:'Tijuana, Mexico',woeid:'12599694'},{name:'Auckland, NZ',woeid:'15021756'}];
	$scope.weatherConditions = [{name:'Clear', codes:[31,32,33,34,25,23,24]},
		{name:'Cloudy', codes:[26,27,28,29,30,44]},
		{name:'Foggy / Hazy', codes:[19,20,21,22]},
		{name:'Rainy', codes:[5,6,7,8,9,10,11,12,45,47,40,18]},
		{name:'Snowy', codes:[13,14,15,16,41,42,43,46]},
		{name:'Stormy', codes:[0,1,2,3,4,37,38,39,17,35]}];

	$scope.$watch('locationData.query.results.Result', function (newLocation){
		if(newLocation){
			$scope.weatherData = yahooWeatherService.query({woeid:newLocation.woeid});
		}
	} );


});
