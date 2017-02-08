/**
 * Created by Sören on 18.12.2016.
 */
/* innen */
var entity = document.querySelector('#camera');

$('#tabakladenTUERi').on('click', function () {
    var out = "index.html";
    setTimeout(function () {
        $( '#innen' ).fadeOut( "slow", function () {
            window.location = out;
        });
    }, 1500);
});

$('#triggerTuer').on('click', function () {
    AFRAME.utils.entity.setComponentProperty(entity, 'position', {x: 0.25, y:13.6, z:0});
    AFRAME.utils.entity.setComponentProperty(entity, 'rotation', {x: 0, y:15, z:0});
});

$('#triggerHinten').on('click', function () {
    AFRAME.utils.entity.setComponentProperty(entity, 'position', {x: -11.25, y:13.60, z:2.86});
    AFRAME.utils.entity.setComponentProperty(entity, 'rotation', {x: 0, y:90.00, z:0});
});



/*var timeoutId = null;

$('#tabakladenTUERi').on('mouseenter', function () {
    var out = "index.html";
    timeoutId = setTimeout(function () {
        $( '#innen' ).fadeOut( "slow", function () {
            window.location = out;
        })}, 2750);
});

$('#tabakladenTUERi').on('mouseleave', function () {
    window.clearTimeout(timeoutId);
});*/