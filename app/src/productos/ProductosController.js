app.controller("productosController",["$scope","ProductoService",function($scope,ProductoService){
    /*Productos*/
    $scope.productoS={};
    $scope.productoModelS={};
    $scope.selected = {};
    $scope.tituloDirectiva= "En Producto";
    //Obtengo de la BD
    ProductoService.dbGetProductos().then(function(response){
 
        angular.forEach(response.data, function(value, key) {
            value.selected = false;
        });
        $scope.productoS = response.data;
    });

    //Imagenes de galeria
    $scope.Imagenes=[{img:'./src/images/i1.jpg'},{img:'./src/images/i2.jpg'},{img:'./src/images/i3.jpg'}]

    $scope.agregarProducto = function(){
        var modal = $scope.productoModelS;
        //  modal.id =  se encarga la api
        ProductoService.dbPostProducto(modal).then(function(response){
            $scope.productoS.push(response.data);
        });
    }
    $scope.oneSelected = function(modalSelected){
        modalSelected.selected = true;
    }
    $scope.borrarProducto = function(index,modalSelected){
        ProductoService.dbDeleteProducto(modalSelected).then(function(response){
            $scope.productoS.splice(index,1);
            modalSelected.selected = false;
        });
    }
    $scope.editarProducto = function(modalSelected){
        ProductoService.dbPutProducto(modalSelected).then(function(response){
            modalSelected.selected = false;
        });
        
    }
    /*NG TOUCH */
    $scope.model = {
        left:  0,
        right: 0,
        click: 0
    };
    $scope.swipeLeft = function () {
        $scope.model.left += 1;
    };
    $scope.swipeRight = function () {
        $scope.model.right += 1;
    }
    $scope.touchClick = function () {
        $scope.model.click += 1;
    };
    $scope.$swipe = function($event){
        console.log($event);
    }
    
}]);