/* außen */

var entity = document.querySelector('#camera');

$('#tabakladenTUERa').on('click', function doorClick() {
    'use strict';
    var innen = "indemladen.html";
    setTimeout(function timoutFadeOut() {
        $('#außen').fadeOut("slow", function timeoutSlow() {
            window.location = innen;
        });
    }, 1500);
});

$('#triggerBaeume').on('click', function triggerBaeume() {
    'use strict';
    AFRAME.utils.entity.setComponentProperty(entity, 'position', {x: -5, y: 5.8, z: -10.11});
    AFRAME.utils.entity.setComponentProperty(entity, 'rotation', {x: 0, y: 90, z: 0});
});

$('#triggerBaeckerei').on('click', function triggerBaeckerei() {
    'use strict';
    AFRAME.utils.entity.setComponentProperty(entity, 'position', {x: -10.71, y: 5.8, z: -50.20});
    AFRAME.utils.entity.setComponentProperty(entity, 'rotation', {x: 0, y: 0.00, z: 0});
});

$('#triggerTabakladenDefault').on('click', function triggerTabakladenDefault() {
    'use strict';
    AFRAME.utils.entity.setComponentProperty(entity, 'position', {x: 0.00, y: 5.8, z: 0.00});
    AFRAME.utils.entity.setComponentProperty(entity, 'rotation', {x: 0, y: 0, z: 0});
});

$('#triggerTeppichladen').on('click', function triggerTeppichladen() {
    'use strict';
    AFRAME.utils.entity.setComponentProperty(entity, 'position', {x: -27.5, y: 5.8, z: -10});
    AFRAME.utils.entity.setComponentProperty(entity, 'rotation', {x: 0, y: 0, z: 0});
});


var memory = document.querySelector('#memoryGame');
$('#cardStack').on('click', function triggerMemory() {
  AFRAME.utils.entity.setComponentProperty(memory, 'visible', true);
});

var cakeEntity = document.querySelector('#cakeGame');
$('#cardStack').on('click', function beginCake() {
  AFRAME.utils.entity.setComponentProperty(cakeEntity, 'visible', true);
});
