$(".clickable").each(function () {
    'use strict';
    $(this).attr('event-animate', 'target:#cursor; event:clickableFound');
    $(this).attr('event-animate', 'target:#cursor; event:clickableClick');
});

var eventArr = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];

var persons = ["#Frau",
    "#Neffe",
    "#Mann",

    "#Schwägerin",
    "#Bruder",

    "#Großvater",
    "#Junge",

    "#Nichte",

    "#ShuiTa",
    "#Schreiner",
    "#Polizist",
    "#Hausbesitzerin"];

var at = eventArr[0];
var i = 0, j = 0;
var currentTarget;
var fireAt;


function shutUp() {
    for (i = 0; i < persons.length; i++) {
        document.querySelector(person[i]).removeAttribute("material");
    }
}


var one = ["#kerze", "#Frau"], //alle schlafen + Lampe brennt
//    , "#Neffe", "#Mann", '#Schwägerin', "#Großvater", "#Junge", "#Bruder"
    two = ["#tabakladenTUERi", "#ShuiTa"], //ShuiTa Klopft
    talkTwo = ["#Frau", "#Neffe"],
    tree = ["#Frau", "#tabakladenTUERi", "#Schreiner", "#ShuiTa"], //Frau öffnet Tür für Schreiner und ShuiTa
    four = ["#Neffe", "#Mann", '#Schwägerin', "#Großvater", "#Junge", "#Bruder"], //alle Wachen auf
    five = ["#ShuiTa", "#kerze"], //ShuiTa geht zu lampe und löscht diese
    six = ["#ShuiTa"], //ShuiTa Schüttelt Kopf
    seven = ["#Mann", "#Frau", "#Neffe",  '#Schwägerin', "#Großvater", "#Junge", "#Bruder"], //Mann organisiert alle (du und du und du....)
    eight = ["#Junge", "#tabakladenTUERi", "#Frau", "#Neffe", "#Bruder", '#Schwägerin', "#Alte", "#Großvater"], //Junge nickt und verschindet aus laden (Richtung Bäckerei); alle ziehen sich an
    nine = ["#Neffe", "#Bruder", '#Schwägerin', "#Nichte"], //Neffe, Bruder, Schwägerin & Nichte verlassen Laden
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

//Schwägerin
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
                document.querySelector(fireAt).emit(currentEvent);

                if(fireAt == "kerze"){
                    var test = $('#' + fireAt).attr("sound",{
                        autoplay: true
                    });
                }
            } catch (err) {

//                Funktioniert leider noch nicht
//                document.querySelector('#cursor').attr('text="text:error"')
                document.querySelector('a-scene').append('<a-entity bmfont-text="text: Hello world"></a-entity>');
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
    $("#giveMeTime").remove();

    currentTarget = "#one";
    at = "one";
    if ((storyline(currentTarget, at)) == 1) {
        at = eventArr[++i];
    }
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
