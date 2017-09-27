app.service('GastosService',["gastosCTEOptions","gastosCTE",function(gastosCTEOptions,gastosCTE){

    this.darmeOpcionesDeGastosService = function() {
       return gastosCTEOptions;
    }
    this.agregarGastoService = function(nuevoGasto){
        gastosCTE.push(nuevoGasto);
    }
    this.darmeGastosService = function(){
        return gastosCTE;
    }
}]);