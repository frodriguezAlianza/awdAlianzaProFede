
app.directive('myDraggable', ['$document','$timeout','$animate', function($document,$timeout,$animate) {
  return {
    template: '{{text}}',
    link: function(scope, element, attr) {
      var label = angular.element('<span>').addClass('label label-info');
      debugger;
      $animate.on('enter', element,
          function callback(element, phase) {
            console.log('Evento Enter ejecutado');
            element.css({
              backgroundColor: 'red'
            });
          }
      );
      $animate.on('leave', element,
      function callback(element, phase) {
        console.log('Evento Leave ejecutado');
      }
  );
      element.on('mouseenter', function() {
        scope.$apply(function() {
          var contents = element.contents();
      
          label.text('Tooltip: '+element.text());
          // Aagrega tooltip al elemento y llama al metodo enter
          $animate.enter(label, element, contents);
        });
      });
      element.on('mouseleave', function() {
        scope.$apply(function() {
          // elimino el label y llamo al metdo leave
          $animate.leave(label);
        });
      });

      var startX = 0, startY = 0, x = 0, y = 0;
      element.css({
       position: 'relative',
       border: '1px solid red',
       backgroundColor: 'lightgrey',
       cursor: 'pointer'
      });
      scope.text ="No estoy en el carrito";
      element.on('mouseup', function(event) {
        // Prevent default dragging of selected content
        event.preventDefault();
        startX = event.pageX;
        //startY = event.pageY;
        
        viewportWidth= $(this).parent().width() / 2;
        if(startX > viewportWidth){
            scope.text ="Estoy en el carrito";
            scope.$apply();//Le decimos a angular que cambiamos un valor del scope. Acelerando la actualizacion del DOM.
        }else{
            scope.text ="NO estoy en el carrito";
            scope.$apply();
        }
      });
      element.on('mousedown', function(event) {
        // Prevent default dragging of selected content
        event.preventDefault();
        startX = event.pageX - x;
        startY = event.pageY - y;
        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
      });

      function mousemove(event) {
        y = event.pageY - startY;
        x = event.pageX - startX;
        element.css({
          top: y + 'px',
          left:  x + 'px'
        });
      }

      function mouseup() {
        $document.off('mousemove', mousemove);
       //$document.off('mouseup', mouseup);
      }
    }
  };
}]);