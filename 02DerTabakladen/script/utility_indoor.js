/* innen */

var entity = document.querySelector('#camera');

$('#tabakladenTUERi').on('click', function doorClick() {
    'use strict';
    var out = "index.html";
    setTimeout(function timoutFadeOut() {
        $('#innen').fadeOut("slow", function timeoutSlow() {
            window.location = out;
        });
    }, 1500);
});

$('#triggerTuer').on('click', function triggerTuer() {
    'use strict';
    AFRAME.utils.entity.setComponentProperty(entity, 'position', {x: 0.25, y: 13.6, z: 0});
    AFRAME.utils.entity.setComponentProperty(entity, 'rotation', {x: 0, y: 15, z: 0});
});

$('#triggerHinten').on('click', function triggerHinten() {
    'use strict';
    AFRAME.utils.entity.setComponentProperty(entity, 'position', {x: -11.25, y: 13.60, z: 2.86});
    AFRAME.utils.entity.setComponentProperty(entity, 'rotation', {x: 0, y: 105.00, z: 0});
});

var candle = document.querySelector('#kerzeFlamme');
var room = document.querySelector('#ambLight')
$('#kerze').on('click', function triggerKerze() {
  var stateCandle = AFRAME.utils.entity.getComponentProperty(candle, 'light.intensity');
  var stateRoom = AFRAME.utils.entity.getComponentProperty(room, 'light.intensity');

  switch (stateCandle) {
    case 0:
      if (stateRoom == 1) {
        AFRAME.utils.entity.setComponentProperty(candle, 'light.intensity', 1);
        AFRAME.utils.entity.setComponentProperty(room, 'light.intensity', 2);
      }
      else {
        AFRAME.utils.entity.setComponentProperty(candle, 'light.intensity', 0.75);
        AFRAME.utils.entity.setComponentProperty(room, 'light.intensity', 1);
      }
      break;
    case 1:
      AFRAME.utils.entity.setComponentProperty(candle, 'light.intensity', 0);
      AFRAME.utils.entity.setComponentProperty(room, 'light.intensity', 1);
      break;
    case 0.75:
      AFRAME.utils.entity.setComponentProperty(candle, 'light.intensity', 0);
      AFRAME.utils.entity.setComponentProperty(room, 'light.intensity', 0.2);
      break;
    default:
  }
});
