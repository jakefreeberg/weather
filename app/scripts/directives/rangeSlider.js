'use strict';

angular.module('weatherApp')
	.directive('rangeSlider', function($rootScope) {
	return {
		link: function (scope, element, attrs) {

			$(function() {
				$( '#slider-range' ).slider({
				  range: true,
				  min: -10,
				  max: 110,
				  values: [ 55, 80 ],
				  slide: function( event, ui ) {
				    $( '#amount' ).val( ui.values[ 0 ] + '°F - ' + ui.values[ 1 ] + '°F');
				    $rootScope.$apply(function(){
						scope.highTemp = ui.values[ 1 ];
				    	scope.lowTemp = ui.values[ 0 ];
				    });
				    
				  }
				});
				var lo = $( '#slider-range' ).slider( 'values', 0 ),
					hi = $( '#slider-range' ).slider( 'values', 1 ),
					amount_string = lo + '°F - ' + hi + '°F';

				scope.highTemp = hi;
				scope.lowTemp = lo;

				$( '#amount' ).val( amount_string );
			});

			
		}
	};
});