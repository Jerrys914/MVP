
angular.module('passlock.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};
  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.passlock', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.passlock', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.isAuth = Auth.isAuth;
  $scope.signout = Auth.signout;


});
