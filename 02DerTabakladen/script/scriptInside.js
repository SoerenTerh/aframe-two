//Variables
var at = 0;
var trigggerEvent = 0;
var i = 0, j = 0, l = 0;
var currentTarget = 0;
var fireAt = 0;
var fireAtString = 0;
var lastClickableFused = 0;
var nowClicked = 0;
var next = true;


//Arrays
var eventArr = ["one", "two", "twoTalk", "twoTalk2", "three", "four", "fourTalk", "fourTalk2", "five", "fiveAll", "fiveTalk2", "six", "sixTalk", "seven", "sevenTalk",
                "sOneTalk", "sTwoTalk", "sThreeTalk", "sFourStart",
                "sFourTalk1", "sFourTalk2", "sFourTalk3", "sFour_P2", "sFour_P3", "sFour_P4", "sFiveTalk", "sFiveTalk2", "sFive_P1", "sFive_P2", "sFiveTalk3", "sFive_P3",
                "sFive_P4", "sSixTalk1", "sSixTalk2", "sSixTalk3", "sSixTalk4", "sSeven_P1", "sSeven_P2",
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


var personColors = ["#4D4D4D",
                    "#A6A6A6",
                    "#404040",

                    "#737373",
                    "#595959",

                    "#8C8C8C",
                    "#D9D9D9",

                    "#BFBFBF",

                    "#262626",
                    "#CCCCCC",
                    "#FFF",
                    "#FFF"];


var one = ["#kerzeFlamme", "#Frau", "#Neffe", "#Mann", '#Schwaegerin', "#Großvater", "#Junge", "#Bruder"], //alle schlafen + Lampe brennt
    two = ["#tabakladenTUERi",  "#ShuiTa", "#Schreiner", "#Frau", "#Neffe", "#Mann", '#Schwaegerin', "#Großvater", "#Junge", "#Bruder", "#Nichte"], //ShuiTa Klopft (schnarchen stoppt)
    twoTalk = ["#Frau", "#Neffe"],
    twoTalk2 = ["#Frau"], //Frau lacht
    three = ["#sockelFrau", "#Frau", "#tabakladenTUERi", "#Schreiner", "#ShuiTa"], //Frau öffnet Tür für Schreiner und ShuiTa
    four = ["#ShuiTa", "#Schreiner"], //ShuiTa und Schreiner treten ein
    fourTalk = ["#ShuiTa", "#Frau"],
    fourTalk2 = ["#ShuiTa"],
    five = ["#Neffe", "#Mann", '#Schwaegerin', "#Großvater", "#Junge", "#Bruder", "#Nichte"], //alle Wachen auf
    fiveAll = ["#Neffe", "#Mann", '#Schwaegerin', "#Großvater", "#Junge", "#Bruder", "#Nichte"],
    fiveTalk2 = ["#Neffe"],

    five = ["#Neffe", "#Mann", '#Schwaegerin', "#Großvater", "#Junge", "#Bruder"], //alle Wachen auf
    six = ["#ShuiTa", "#kerzeFlamme"], //ShuiTa geht zu lampe und löscht diese
    sixTalk = ["#ShuiTa",  "#Mann"],
    seven = ["#ShuiTa"], //ShuiTa Schüttelt Kopf
    sevenTalk = ["#Mann", '#Schwaegerin', "#ShuiTa"],
    //    eight = [],
    //    nine = [],
    //    ten = [],
    //    eleven = [],
    //    twelve = [],
    //    thirteen = [],
    //    fourteen = [],
    //    fivteen = [],
    //    sixteen = [],
    //    seventeen = [],
    //    eighteen = [],
    //    nineteen = [],
    //    twenty = [],

    /*sOne = ["#Mann", "#Frau", "#Neffe",  '#Schwaegerin', "#Großvater", "#Junge", "#Bruder"], //Mann organisiert alle (du und du und du....)
    sTwo = ["#Junge", "#tabakladenTUERi", "#Frau", "#Neffe", "#Bruder", '#Schwaegerin', "#Alte", "#Großvater"], //Junge nickt und verschindet aus laden (Richtung Bäckerei); alle ziehen sich an
    sThree = ["#Neffe", "#Bruder", '#Schwaegerin', "#Nichte"], //Neffe, Bruder, Schwaegerin & Nichte verlassen Laden
    sFour = ["#ShuiTa", "#bett"], //ShuiTa räumt auf
    */

    sOneTalk = ["#Frau"],
    sTwoTalk = ["#Neffe"],
    sThreeTalk = ["#Mann"],

    sFourStart = ["#Mann"], // Rotation vor
    sFourTalk1 = ["#Mann"],
    sFourTalk2 = ["#Schwaegerin"],
    sFourTalk3 = ["#Mann"],
    sFour_P2 = ["#Mann", "#Junge"], // Rotation zurück - Junge Position Richtung Türe
    sFour_P3 = ["#Junge", "#tabakladenTUERi"], // Junge drehen vor die Türe - Türe auf
    sFour_P4 = ["#ContainerJunge"], // Junge ausblenden

    sFiveTalk = ["#ShuiTa"],
    sFiveTalk2 = ["#Neffe"],
    sFive_P1 = ["#Neffe", "#Bruder", "#Schwaegerin", "#Nichte"], // Bewegen an Ladentisch vorbei
    sFive_P2 = ["#Neffe", "#Bruder", "#Schwaegerin", "#Nichte"], // Bewegen Richtung Türe vorbei
    sFiveTalk3 = ["#Schwaegerin"],
    sFive_P3 = ["#Neffe", "#Bruder", "#Schwaegerin", "#Nichte", "#tabakladenTUERi"], // Drehen vor die Türe - Türe auf
    sFive_P4 = ["#Neffe", "#Bruder", "#Schwaegerin", "#Nichte"], // Figuren ausblenden

    sSixTalk1 = ["#ShuiTa"], // Shui Ta zum Schreiner drehen
    sSixTalk2 = ["#Mann"],
    sSixTalk3 = ["#ShuiTa"],
    sSixTalk4 = ["#ShuiTa"],

    sSeven_P1 = ["#Mann", "#bett", "bett-2", "bett-3", "bett-4", "bett-5", "bett-6", "bett-7", "bett-8"], // Mann räumt Schlafplätze vom Boden auf
    sSeven_P2 = ["#Mann", "#bett", "bett-2", "bett-3", "bett-4", "bett-5", "bett-6", "bett-7", "bett-8"], // Mann legt Schlafplätze auf dem Regal ab

    vOne = ["#Schreiner"], // Schreiner redet
    vTwo = ["#ShuiTa", "#Rechnung"], // zieht Rechnung aus Tasche
    vThree = ["#Schreiner"], // redet
    vFour = ["#ShuiTa"],
    vFive = ["#Schreiner"],
    vSix = ["#ShuiTa"],
    vSeven = ["#Mann"], // lacht
    vEight = ["#Schreiner"],
    vNine = ["#ShuiTa"],
    vTen = ["#Schreiner"],
    vEleven = ["#ShuiTa"],
    vTwelve = ["#Frau"],
    vThirteen = ["#Schreiner"],
    vFourteen = ["#ShuiTa"],
    vFifteen = ["#Schreiner", "#stellage_ohne-rechnung"], // nimmt Stellage und trägt zur Tür
    vSixteen = ["#Schreiner"], // redet
    vSeventeen = ["#ShuiTa"], // redet zu Mann
    vEighteen = ["#Mann", "#stellage_ohne-rechnung-2"], // trägt 2. Stellage zur Tür
    vNineteen = ["#Schreiner"],
    vTwenty = ["#ShuiTa"],
    vTwentyone = ["#Schreiner"],
    vTwentytwo = ["#ShuiTag", "#Mann", "#stellage_ohne-rechnung-2", "tabakladenTUERi"], // Mann trägt Stellage aus Tür raus
    vTwentythree = ["#Schreiner"];


// Melanie: bis Shui Ta "nichts mehr für Sie tun kann."
// Sören: Die Frau erschüttert: "Und wir hielten Sie für einen guten Menschen!" bis Shui Ta Er macht sich daran, den Laden aufzuräumen
// Vera: Der Schreiner: "Ich sehe, dass Sie sich bemühen" bis "Die Bretter sind verschnitten, Herr!"
// Cata: ab Shui Ta: "Eben. Darum biete ich Ihnen auch nur 20 Silberdollar"

//Functions
//change color back to normal
function getColorOfPerson(fireAt) {
    'use strict';
    for (j = 0; j < persons.length; j++) {
        if (persons[j] === fireAt) {
            return personColors[j];
        }
    }
}

//Trigger all neccessary events at that point in the story
function storyline(currentTarget, currentEvent) {
    'use strict';
    console.log("Target= " + currentTarget);
    if (window[currentEvent].length !== 0) {
        var k = 0,
            animated = 0,
            narrate = 0;
        next = false;
        (function startNext() {

            function wait(animated) {
                document.querySelector(animated).addEventListener('animationend', function () {
                    console.log("--------------------Animation End--------------------");
                    startNext();
                });
            }
            function wait2(narrate) {
                document.querySelector(narrate).addEventListener('sound-ended', function () {
                    document.querySelector('#sockel' + fireAtString).setAttribute('material', 'color', 'black');
                    document.querySelector(fireAt).setAttribute('material', 'color', getColorOfPerson(fireAt)); //Test
                    console.log("--------------------Narration End--------------------");
                    startNext();
                });
            }
            if (k <  window[currentEvent].length) {
                next = false;
                fireAt = window[currentEvent][k];
                fireAtString = fireAt.slice(1);
                console.log("Fire at= " + fireAt);


                if (currentEvent.search("Talk") !== -1) {
                    try {
                        document.querySelector(fireAt + ' > a-sound[on=\"' + currentEvent + '\"]').emit(currentEvent);
                    } catch (err) {
                        console.log(err + " - while firing at  " + fireAt);
                    }

                    k++;
                    try {

                        if (document.querySelector(fireAt + ' > a-sound[on=\"' + currentEvent + '\"]') !== null) {
                            console.log(document.querySelector(fireAt + ' > a-sound[on=\"' + currentEvent + '\"]'));
                            narrate = "#" + document.querySelector(fireAt + ' > a-sound[on=\"' + currentEvent + '\"]').id;
                            console.log(narrate);
                        }


                        if (narrate !== null) {
                            document.querySelector('#sockel' + fireAtString).setAttribute('material', 'color', 'white');
                            document.querySelector(fireAt).setAttribute('material', 'color', 'turquoise'); //Test
                            wait2(narrate);
                        } else {
                            startNext();
                        }

                    } catch (err6) {
                        console.log("No narration at: " + currentEvent + "-->" + fireAt);
                        startNext();
                    }



                } else {
                    try {
                        document.querySelector(fireAt).emit(currentEvent);
                    } catch (err8) {
                        console.log(err8 + " - while firing at  " + fireAt);
                    }
                    k++;
                    try {
                        if (document.querySelector(fireAt + ' > a-animation[begin=\"' + currentEvent + '\"]') !== null) {
                            console.log(document.querySelector(fireAt + ' > a-animation[begin=\"' + currentEvent + '\"]'));
                            animated = "#" + document.querySelector(fireAt + ' > a-animation[begin=\"' + currentEvent + '\"]').id;
                            console.log(animated);
                        }
                        if (currentEvent.search("All") !== -1) {
                            document.querySelector('#sockel' + fireAtString).setAttribute('material', 'color', 'white');
                            document.querySelector(fireAt).setAttribute('material', 'color', 'turquoise'); //Test
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
            } else {
                next = true;
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
    if (next === true) {
        if (currentTarget.search(at) !== -1) {
            currentTarget = "#" + at;
            if ((storyline(currentTarget, at)) === 1) {
                at = eventArr[++i];
            }
        }
        console.log("Next= " + at);
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


//auto-enter VR (https://github.com/aframevr/aframe/issues/1473)
window.addEventListener('load', function () {
    'use strict';
    var scene = document.querySelector('a-scene');
    if (scene.hasLoaded) {
        scene.enterVR();
        //    } else {
        //        el.addEventListener('loaded', function () {
        //            scene.enterVR();
        //        });
    }
});

//Event Listener
//start storyline
document.querySelector('a-scene').addEventListener('loaded', function () {
    'use strict';
    setTimeout(function () {
        $("#giveMeTime").remove();

        currentTarget = "#one";
        at = "one";
        if ((storyline(currentTarget, at)) === 1) {
            at = eventArr[++i];

        }
    }, 2500);
});
