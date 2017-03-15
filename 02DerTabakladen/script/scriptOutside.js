//Variables
var at = 0;
var trigggerEvent = 0;
var i = 0, j = 0;
var currentTarget;
var fireAt;
var lastClickableFused;
var nowClicked;

////auto-enter VR (https://github.com/aframevr/aframe/issues/1473) -> not yet working
//window.addEventListener('load', function onLoadEnterVR() {
//    'use strict';
//    var scene = document.querySelector('a-scene');
//    if (scene.hasLoaded) {
//        scene.enterVR();
//    } else {
//        el.addEventListener('loaded', function () {
//            scene.enterVR();
//        });
//    }
//});

//Cursor found .clickable
$(".clickable").on('fusing', function onFusingClickable() {
    'use strict';
    currentTarget = '#' + $(this).closest("a-entity").attr('id');
    console.log(currentTarget);

    trigggerEvent = "clickableFound";
    document.querySelector("#cursor").emit(trigggerEvent);
    document.querySelector(currentTarget).emit(trigggerEvent);
    lastClickableFused = currentTarget;
});

//Cursor triggers click on .clickable
$(".clickable").on('click', function onClickClickable() {
    'use strict';
    if (at !== "two" || at !== "three") {
        currentTarget = '#' + $(this).closest("a-entity").attr('id');
        trigggerEvent = "clickableClick";
        nowClicked = currentTarget;
        if (nowClicked === lastClickableFused) {
            document.querySelector("#cursor").emit(trigggerEvent);
            document.querySelector(currentTarget).emit(trigggerEvent);
        }
    }
});

//Camera jump
$(".clickableTrigger").on('click', function onClickableTriggerClick() {
    'use strict';
    currentTarget = '#' + $(this).closest("a-box").attr('id');
    trigggerEvent = "clickableClick";
    nowClicked = currentTarget;
    if (nowClicked === lastClickableFused) {
        document.querySelector("#cursor").emit(trigggerEvent);
    }
});
$(".clickableTrigger").on('fusing', function onClickableTriggerFusing() {
    'use strict';
    currentTarget = '#' + $(this).closest("a-box").attr('id');
    console.log(currentTarget);

    trigggerEvent = "clickableFound";
    document.querySelector("#cursor").emit(trigggerEvent);
    lastClickableFused = currentTarget;
});

//Cursor is not on .clickable
$("a-entity").on('fusing', function onFusingEntity() {
    'use strict';
    currentTarget = "#cursor";
    trigggerEvent = "notClickable";
    document.querySelector(currentTarget).emit(trigggerEvent);
});

//start storyline
document.querySelector('a-scene').addEventListener('loaded', function onLoadedScene() {
    'use strict';

    setTimeout(function giveMeTime() {
        $("#giveMeTime").remove();
    }, 2500);
});