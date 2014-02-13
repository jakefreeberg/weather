'use strict';

angular.module('weatherApp')
	.directive('rangeSlider', function(yahooWeatherService) {
	return {
		link: function (scope, element, attrs) {

			$(function() {
				console.log($( "#slider-range" ));
				$( "#slider-range" ).slider({
				  range: true,
				  min: -10,
				  max: 110,
				  values: [ 55, 80 ],
				  slide: function( event, ui ) {
				    $( "#amount" ).val( ui.values[ 0 ] + "°F - " + ui.values[ 1 ] + "°F");
				  }
				});
				$( "#amount" ).val( String($( "#slider-range" ).slider( "values", 0 ))
					+ "°F - " + String($( "#slider-range" ).slider( "values", 1 )) + "°F");
			});

			
		}
	};
});