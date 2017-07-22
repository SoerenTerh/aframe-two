/* innen */

var entity = document.querySelector('#camera');

/** Trigger points to move in the room */
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

/**
 * Change the candle's light intensity depending on the previous light intensity level
 */
var candle = document.querySelector('#kerzeFlamme');
var room = document.querySelector('#ambLight');
$('#kerze').on('click', function triggerKerze() {
    var stateCandle = AFRAME.utils.entity.getComponentProperty(candle, 'light.intensity');
    var stateRoom = AFRAME.utils.entity.getComponentProperty(room, 'light.intensity');

    switch (stateCandle) {
        case 0:
            if (stateRoom === 1) { //Raum wird überblendet
                AFRAME.utils.entity.setComponentProperty(candle, 'light.intensity', 1);
                AFRAME.utils.entity.setComponentProperty(room, 'light.intensity', 2);
                var audioAn = new Audio('../assets/audio/Licht/reaktion-licht-ist-an.mp3');
                audioAn.play();
            }
            else { //Licht ist aus, wird angemacht
                AFRAME.utils.entity.setComponentProperty(candle, 'light.intensity', 0.75);
                AFRAME.utils.entity.setComponentProperty(room, 'light.intensity', 1);
            }
            break;
        case 1: // Raum ist überblendet, Licht wird ausgemacht
            AFRAME.utils.entity.setComponentProperty(candle, 'light.intensity', 0);
            AFRAME.utils.entity.setComponentProperty(room, 'light.intensity', 1);
            break;
        case 0.75: // Kerze ist an, Licht wird aus gemacht
            AFRAME.utils.entity.setComponentProperty(candle, 'light.intensity', 0);
            AFRAME.utils.entity.setComponentProperty(room, 'light.intensity', 0.2);
            var audioAus = new Audio('../assets/audio/Licht/reaktion-licht-ist-aus.mp3');
            audioAus.play();
            break;
        default:
            break;
                       }
});

document.querySelector('#open').addEventListener('animationend', function(){
    console.log("animationStop");
    setTimeout(function(){document.querySelector('#tabakladenTUERi').setAttribute('rotation', {x:0, y:-90, z:0});}, 1000);
});

$('#icontuer').on('open', function triggericon() {
	console.log("Hallo");
	document.querySelector('#tabakladenTUERi' + '> a-animation').emit('open');
	
	});
	

