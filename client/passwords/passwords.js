angular.module('passlock.passwords',[])
.controller('passwordCtrl', function($scope, $http) {
  $http({
        method : "GET",
        url : "api/passwords"
    }).then(function mySucces(response) {
        $scope.data = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
}).factory('passwordFactory',function($http) {

    return function postData(data) {
        $http({
            method:'POST',
            url:"api/enterpassword",
            headers: {
                'Content-Type': 'application/json'
            },
            data: data

        }).then(function(response) {
            console.log('RESPONSE: ', response);
            return response;
        })
    }
})
.controller('enterPassword', function($scope, $http, passwordFactory) {
    var sendData = function(data) {
      passwordFactory(data);
      console.log('POST DATA: ', data)
     // console.log('POST DATA: ', data)
    };
    $scope.data = {};

    $scope.data.sendData = sendData;  
})