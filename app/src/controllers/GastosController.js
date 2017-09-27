app.controller("gastosController",["$scope","GastosService",function($scope,GastosService){
    /*Gastos*/
    $scope.gastosS={};
    $scope.gastoModelS={show:true};
    $scope.gastosSOptions= GastosService.darmeOpcionesDeGastosService();
    $scope.gastosS= GastosService.darmeGastosService();

    $scope.agregarGasto = function(){
        $scope.gastoModelS.id = $scope.gastosS.length;
        var modal = $scope.gastoModelS;
        GastosService.agregarGastoService(modal);
    }
}]);