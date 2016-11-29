angular.module('passlock',['passlock.passwords', 'ngRoute'])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/passwords', {
      templateUrl: '../passwords/passwords.html',
      controller: 'passwordCtrl'
    })
    .when('/enterpassword', {
      templateUrl: '../passwords/enterpassword.html',
      controller:'enterPassword'
    })
});