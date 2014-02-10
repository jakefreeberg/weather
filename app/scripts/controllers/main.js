'use strict';

angular.module('weatherApp')
	.controller('MainCtrl', function ($scope, geolocation, yahooPlaceFinderService, yahooWeatherService) {
		

		geolocation.getLocation().then(function(data){
	    	$scope.locationData = yahooPlaceFinderService.query({latitude:data.coords.latitude, longitude:data.coords.longitude});
	    });

	    $scope.$watch("locationData.query.results.Result", function (new_location){
	    	if(new_location){
	    		$scope.weatherData = yahooWeatherService.query({woeid:new_location.woeid});
	    	}
	    } );
	});

