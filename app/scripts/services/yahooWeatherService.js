'use strict';

angular.module('weatherApp')
	.factory('yahooWeatherService', ['$resource',
  function($resource){
    return $resource('http://query.yahooapis.com/v1/public/yql?q=select%20item%20from%20weather.forecast%20where%20location%3D%2248907%22&format=json', {}, {
      query: {method:'GET', params:{}}
    });
  }]);


// 	var _weatherData = {'loading':true};

// 	var serviceDefinitionObject = {
// 		weather:function(newWeather){
// 			if(newWeather){
// 				//$rootScope.$apply(function(){
// 					_weatherData = newWeather;
// 				//});
// 			}
// 			return _weatherData;
// 		}

// 	};

// 	$http({method: 'GET', url: '}).
// 		success(function(data, status, headers, config) {
// 			// this callback will be called asynchronously
// 			// when the response is available
// 			if(data && data.query && data.query.results){
// 				serviceDefinitionObject.weather(data.query.results);
				
				
// 			}
// 		}).
// 		error(function(data, status, headers, config) {
// 			// called asynchronously if an error occurs
// 			// or server returns response with an error status.
// 			_weatherData = data;
// 		});

// 	return serviceDefinitionObject;
// }]);