var at = 0;
var trigggerEvent = 0;
var i = 0, j = 0;
var currentTarget;
var fireAt;
var lastClickableFused;
var nowClicked;
//
//$(".clickable").each(function () {
//    'use strict';
//    $(this).attr('event-animate', 'target:#cursor; event:clickableFound');
//    $(this).attr('event-animate', 'target:#cursor; event:clickableClick');
//});

$(".clickable").on('fusing', function () {
    'use strict';
    currentTarget = '#' + $(this).closest("a-entity").attr('id');
    console.log(currentTarget);
    trigggerEvent = "clickableFound";
    document.querySelector("#cursor").emit(trigggerEvent);
    document.querySelector(currentTarget).emit(trigggerEvent);
    lastClickableFused = currentTarget;

});
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

$("a-entity").on('fusing', function () {
    'use strict';
    currentTarget = "#cursor";
    trigggerEvent = "notClickable";
    document.querySelector(currentTarget).emit(trigggerEvent);
});




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




function shutUp() {
    'use strict';
    for (i = 0; i < persons.length; i++) {
        document.querySelector(persons[i]).removeAttribute("color");
    }
}


var one = ["#kerze", "#Frau", "#Neffe", "#Mann", '#Schwaegerin', "#Großvater", "#Junge", "#Bruder"], //alle schlafen + Lampe brennt
    two = ["#tabakladenTUERi", "#ShuiTa", "#figur-2"], //ShuiTa Klopft
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

//Frau
//Neffe
//Mann

//Schwaegerin
//Bruder

//Großvater
//Junge

//Nichte

//ShuiTa
//Schreiner
//Polizist
//Hausbesitzerin

//Ich glaube, die Alte ist zuviel, oder?
//Also, als Erstes kommt das ältere Ehepaar, mit dem Neffen.
//Dann kommen Mann und Frau (die schwangere und der Bruder),
//dann der Greis mit dem Jungen. Als letztes die Nichte.




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
//                setTimeout(function () {
                document.querySelector(fireAt).emit(currentEvent);
//                }, 2500);

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
}

//start storyline
document.querySelector('a-scene').addEventListener('loaded', function () {
    'use strict';

    setTimeout(function () {
        $("#giveMeTime").remove();

        currentTarget = "#one";
        at = "one";
        if ((storyline(currentTarget, at)) == 1) {
            at = eventArr[++i];
        }
    }, 2500);


});

//trigger storyline after start was iniciated
$(".play").on('fusing', function () {
    'use strict';
    currentTarget = $(this).closest("a-entity").attr("class");
    if (currentTarget.search(at) != -1) {
        currentTarget = "#" + at;
        if ((storyline(currentTarget, at)) == 1) {
            at = eventArr[++i];
        }
    }
    console.log("Next= " + at);
});
0
