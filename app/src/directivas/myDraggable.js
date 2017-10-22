
app.directive('myDraggable', ['$document','$timeout', function($document,$timeout) {
  return {
    template: '{{text}}',
    link: function(scope, element, attr) {
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