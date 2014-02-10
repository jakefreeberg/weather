'use strict';

angular.module('weatherApp', [
  'ngResource',
  'ngRoute',
  'geolocation'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
