app.controller("homeController",["$scope","$location", "AuthenticationService","md5","$rootScope",function($scope, $location, AuthenticationService,md5,$rootScope){

    $scope.login = function() {
        $scope.dataLoading = true;
        //Encriptamos la contrasena con MD5 para comparar con el el valor de la BD encriptado.
        var md5UserPassword= md5.createHash($scope.password);
        AuthenticationService.Login($scope.username, md5UserPassword, function (response) {
            if (response.success) {
                AuthenticationService.SetCredentials($scope.username, md5UserPassword, response.userRole);
                $location.path('/');
            } else {
                $scope.dataLoading = false;
                console.log("Error:"+response.message);
            }
        });
    };
    $scope.logout = function() {
        AuthenticationService.ClearCredentials();
        $location.path('/login');
    }
}]);