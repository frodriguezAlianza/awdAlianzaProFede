app.directive('delayByOne', function() {
    return {
      link: function (scope,element)
      {
        //element hace referencia al div que contiene la directiva
      
            $(element).delay(900 * 3).animate();
        
        
    
      }
    };
});