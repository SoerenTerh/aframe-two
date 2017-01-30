//Variables
var at = 0;
var trigggerEvent = 0;
var i = 0, j = 0;
var currentTarget;
var fireAt;
var lastClickableFused;
var nowClicked;


//Arrays
var eventArr = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen",
                "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "sOne_P1", "sOne_P2", "sOne_P3",
                "sOne_P4", "sTwo_P1", "sTwo_P2", "sTwo_P3", "sTwo_P4", "sThree", "sFour_P1", "sFour_P2",
                "vOne", "vTwo", "vThree", "vFour", "vFive", "vSix", "vSeven", "vEight", "vNine", "vTen", "vEleven",
                "vTwelve", "vThirteen", "vFourteen", "vFifteen", "vSixteen", "vSeventeen", "vEighteen", "vNineteen",
                "vTwenty", "vTwentyone", "vTwentytwo", "vTwentythree"];
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
    seven = [],
    eight = [],
    nine = [],
    ten = [],
    eleven = [],
    twelve = [],
    thirteen = [],
    fourteen = [],
    fivteen = [],
    sixteen = [],
    seventeen = [],
    eighteen = [],
    nineteen = [],
    twenty = [],

    /*sOne = ["#Mann", "#Frau", "#Neffe",  '#Schwaegerin', "#Großvater", "#Junge", "#Bruder"], //Mann organisiert alle (du und du und du....)
    sTwo = ["#Junge", "#tabakladenTUERi", "#Frau", "#Neffe", "#Bruder", '#Schwaegerin', "#Alte", "#Großvater"], //Junge nickt und verschindet aus laden (Richtung Bäckerei); alle ziehen sich an
    sThree = ["#Neffe", "#Bruder", '#Schwaegerin', "#Nichte"], //Neffe, Bruder, Schwaegerin & Nichte verlassen Laden
    sFour = ["#ShuiTa", "#bett"], //ShuiTa räumt auf
    */

    sOne_P1 = ["#Mann"], // Rotation vor
    sOne_P2 = ["#Mann", "#Junge"], // Rotation zurück - Junge Position Richtung Türe
    sOne_P3 = ["#Junge", "#tabakladenTUERi"], // Junge drehen vor die Türe - Türe auf
    sOne_P4 = ["#ContainerJunge"], // Junge ausblenden

    sTwo_P1 = ["#Neffe", "#Bruder", "#Schwaegerin", "#Nichte"], // Bewegen an Ladentisch vorbei
    sTwo_P2 = ["#Neffe", "#Bruder", "#Schwaegerin", "#Nichte"], // Bewegen Richtung Türe vorbei
    sTwo_P3 = ["#Neffe", "#Bruder", "#Schwaegerin", "#Nichte", "#tabakladenTUERi"], // Drehen vor die Türe - Türe auf
    sTwo_P4 = ["#Neffe", "#Bruder", "#Schwaegerin", "#Nichte"], // Figuren ausblenden

    sThree = ["#ShuiTa"], // Shui Ta zum Schreiner drehen

    sFour_P1 = ["#Mann", "#bett", "bett-2", "bett-3", "bett-4", "bett-5", "bett-6", "bett-7", "bett-8"], // Mann räumt Schlafplätze vom Boden auf
    sFour_P2 = ["#Mann", "#bett", "bett-2", "bett-3", "bett-4", "bett-5", "bett-6", "bett-7", "bett-8"], // Mann legt Schlafplätze auf dem Regal ab



    vOne = ["#Schreiner"]; // Schreiner redet
    vTwo = ["#ShuiTa", "#Rechnung"]; // zieht Rechnung aus Tasche
    vThree = ["#Schreiner"]; // redet
    vFour = ["#ShuiTa"];
    vFive = ["#Schreiner"];
    vSix = ["#ShuiTa"];
    vSeven = ["#Mann"]; // lacht
    vEight = ["#Schreiner"];
    vNine = ["#ShuiTa"];
    vTen = ["#Schreiner"];
    vEleven = ["#ShuiTa"];
    vTwelve = ["#Frau"];
    vThirteen = ["#Schreiner"];
    vFourteen = ["#ShuiTa"];
    vFifteen = ["#Schreiner", "#stellage_ohne-rechnung"]; // nimmt Stellage und trägt zur Tür
    vSixteen = ["#Schreiner"]; // redet
    vSeventeen = ["#ShuiTa"]; // redet zu Mann
    vEighteen = ["#Mann", "#stellage_ohne-rechnung-2"]; // trägt 2. Stellage zur Tür
    vNineteen = ["#Schreiner"];
    vTwenty = ["#ShuiTa"];
    vTwentyone = ["#Schreiner"];
    vTwentytwo = ["#ShuiTag", "#Mann", "#stellage_ohne-rechnung-2", "tabakladenTUERi"]; // Mann trägt Stellage aus Tür raus
    vTwentythree = ["#Schreiner"];


// Melanie: bis Shui Ta "nichts mehr für Sie tun kann."
// Sören: Die Frau erschüttert: "Und wir hielten Sie für einen guten Menschen!" bis Shui Ta Er macht sich daran, den Laden aufzuräumen
// Vera: Der Schreiner: "Ich sehe, dass Sie sich bemühen" bis "Die Bretter sind verschnitten, Herr!"
// Cata: ab Shui Ta: "Eben. Darum biete ich Ihnen auch nur 20 Silberdollar"

//Functions
//Trigger all neccessary events at that point in the story
function storyline(currentTarget, currentEvent) {
    'use strict';
    console.log("Target= " + currentTarget);
    if (window[currentEvent].length !== 0) {
        var k = 0,
            animated = 0;
        (function startNext() {
            function wait(animated) {
                document.querySelector(animated).addEventListener('animationend', function () {
                    console.log("--------------------Animation End--------------------");
                    startNext();
                });

            }
            if (k <  window[currentEvent].length) {
                fireAt = window[currentEvent][k];
                console.log("Fire at= " + fireAt);
                try {
                    document.querySelector(fireAt).emit(currentEvent);
                } catch (err) {
                    console.log(err + " - while firing at  " + fireAt);
                }
                k++;
                try {
                    if (document.querySelector(fireAt + ' > a-animation[begin=\"' + currentEvent + '\"]') !== null) {
                        console.log(document.querySelector(fireAt + ' > a-animation[begin=\"' + currentEvent + '\"]'));
                        animated = "#" + document.querySelector(fireAt + ' > a-animation[begin=\"' + currentEvent + '\"]').id;
                        console.log(animated);
                    }


                    if (document.querySelector(fireAt + ' > a-animation[class="wait"]') !== null) {

                        wait(animated);
                    } else {
                        startNext();
                    }

                } catch (err2) {
                    console.log("No animation at: " + currentEvent + "-->" + fireAt);
                    startNext();
                }
            }
        }());


        return 1;
    } else {
        return 0;
    }
}


//starts narration when .play was found
function playableFound(currentTarget) {
    'use strict';
    if (currentTarget.search(at) !== -1) {
        currentTarget = "#" + at;
        if ((storyline(currentTarget, at)) === 1) {
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
    if (at === "two" || at === "three") {
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
    //    var el = document.querySelectorAll('.one');
    //    for (i = 0; i < el.length; i++) {
    //        el[i].setAttribute('material', 'color', 'black');
    //    }

    setTimeout(function () {
        $("#giveMeTime").remove();

        currentTarget = "#one";
        at = "one";
        if ((storyline(currentTarget, at)) === 1) {
            at = eventArr[++i];
        }
    }, 2500);
});
