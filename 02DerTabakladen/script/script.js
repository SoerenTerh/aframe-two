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

var one = ["#kerze", "#Frau", "#Neffe", "#Mann", '#Schwaegerin', "#Großvater", "#Junge", "#Bruder"], //alle schlafen + Lampe brennt
    two = ["#tabakladenTUERi",  "#ShuiTa", "#Schreiner"], //ShuiTa Klopft
    talkTwo = ["#Frau", "#Neffe"],
    three = ["#Frau", "#tabakladenTUERi", "#Schreiner", "#ShuiTa"], //Frau öffnet Tür für Schreiner und ShuiTa
    four = ["#Neffe", "#Mann", '#Schwaegerin', "#Großvater", "#Junge", "#Bruder"], //alle Wachen auf
    five = ["#ShuiTa", "#kerze"], //ShuiTa geht zu lampe und löscht diese
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


//Functions
//Trigger all neccessary events at that point in the story
function storyline(currentTarget, currentEvent) {
    'use strict';
    console.log("Target= " + currentTarget);
    if (window[currentEvent].length != 0) {
        for (j = 0; j < window[currentEvent].length; j++) {
            fireAt = window[currentEvent][j];
            console.log("Fire at= " + fireAt);
            complexChanges(currentEvent, fireAt);
            try {
                document.querySelector(fireAt).emit(currentEvent);
            } catch (err) {
                console.log(err + " - while firing at  " + fireAt);
            }
        }
        return 1;
    } else {
        return 0;
    }
}

//look for more complex changes on entities (e.g. light)
function complexChanges(currentTarget, fireAt) {
    'use strict';
    if (currentTarget == "one" && fireAt == "#kerze") {
        $(fireAt).append('<a-entity light="type:point;intensity:0.75;distance:50;decay:2" position="0 28.25 -15.58" rotation="0 0 0" scale="1 1 1" visible="true"><a-animation attribute="light.decay" from="1" to="1.5" repeat="indefinite" direction="alternate" end="six"></a-animation></a-entity>');
    }
    if (currentTarget == "two") {
        for (j = 0; j < one.length; j++) { 
            $(one[j]).removeAttr('sound');
            console.log("Done.Muted.");
        }
    }
}

//starts narration when .play was found
function playableFound(currentTarget) {
    'use strict';
    if (currentTarget.search(at) != -1) {
        currentTarget = "#" + at;
        if ((storyline(currentTarget, at)) == 1) {
            at = eventArr[++i];
        }
    }
    console.log("Next= " + at);
}

//remove color from all persons
function shutUp() {
    'use strict';
    for (i = 0; i < persons.length; i++) {
        document.querySelector(persons[i]).removeAttribute("color");
    }
}

//Event Methods

//$(".clickable").each(function () {
//    'use strict';
//    $(this).attr('event-animate', 'target:#cursor; event:clickableFound');
//    $(this).attr('event-animate', 'target:#cursor; event:clickableClick');
//});

//Cursor found .clickable
$(".clickable").on('fusing', function () {
    'use strict';
    if (at == "two") {
        currentTarget = $(this).closest("a-entity").attr("class");
        playableFound(currentTarget);

    } else {
        currentTarget = '#' + $(this).closest("a-entity").attr('id');
        console.log(currentTarget);

        trigggerEvent = "clickableFound";
        document.querySelector("#cursor").emit(trigggerEvent);
        document.querySelector(currentTarget).emit(trigggerEvent);
        lastClickableFused = currentTarget;
    }


});

//Cursor triggers click on .clickable
$(".clickable").on('click', function () {
    'use strict';
    currentTarget = '#' + $(this).closest("a-entity").attr('id');
    trigggerEvent = "clickableClick";
    nowClicked = currentTarget;
    if (nowClicked == lastClickableFused) {
        document.querySelector("#cursor").emit(trigggerEvent);
        document.querySelector(currentTarget).emit(trigggerEvent);
    }
});

//Cursor is not on .clickable
$("a-entity").on('fusing', function () {
    'use strict';
    currentTarget = "#cursor";
    trigggerEvent = "notClickable";
    document.querySelector(currentTarget).emit(trigggerEvent);
});

//trigger storyline after start was iniciated
$(".play").on('fusing', function () {
    'use strict';
    currentTarget = $(this).closest("a-entity").attr("class");
    playableFound(currentTarget);
});


//Event Listener
//start storyline
document.querySelector('a-scene').addEventListener('loaded', function () {
    'use strict';
    var el = document.querySelectorAll('.one');
    for (i = 0; i < el.length; i++) {
        el[i].setAttribute('material', 'color', 'black');
    }

    setTimeout(function () {
        $("#giveMeTime").remove();

        currentTarget = "#one";
        at = "one";
        if ((storyline(currentTarget, at)) == 1) {
            at = eventArr[++i];
        }
    }, 2500);
});
