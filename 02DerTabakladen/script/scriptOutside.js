//Variables
var at = 0;
var trigggerEvent = 0;
var i = 0, j = 0;
var currentTarget;
var fireAt;
var lastClickableFused;
var nowClicked;


//Arrays
var eventArr = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
at = eventArr[0];

var persons = ["#Frau",
               "#Neffe",
               "#Mann",

               "#Schwaegerin",
               "#Bruder",

               "#Großvater",
               "#Junge",

               "#Nichte",

               "#ShuiTa",
               "#Schreiner",
               "#Polizist",
               "#Hausbesitzerin"];

var one = ["#kerzeFlamme", "#Frau", "#Neffe", "#Mann", '#Schwaegerin', "#Großvater", "#Junge", "#Bruder"], //alle schlafen + Lampe brennt
    two = ["#tabakladenTUERi",  "#ShuiTa", "#Schreiner", "#Frau", "#Neffe", "#Mann", '#Schwaegerin', "#Großvater", "#Junge", "#Bruder"], //ShuiTa Klopft (schnarchen stoppt)
    talkTwo = ["#Frau", "#Neffe"],
    three = ["#sockelFrau", "#Frau", "#tabakladenTUERi", "#Schreiner", "#ShuiTa"], //Frau öffnet Tür für Schreiner und ShuiTa
    four = ["#Neffe", "#Mann", '#Schwaegerin', "#Großvater", "#Junge", "#Bruder"], //alle Wachen auf
    five = ["#ShuiTa", "#kerzeFlamme"], //ShuiTa geht zu lampe und löscht diese
    six = ["#ShuiTa"], //ShuiTa Schüttelt Kopf
    seven = ["#Mann", "#Frau", "#Neffe",  '#Schwaegerin', "#Großvater", "#Junge", "#Bruder"], //Mann organisiert alle (du und du und du....)
    eight = ["#Junge", "#tabakladenTUERi", "#Frau", "#Neffe", "#Bruder", '#Schwaegerin', "#Alte", "#Großvater"], //Junge nickt und verschindet aus laden (Richtung Bäckerei); alle ziehen sich an
    nine = ["#Neffe", "#Bruder", '#Schwaegerin', "#Nichte"], //Neffe, Bruder, Schwaegerin & Nichte verlassen Laden
    ten = ["#ShuiTa", "#bett"], //ShuiTa räumt auf
    eleven = [],
    twelve = [],
    thirteen = [],
    fourteen = [],
    fivteen = [],
    sixteen = [],
    seventeen = [],
    eighteen = [],
    nineteen = [],
    twenty = [];

//auto-enter VR (https://github.com/aframevr/aframe/issues/1473)
window.addEventListener('load', function onLoadEnterVR() {
    'use strict';
    var scene = document.querySelector('a-scene');
    if (scene.hasLoaded) {
        scene.enterVR();
    } else {
        el.addEventListener('loaded', function () {
            scene.enterVR();
        });
    }
});


//Cursor found .clickable
$(".clickable").on('fusing', function () {
    'use strict';
    currentTarget = '#' + $(this).closest("a-entity").attr('id');
    console.log(currentTarget);

    trigggerEvent = "clickableFound";
    document.querySelector("#cursor").emit(trigggerEvent);
    document.querySelector(currentTarget).emit(trigggerEvent);
    lastClickableFused = currentTarget;


});

//Cursor triggers click on .clickable
$(".clickable").on('click', function () {
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
$("a-entity").on('fusing', function () {
    'use strict';
    currentTarget = "#cursor";
    trigggerEvent = "notClickable";
    document.querySelector(currentTarget).emit(trigggerEvent);
});

//start storyline
document.querySelector('a-scene').addEventListener('loaded', function () {
    'use strict';

    setTimeout(function () {
        $("#giveMeTime").remove();
    }, 2500);
});