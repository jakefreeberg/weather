'use strict';

angular.module('weatherApp')
	.directive('selectLocation', function(geolocation, yahooWeatherService, yahooPlaceFinderService) {
	return {
		link: function (scope, element, attrs) {
			element.on('change', function(){

				var woeid = element[0].options[element[0].selectedIndex].value;

				if(isNaN(woeid)){
					geolocation.getLocation().then(function(data){
						scope.locationData = yahooPlaceFinderService.query({latitude:data.coords.latitude, longitude:data.coords.longitude});
					}, function(response) {
				      // do something on error
				      alert("We can not find your location: "+response)
				    });
				} else {
					scope.weatherData = yahooWeatherService.query({'woeid':woeid});
					scope.locationData = null;
				}

	

			});

			scope.$watch('locationData.query.results.Result', function (newLocation){
				if(newLocation){
					scope.weatherData = yahooWeatherService.query({woeid:newLocation.woeid});
				}
			} );


		}
	};
});