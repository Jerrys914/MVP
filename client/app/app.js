angular.module('passlock',['passlock.passwords', 'passlock.users', 'ngRoute'])
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
    .when('/signin', {
      templateUrl: '../users/signin.html',
      controller:'enteruser'  
    })
});