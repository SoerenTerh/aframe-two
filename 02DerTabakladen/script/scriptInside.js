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
var timeoutId = null;

//Arrays
var eventArr = ["one", "two", "twoTalk", "twoTalk2",
                "three", "four", // drin lassen für Schreiner und Shui Ta im Raum
                "fourTalk", "fourTalk2", "five", "fiveAll", "fiveTalk2", "six", "sixTalk", "seven", "sevenTalk",
                "sOneTalk", "sTwoTalk", "sThreeTalk", "sFourTalkStart",
                "sFourTalk1", "sFourTalk2",
                "sFourACC1", "sFourACC2", "sFourACC3", "sFourACC4",
                "sFourP3begin", "sFour_P3", "sFiveTalk", "sFiveTalk2", "sFive_P1", "sFive_P2", "sFive_P3", "sFive_P3no",
                /*"sFive_P3s", "sFive_P3end", "sFive_P3end2", "sFiveTalk3",*/
                "sSixTalk1", "sSixTalk2", "sSixTalk3", "sSeven_P1", "sSeven_P2rot", "sSeven_PickUp2", "sSeven_P2end", "sEight",
                "vOneTalk",
                "vTwo",
                "vTwoTalk", "vFourTalk", "vFive", "vSixTalk", "vNineTalk", "vElevenTalk",
                "vFifteen", "vFourteenTalk", "vSixteen",
                "vSixteenTalk",
                "vEighteen", "vEighteen2",
                "vEighteen3",
                "vEighteenTalk",
                "v21Talk", "v21", "v21_2", "v21_3",
                "v22Talk", "v23Talk", "v25Talk", "v27Talk", "v28Talk",
                "v29Talk", "v30Talk", "v31Talk",
                //"v32",
                "v33Talk",
                "v34Talk", "v36Talk", "v37Talk", "v38Talk", "v39Talk",
                "v40Talk", "v40Talk2", "v40Talk3", "v41Talk", "v42Talk", "v43Talk",
                "cOneTalk", "cTwoTalk", "cThree", "cFourTalk", "cFive", "cSixAll", "cSeven", "cSevenTalk", "cEight", "cNine"
               ];

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

