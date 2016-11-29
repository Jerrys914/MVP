angular.module('passlock.users',[])
.factory('userFactory',function($http) {
    return function postData(data) {
        $http({
            method:'POST',
            url:"api/signin",
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
.controller('enteruser', function($scope, $http, userFactory) {
    var sendData = function(data) {
      userFactory(data);
      console.log('POST DATA: ', data)
    };
    $scope.data = {};
    $scope.data.sendData = sendData;  
})