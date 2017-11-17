app.controller("productosController",["$scope","ProductoService","Upload","$timeout",function($scope,ProductoService,Upload,$timeout){
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
        modal.files = $scope.filesBase64?$scope.filesBase64[0]:'';
        
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
    
    //uploade de Productos
    $scope.$watch('files', function () {
        debugger;
        $scope.upload($scope.files);
    });
    $scope.$watch('file', function () {
        if ($scope.file != null) {
            $scope.files = [$scope.file]; 
        }
    });
    $scope.log = '';

    $scope.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
              var file = files[i];
              if (!file.$error) {

                Upload.upload({
                    url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                    data: {
                      //username: $scope.username,
                      file: file  
                    }
                }).then(function (resp) {
                    
                    $timeout(function() {
                        Upload.base64DataUrl(files).then(function(urls){
                            debugger;
                            $scope.filesBase64 = urls;
                        });
                    });
                }, null, function (evt) {
                    var progressPercentage = parseInt(100.0 *
                    		evt.loaded / evt.total);
                    $scope.log = 'progress: ' + progressPercentage + 
                    	'% ' + evt.config.data.file.name + '\n' + 
                      $scope.log;
                });
              }
            }
        }
    };



}]);