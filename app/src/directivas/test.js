app.directive('test', function() {
    return {
      restrict: 'E',  
      scope:{
          data: '@',//text binding // = Two way binding no necesita {{}} en el html donde se hace el mapeo // & one binding
          desdedirectiva: '=desdedirectiva1',
          mapeovalordirectiva: '=',
          clickhi: '&'//Desde un boton de adentro de la directiva estamos llamando a un metodo del controlador padre y acutulizando su valor pasado por parametro.
        },
     templateUrl: './src/directivas/templates/test.html',
     //replace:true,//si seleccionamos esta opcion tenemos que hacer que todo el html este adentro de un solo elemento.por ejemplo <div></div>
      controller: function($scope)
      {
        $scope.desdedirectiva = "Valor controller";
        //scope de la directiva
        console.log("Acaaa:",$scope.mapeoValorPadre);//No veo este valor ya que tengo que pasarlo como parametro a la diirectiva.
        console.log("AcaaaData:",$scope.data);//Veo el valor ya que se pasa como parametro en la directiva
        console.log("Acaaa:",$scope.desdedirectiva);
     
        $scope.mapeovalordirectiva = 'hola';//Este valor se define aca y es visible en el HTML de la directiva como en el HTMl de padre.
        $scope.enDirectiveController = 'En la directiva metodo controller.';
        //Funciones
        $scope.clickController = function(){
          console.log("Controller Click IT");
        }
      },
      link: function(scope){
        scope.enDirectiveLink = 'En la directiva metodo link.';
        scope.desdedirectiva = "Valor link";
        //veo el scope de la directiva
        console.log("lAcaaa:",scope.mapeoValorPadre);
        console.log("lAcaaaData:",scope.data);
        console.log("lAcaaa:",scope.desdedirectiva);

        //Funciones
        scope.clickLink = function(){
          console.log("Link Click IT");
        }
      }
    };
});