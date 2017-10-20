app.controller("registroController",["$scope","UsuarioService", "$location", "$rootScope","md5",function($scope, UsuarioService, $location, $rootScope,md5){

    $scope.register = function() {
        $scope.dataLoading = true;

        //Encriptamos la password con md5
        var md5UserPassword= md5.createHash($scope.user.password);
        $scope.user.password = md5UserPassword;
        if(!$scope.user.role){
            $scope.user.role = "public"
        }else{
            $scope.user.role = "admin"
        }
        UsuarioService.dbPostUsuario($scope.user)
            .then(function (response) {
                if (response) {
                    $location.path('/login');
                } else {
                    $scope.dataLoading = false;
                }
            }, function errorCallback(response){
                $scope.dataLoading = false;
                console.log("Error:"+response.status);
                //podriamos utilizar una libreria de alertas para angular como 
                //https://www.npmjs.com/package/angular-ui-notification
            });
    }

}]);