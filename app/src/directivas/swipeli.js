
app.directive('swipeLi', ['$swipe', function($swipe) {
  return {
    restrict: 'E',
    link: function(scope, ele, attrs, ctrl) {
      var startX, pointX, iniCoordX;
      var leftAux=0;
      var rightAux=0;
      var width = ele[0].offsetWidth;
      var viewPort2 = window.visualViewport.width / 2;
      
      
     /* var  initialSpan = function(){
        ele.toggleClass('inMove');
      }
      */
      
      $swipe.bind(ele, {
        'start':  function(coords){
        //  initialSpan();
        /*  iniCoordX = coords.x;
          var leftAux=0;
          var rightAux=0;
          ele.css('width',450 + "px");
          ele.css('left',25 + "%");
          ele.css('right',25 + "%");*/
        },
        'move': function(coords) {
         // ele.css('width',100 + "%");
          x = coords.x;
         // var widthAux = width;
          if(x < viewPort2){
            //lado izquierdo
           // widthAux = widthAux+x;
          //  leftAux= x;
          ele.css('background-color','green');
          }else{
            if(x != 0){
             // widthAux = widthAux-x;
             // rightAux = x;
             ele.css('background-color','#00C300');
            }
          }
         // ele.css('width',450 + "px");
         // ele.css('left',leftAux + "px");
         // ele.css('right',rightAux + "px");
        },
        'end':  function(){
         /* var leftAux=0;
          var rightAux=0;
          ele.css('width',100 + "%");
          ele.css('left',leftAux + "px");
          ele.css('right',rightAux + "px");
*/
        ele.css('background-color','red');
        },
        'cancel':  function(){
     /*     var leftAux=0;
          var rightAux=0;
          ele.css('width',100 + "%");
          ele.css('left',leftAux + "px");
          ele.css('right',rightAux + "px");
          */
          ele.css('background-color','red');
        }
      });
    }
  }
}]);