//ersteSeite
var one = ["#kerzeFlamme", "#Frau", "#Neffe", "#Mann", '#Schwaegerin', "#Großvater", "#Junge", "#Bruder"], //alle schlafen + Lampe brennt
    two = ["#tabakladenTUERi",  "#ShuiTa", "#Schreiner", "#Frau", "#Neffe", "#Mann", '#Schwaegerin', "#Großvater", "#Junge", "#Bruder", "#Nichte"], //ShuiTa Klopft (schnarchen stoppt)
    twoTalk = ["#Frau", "#Neffe"],
    twoTalk2 = ["#Frau"], //Frau lacht
    three = ["#sockelFrau", "#containerFrau", "#tabakladenTUERi"], //Frau öffnet Tür für Schreiner und ShuiTa
    four = ["#containerShuiTa", "#containerSchreiner", "#tabakladenTUERi"], //ShuiTa und Schreiner treten ein
    fourTalk = ["#ShuiTa", "#Frau"],
    fourTalk2 = ["#ShuiTa"],
    five = ["#sockelNeffe", "#containerNeffe",
            "#sockelMann", "#containerMann",
            '#sockelSchwaegerin', '#containerSchwaegerin',
            "#sockelGroßvater", "#containerGroßvater",
            "#sockelJunge", "#containerJunge",
            "#sockelBruder", "#containerBruder",
            "#sockelNichte", "#containerNichte"], //alle Wachen auf
    fiveAll = ["#Neffe", "#Mann", '#Schwaegerin', "#Großvater", "#Junge", "#Bruder", "#Nichte"],
    fiveTalk2 = ["#Neffe"],

    six = ["#containerShuiTa", "#kerzeFlamme"], //ShuiTa geht zu lampe und löscht diese
    sixTalk = ["#ShuiTa",  "#Mann"],
    seven = ["#containerShuiTa"], //ShuiTa Schüttelt Kopf
    sevenTalk = ["#Mann", '#Schwaegerin', "#ShuiTa"],
    //  eight = [],
    //  nine = [],
    //  ten = [],


    /*sOne = ["#Mann", "#Frau", "#Neffe",  '#Schwaegerin', "#Großvater", "#Junge", "#Bruder"], //Mann organisiert alle (du und du und du....)
    sTwo = ["#Junge", "#tabakladenTUERi", "#Frau", "#Neffe", "#Bruder", '#Schwaegerin', "#Alte", "#Großvater"], //Junge nickt und verschindet aus laden (Richtung Bäckerei); alle ziehen sich an
    sThree = ["#Neffe", "#Bruder", '#Schwaegerin', "#Nichte"], //Neffe, Bruder, Schwaegerin & Nichte verlassen Laden
    sFour = ["#ShuiTa", "#bett"], //ShuiTa räumt auf
    */

    sOneTalk = ["#Frau"],
    sTwoTalk = ["#Neffe"],
    sThreeTalk = ["#Mann"],

    sFourTalkStart = ["#Mann"],
    sFourTalk1 = ["#Mann", "#Schwaegerin"],
    sFourTalk2 = ["#Mann"],
    /*sFourACC = ["#accMann, #accNeffe, #accSchwaegerin", "#accGroßvater", "#accFrau"],*/

    sFourACC1 = ["#accMann"],
    sFourACC2 = ["#accNeffe"],
    sFourACC3 = ["#Frau"],
    sFourACC4 = ["#Großvater"],

    sFourP3begin = ["#Junge", "#tabakladenTUERi"],
    sFour_P3 = [ "#Junge", "#tabakladenTUERi"],

    sFiveTalk = ["#ShuiTa"],
    sFiveTalk2 = ["#Neffe"],
    sFive_P1 = ["#Neffe", "#Bruder"], // Bewegen an Ladentisch vorbei
    sFive_P2 = ["#Neffe", "#Bruder", "#tabakladenTUERi"], // Bewegen Richtung Türe vorbei
    sFive_P3 = ["#Neffe", "#Bruder", "#Nichte"],
    sFive_P3no = ["#Nichte", "#tabakladenTUERi"],
    //sFive_P3s = ["#Schwaegerin"],
    //sFive_P3end = ["#Schwaegerin"],
    //sFive_P3end2 = ["#Schwaegerin"],
    //sFiveTalk3 = ["#Schwaegerin"],
    // Drehen vor die Türe - Türe auf

    sSixTalk1 = ["#ShuiTa", "#Mann"],
    sSixTalk2 = ["#ShuiTa"],
    sSixTalk3 = ["#ShuiTa"],

    sSeven_P1 = ["#ShuiTa", "#bett", "#bett-2", "#bett-6"], // Mann räumt Schlafplätze vom Boden auf

    sSeven_P2rot = ["#ShuiTa"],
    sSeven_PickUp2 = ["#ShuiTa", "#bett-3", "#bett-4", "#bett-5"],
    sSeven_P2end = ["#ShuiTa"], // Mann legt Schlafplätze auf dem Regal ab
    sEight = ["#bett", "#bett-2", "#bett-3", "#bett-4", "#bett-5", "#bett-6"],


    vOneTalk = ["#Schreiner"], // Schreiner redet
    vTwo = ["#Rechnung"], // Rechnung fliegt zu ShuiTa
    vTwoTalk = ["#ShuiTa", "#Schreiner"], // zu viel, ernähren
    vFourTalk = ["#ShuiTa", "#Schreiner"], // wie viele Kinder
    vFive = ["#Rechnung"], // Rechnung wieder weg
    vSixTalk = ["#ShuiTa", "#Mann", "#Schreiner" ], // 20 Dollar, Nussbaum
    vNineTalk = ["#ShuiTa", "#Schreiner"], // dann weg, was
    vElevenTalk = ["#ShuiTa", "#Frau", "#Schreiner"], // zu teuer, gut gegeben, ShenTe soll kommen
    vFifteen = ["#containerSchreiner"], // geht zu Stellage
    vFourteenTalk = ["#ShuiTa"], // Sie ist ruiniert
    vSixteen = ["#containerSchreiner", "#stellage_ohne-rechnung"], // nimmt Stellage und trägt zur Tür
    vSixteenTalk = ["#Schreiner", "#ShuiTa"], // auf dem Boden, Mann helfen
    vEighteen = ["#Mann"], // umdrehen
    vEighteen2 = ["#Mann"], // zu Stellage
    vEighteen3 = ["#Mann", "#stellage_ohne-rechnung-2"], // trägt 2. Stellage zur Tür
    vEighteenTalk = ["#Mann", "#Schreiner", "#ShuiTa"], // hinaus, du Hund, 20 Dollar
    v21Talk = ["#Schreiner"], // 100
    v21 = [ "#Mann", "tabakladenTUERi"], // Mann trägt Stellage aus Tür raus
    v21_2 = ["#Mann", "#stellage_ohne-rechnung"],
    v21_3 = [ "#Mann", "tabakladenTUERi"], // Mann kommt wieder rein
    v22Talk = ["#Schreiner", "#ShuiTa", "#Frau"], // nach Maß, 20, quietschen
    v23Talk = ["#Schreiner", "#ShuiTa"], // legt Münzen auf Tisch
    //v24 = ["#ShuiTa", "#Mann"], // legt Münzen auf Tisch, Mann trägt 1. Stellage zurück
    v25Talk = ["#Mann"], // genug für verschnittene Bretter
    //v26 = ["#Mann"], // trägt 2. Stellage zurück
    v27Talk = ["#Schreiner"], // zu betrinken
    v28 = ["#Schreiner"], // ab
    v28Talk = ["#Mann", "#Frau", "#ShuiTa"], // amüsieren, ShuiTa = raus
    v29Talk = ["#Mann", "#ShuiTa"], // wir? Diebe
    v30Talk = ["#Mann", "#ShuiTa"], // wo Junge?
    v31Talk = ["#ShuiTa"], // Wie ihr wollt
    v32 = ["#ShuiTa", "#Polizist"], // Shui zur Tür, Polizist taucht auf
    v32Talk = ["#ShuiTa", "#Polizist"], // Beamter Viertel? Jawohl
    v33Talk = ["#ShuiTa"], // "Shui Ta"
    v34Talk = ["#ShuiTa", "#Polizist"], // schönes Wetter, bisschen warm ENDE VERA


    //fünfteSeite
    m5zeroTalk = ["#Mann"], //mann14

    m5one = ["#Mann"], //Zeichen an Shui Ta (unbeachtet bei diesem)
    m5oneTalk = ["#ShuiTa", "#Polizist"], //shui27, polizist3

    m5three = ["#Frau", "#Mann"], //Frau zu Mann (drehen)
    m5threeTalk = ["#Frau", "#ShuiTa"], //frau8, shui28

    m5four = ["#Polizist"], //tritt ein
    m5fourTalk = ["#Polizist", "#Mann", "#ShuiTa"], //polizist4, mann15, shui29

    m5five = [], //Man verbeugt sich?? ("#ShuiTa", "#Schreiner", "#Frau", "#Neffe", "#Mann", '#Schwaegerin', "#Großvater", "#Junge", "#Bruder", "#Nichte")
    m5fiveTalk = ["#ShuiTa", "#Mann"], //shui30, mann16
    m5fiveTalk2 = ["#ShuiTa", "#tabakladenTUERi", "#Polizist"], //von der Straße Lärm und Rufe;;;; shui31, stimmeausdemoff1, polizist5

    m5six = ["#Junge", "#fladen01", "#kuchen01"], //Kuch*en* und Flad*en* fallen aus Bluse
    m5six2 = ["#Frau", "#Junge"], //Frau winkt ihn verzeifelt hinaus; Junge wendet sich und will weg
    m5six2Talk = ["#Polizist"], //polizist6

    m5seven = ["#Polizist"], //Hält Jungen fest
    m5sevenTalk = ["#Polizist", "#Junge"], //polizist7, junge1
    m5sevenTalk2 = ["#Polizist", "#Frau"], //polizist8, frau9
    m5sevenTalk3 = ["#Polizist"], //polizist9,
    //Timeout -> ShuiTa schweigt
    m5sevenTalk4 = ["#Polizist", "#ShuiTa"], //polizist10, shui32


    cOneTalk = ["#Frau"], // Frau redet
    cTwoTalk = ["#ShuiTa", "#Polizist"], //shui, und polizist
    cThree = ["#containerShuiTa"],

    cFourTalk = ["#Polizist"], //vorwärts
    cFive = ["#containerPolizist"], //Polizist treibt sie
    cSixAll = ["#containerJunge", "#containerFrau", "#containerMann" ], //werden getrieben und gehen ab
    cSeven = ["#containerGroßvater"],
    cSevenTalk = ["#Großvater"], // Guten Tag
    cEight = ["#containerGroßvater" ],
    cNine = ["#containerGroßvater" ]; //Grossvater verschwindet


