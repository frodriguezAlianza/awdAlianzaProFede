app.directive('buscador', [function() {
    return {
        templateUrl:'./src/directivas/templates/buscador.html',
        restrict: 'E',
        scope: {
          busqueda: '='
        }
    };
}]);