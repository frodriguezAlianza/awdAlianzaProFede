app.directive('progressBar', ['$q',function($q) {
    return {
        templateUrl:'./src/directivas/templates/progressbar.html',
        restrict: 'E',
        scope: {
            valselected: '='
        },
        controller: function($scope){
            debugger;
            $scope.progress={'widht':'100px','background-color':'white'};
            $scope.$watch("valselected",function(newValue,oldValue) {
                //Detecta cambios en la variable valselected y ejecuta este codigo, baja la performance..
                switch($scope.valselected){
                    case '0': 
                    $scope.progress={'width':'0px','background-color':'white'};
                    break;
                    case '1':
                        $scope.progress={'width':'30%','background-color':'#ffcccc'}; 
                        break;
                    case  '5':
                        $scope.progress={'width':'60%','background-color':'#ff9999'};
                        break;
                    case '10':
                        $scope.progress={'width':'100%','background-color':'#ff4d4d'}; 
                        break;
                    default:
                        $scope.progress={'width':'0px','background-color':'white'};
                }
            });           
        },
        link: function(scope,element) {
            debugger;
            $(element).find('.boxprogress').css({'height':'20px'});
          
        }
    };
}]);