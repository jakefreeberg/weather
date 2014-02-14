'use strict';

angular.module('weatherApp')
	.controller('MainCtrl', function ($scope) {
		
	$scope.locationChoices = [{name:'Duluth, MN',woeid:'2394207'},{name:'Branson, MO',woeid:'2368233'},{name:'Tijuana, Mexico',woeid:'12599694'},{name:'Auckland, NZ',woeid:'15021756'}];
	$scope.weatherConditions = [{name:'Clear', codes:[31,32,33,34,25,23,24]},
		{name:'Cloudy', codes:[26,27,28,29,30,44]},
		{name:'Foggy / Hazy', codes:[19,20,21,22]},
		{name:'Rainy', codes:[5,6,7,8,9,10,11,12,45,47,40,18]},
		{name:'Snowy', codes:[13,14,15,16,41,42,43,46]},
		{name:'Stormy', codes:[0,1,2,3,4,37,38,39,17,35]}];
	$scope.conditions = $scope.weatherConditions[0];

	//loaded in selectLocation
	$scope.weatherData = false;

	//loaded by rangeSlider
	$scope.highTemp = 0;
	$scope.lowTemp = 0;

	$scope.$watch('weatherData.query', function (){console.log("NEW PLACE");_checkSettings();});
	$scope.$watch('conditions', function (){_checkSettings();});
	$scope.$watch('lowTemp', function (){_checkSettings();});
	$scope.$watch('highTemp', function (){_checkSettings();});

	/*
	* The following function handles the core functionality here.
	* It checks all the settings and adds values in to the scope.
	* It tells the weather data if it's "acceptable" to the user or not
	*/
	function _checkSettings (){
		if($scope.weatherData && $scope.weatherData.query){
			var forecast = $scope.weatherData.query.results.channel.item.forecast,
				acceptable = {'verdict':true, 'message':'', 'css':'all-good'},
				i = 0;

			for (i; i<forecast.length; i++){
				// assume everything is good:
				forecast[i].acceptable = acceptable;

				if($scope.conditions.codes.indexOf(parseInt(forecast[i].code)) == -1){
					forecast[i].acceptable = _notAcceptable("Unfavorable Conditions")
				}
			
				if(forecast[i].low < $scope.lowTemp){
					forecast[i].acceptable = _notAcceptable("Too Cold")
				}

				if(forecast[i].high > $scope.highTemp){
					forecast[i].acceptable = _notAcceptable("Too Hot")
				}
			}

			$scope.weatherData.query.results.channel.item.forecast = forecast;
		}
	}

	function _notAcceptable(message){
		return {'verdict':false, 'message':message, 'css':'unacceptable'}
	}

});
