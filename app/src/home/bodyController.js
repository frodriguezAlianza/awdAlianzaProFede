app.controller("bodyController",["$scope","$window",function($scope,$window){

    //Ng Scroll
    $scope.value = 0;
    $scope.increment = function() {
     var myScrollY = $window.scrollY;
     if(myScrollY < 20){
        alert('LLegue a los menores de 20')
     }
     
    };
    $scope.decrement = function() {
        var myScrollY = $window.scrollY;
        if(myScrollY > 20){
            alert('Supere los  20')
        }
    }
}]);