// Melanie: bis Shui Ta "nichts mehr für Sie tun kann."
// Melanie 2: Der Mann: "Wenn er quathsct, bis der Junge ..." bis Shui Ta: "Ich bin außer mir, dass in meinem Lokal"
// Sören: Die Frau erschüttert: "Und wir hielten Sie für einen guten Menschen!" bis Shui Ta Er macht sich daran, den Laden aufzuräumen
// Vera: Der Schreiner: "Ich sehe, dass Sie sich bemühen" bis Shui Ta: "Vielleicht ein wenig warm"
// Cata: Die Frau: "Er hat zugesehen,als der Junge wegging!" bis Der Großvater: "Guten Tag" (und alle raus)

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
                            document.querySelector(fireAt).setAttribute('material', 'color', 'turquoise');
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
                            document.querySelector(fireAt).setAttribute('material', 'color', 'turquoise');
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
    if (i < eventArr.length && at !== undefined) {
        if (next === true) {
            if (currentTarget.search(at) !== -1) {
                currentTarget = "#" + at;
                window.clearTimeout(timeoutId);
                if ((storyline(currentTarget, at)) === 1) {
                    at = eventArr[++i];
                }
            }
            if (next === true) {
                console.log("Next= " + at);
                timeoutId = setTimeout(function () {
                    for (j; j < window[at].length; j++) {
                        fireAt = window[at][j];
                        console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
                        //                                        document.querySelector(fireAt).setAttribute('event__0000', 'material.color', 'red');
                        document.querySelector(fireAt).append('<a-animation attribute="material.color" dur="2500" from=getColorOfPerson(fireAt) to="red" direction="alternate"></a-animation>');
                    }
                }, 5000);
            }
        }
    }
}

//function hint(currentTarget) {
//    'use strict';
//    if (next === true) {
//        if (currentTarget.search(at) !== -1) {
//            currentTarget = "#" + at;
//            if ((storyline(currentTarget, at)) === 1) {
//                at = eventArr[++i];
//            }
//        }
//        console.log("Next= " + at);
//    }
//}




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
    if (at !== "two" || at !== "three" || at !== "four") {
        currentTarget = '#' + $(this).closest("a-entity").attr('id');
        trigggerEvent = "clickableClick";
        nowClicked = currentTarget;
        if (nowClicked === lastClickableFused) {
            document.querySelector("#cursor").emit(trigggerEvent);
            document.querySelector(currentTarget).emit(trigggerEvent);
        }
    }
});

$(".clickableTrigger").on('click', function () {
    'use strict';
    trigggerEvent = "clickableFound";
    document.querySelector("#cursor").emit(trigggerEvent);
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
    if (i < eventArr.length && at !== undefined) {
        playableFound(currentTarget);
    }


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
    }, 10000);
});
