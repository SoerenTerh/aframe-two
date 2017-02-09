/**
 * Created by Sören on 18.12.2016.
 */
var entity = document.querySelector('#camera');

/* außen */

$('#tabakladenTUERa').on('click', function () {
    var innen = "indemladen.html";
    setTimeout(function(){
        $( '#außen' ).fadeOut( "slow", function() {
            window.location = innen;
        });
}, 1500);
    });

$('#triggerBaeume').on('click', function () {
    AFRAME.utils.entity.setComponentProperty(entity, 'position', {x: 22.19, y:5.8, z:-8.11});
    AFRAME.utils.entity.setComponentProperty(entity, 'rotation', {x: 0, y:-90, z:0});


});

$('#triggerBaeckerei').on('click', function () {
    AFRAME.utils.entity.setComponentProperty(entity, 'position', {x: -14.71, y:5.8, z:-37.20});
    AFRAME.utils.entity.setComponentProperty(entity, 'rotation', {x: 0, y:0.00, z:0});

});

$('#triggerTabakladenDefault').on('click', function () {
    AFRAME.utils.entity.setComponentProperty(entity, 'position', {x: 0.00, y:5.8, z:0.00});
    AFRAME.utils.entity.setComponentProperty(entity, 'rotation', {x: 0, y:0, z:0});
});

$('#triggerTeppichladen').on('click', function () {
    AFRAME.utils.entity.setComponentProperty(entity, 'position', {x: -38.50, y:5.8, z:19.83});
    AFRAME.utils.entity.setComponentProperty(entity, 'rotation', {x: 0, y:180.00, z:0});
});

