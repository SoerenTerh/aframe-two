//Variables
var at = 0;
var last = 0;
var trigggerEvent = 0;
var i = 0, j = 0, l = 0, m = 0, n = 0, o = 0;
var currentTarget = 0;
var fireAt = 0;
var fireAtString = 0;
var lastClickableFused = 0;
var nowClicked = 0;
var next = true;
var timeoutId = null;

//Arrays
var eventArr = ["one",
                "two",
                //"twoTalk", "twoTalk2",
                "three", "four", // drin lassen für Schreiner und Shui Ta im Raum
                //"fourTalk", "fourTalk2",
                "five",
                //"fiveAll", "sixTalk",
                "six", "six2",
                //"sixTalk2",
                "seven", "seven2", "seven3", "seven4",
                //"sevenTalk",
                //"sOneTalk", "sTwoTalk", "sThreeTalk", "sFourTalkStart",
                //"sFourTalk1", "sFourTalk2",
                "sFourACC1", "sFourACC2", "sFourACC3", "sFourACC4",
                "sFourP3begin", "sFour_P3",
                // "sFiveTalk", "sFiveTalk2",
                "sFive_P1", "sFive_P2", "sFive_P3", "sFive_P3no",
                //                "sFive_P3s", "sFive_P3end", "sFive_P3end2", "sFiveTalk3",
                //"sSixTalk1", "sSixTalk2", "sSixTalk3",
                "sSeven_P1", "sSeven_P2rot", "sSeven_PickUp2", "sSeven_P2end", /*"sEight",*/
                "vOne",
                //"vOneTalk",
                "vTwo",
                //"vTwoTalk", "vFourTalk",
                "vFive",
                //"vSixTalk", "vNineTalk",
                "vEleven", //"vElevenTalk",
                "vFifteen", //"vFourteenTalk",
                "vSixteen", //"vSixteenTalk",
                "vEighteen", "vEighteen2",
                "vEighteen3",
                //"vEighteenTalk",
                //"v21Talk",
                "v21", "v21_2",
                //"v22Talk",
                "v21_3", //"v23Talk", "v25Talk",
                "v26", "v26two", "v26three",
                //"v27Talk",
                "v28", //"v28Talk", "v29Talk", "v30Talk", "v31Talk",
                "v32", //"v32Talk",
                // "v33Talk",
                // "v34Talk",
                // "v36Talk",
                "m5zeroTalk", "m5one", "m5one2", "m5oneTalk", "m5three", "m5threeTalk", "m5four",
                "m5fourTalk", "m5five", "m5five2", "m5fiveTalk", "m5fiveTalk2", "m5six", "m5six2",
                "m5six2Talk", "m5seven", "m5sevenTalk", "m5sevenTalk2", "m5sevenTalk3", "m5sevenTalk4",
                "cOneTalk", "cTwoTalk", "cThree", "cThree1", "cFour", "cFiveTalk", "cSix", "cFive1", "cSix1", "cSix2", "cFive2",  "cFive3", "cSeven", "cSevenTalk", "cEight"
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
var one = ["#kerzeFlamme", "#Frau", "#Neffe", "#Mann", '#Schwaegerin', "#Großvater", "#Junge", "#Bruder", "#Nichte"], //alle schlafen + Lampe brennt
    two = ["#tabakladenTUERi",  "#ShuiTa", "#Schreiner", "#Frau", "#Neffe", "#Mann", '#Schwaegerin', "#Großvater", "#Junge", "#Bruder", "#Nichte"], //ShuiTa Klopft (schnarchen stoppt)
    //twoTalk = ["#Frau", "#Neffe"],
    //twoTalk2 = ["#Frau"], //Frau lacht
    three = ["#sockelFrau", "#containerFrau", "#tabakladenTUERi"], //Frau öffnet Tür für Schreiner und ShuiTa
    four = ["#containerShuiTa", "#containerSchreiner", "#tabakladenTUERi"], //ShuiTa und Schreiner treten ein
    //fourTalk = ["#ShuiTa", "#Frau"],
    //fourTalk2 = ["#ShuiTa"],
    five = ["#sockelNeffe", "#containerNeffe",
            "#sockelMann", "#containerMann",
            '#sockelSchwaegerin', '#containerSchwaegerin',
            "#sockelGroßvater", "#containerGroßvater",
            "#sockelJunge", "#containerJunge",
            "#sockelBruder", "#containerBruder",
            "#sockelNichte", "#containerNichte"], //alle Wachen auf
    //fiveAll = ["#Neffe", "#Mann", '#Schwaegerin', "#Großvater", "#Junge", "#Bruder", "#Nichte"],
    //sixTalk = ["#Neffe"],

    six = ["#containerShuiTa"],
    six2 = ["#containerShuiTa", "#kerzeFlamme"], //ShuiTa geht zu lampe und löscht diese
    //sixTalk2 = ["#ShuiTa",  "#Mann"],
    seven = ["#containerShuiTa"], //ShuiTa Schüttelt Kopf
    seven2 = ["#containerShuiTa"], //ShuiTa Schüttelt Kopf
    seven3 = ["#containerShuiTa"], //ShuiTa Schüttelt Kopf
    seven4 = ["#containerShuiTa"], //ShuiTa Schüttelt Kopf
    //sevenTalk = ["#Mann", '#Schwaegerin', "#ShuiTa"],
    //  eight = [],
    //  nine = [],
    //  ten = [],


    /*sOne = ["#Mann", "#Frau", "#Neffe",  '#Schwaegerin', "#Großvater", "#Junge", "#Bruder"], //Mann organisiert alle (du und du und du....)
    sTwo = ["#Junge", "#tabakladenTUERi", "#Frau", "#Neffe", "#Bruder", '#Schwaegerin', "#Alte", "#Großvater"], //Junge nickt und verschindet aus laden (Richtung Bäckerei); alle ziehen sich an
    sThree = ["#Neffe", "#Bruder", '#Schwaegerin', "#Nichte"], //Neffe, Bruder, Schwaegerin & Nichte verlassen Laden
    sFour = ["#ShuiTa", "#bett"], //ShuiTa räumt auf
    */

    // sOneTalk = ["#Frau"],
    // sTwoTalk = ["#Neffe"],
    // sThreeTalk = ["#Mann"],
    //
    // sFourTalkStart = ["#Mann"],
    // sFourTalk1 = ["#Mann", "#Schwaegerin"],
    // sFourTalk2 = ["#Mann"],
    /*sFourACC = ["#accMann, #accNeffe, #accSchwaegerin", "#accGroßvater", "#accFrau"],*/

    sFourACC1 = ["#accMann"],
    sFourACC2 = ["#accNeffe"],
    sFourACC3 = ["#accFrau"],
    sFourACC4 = ["#accGroßvater"],

    sFourP3begin = ["#Junge", "#tabakladenTUERi"],
    sFour_P3 = [ "#Junge", "#tabakladenTUERi"],

    // sFiveTalk = ["#ShuiTa"],
    // sFiveTalk2 = ["#Neffe"],
    sFive_P1 = ["#Neffe", "#Bruder"], // Bewegen an Ladentisch vorbei
    sFive_P2 = ["#Neffe", "#Bruder", "#tabakladenTUERi"], // Bewegen Richtung Türe vorbei
    sFive_P3 = ["#Neffe", "#Bruder", "#Nichte"],
    sFive_P3no = ["#Nichte", "#tabakladenTUERi"],
    // sSixTalk1 = ["#ShuiTa", "#Mann"],
    // sSixTalk2 = ["#ShuiTa"],
    // sSixTalk3 = ["#ShuiTa"],

    sSeven_P1 = ["#ShuiTa", "#bett", "#bett-2", "#bett-6"], // Shui Ta räumt Schlafplätze vom Boden auf

    sSeven_P2rot = ["#ShuiTa"],
    sSeven_PickUp2 = ["#ShuiTa", "#bett-3", "#bett-4", "#bett-5"],
    sSeven_P2end = ["#ShuiTa"], // Shui Ta legt Schlafplätze auf dem Bettgestell ab
    /*sEight = ["#bett", "#bett-2", "#bett-3", "#bett-4", "#bett-5", "#bett-6"],*/

    vOne = ["#ShuiTa", "#Schreiner", "#Frau", "#Mann"],
  //  vOneTalk = ["#Schreiner"], // Schreiner redet
    vTwo = ["#ShuiTa", "#Rechnung"], // Rechnung fliegt zu ShuiTa
    //vTwoTalk = ["#ShuiTa", "#Schreiner"], // zu viel, ernähren
    //vFourTalk = ["#ShuiTa", "#Schreiner"], // wie viele Kinder
    vFive = ["#Rechnung"], // Rechnung wieder weg
    // vSixTalk = ["#ShuiTa", "#Mann", "#Schreiner" ], // 20 Dollar, Nussbaum
    // vNineTalk = ["#ShuiTa", "#Schreiner"], // dann weg, was
    vEleven = ["#Frau"], // Frau aus dem Weg räumen
    // vElevenTalk = ["#ShuiTa", "#Frau", "#Schreiner"], // zu teuer, gut gegeben, ShenTe soll kommen
    vFifteen = ["#Schreiner"], // geht zu Stellage
    // vFourteenTalk = ["#ShuiTa"], // Sie ist ruiniert
    vSixteen = ["#Schreiner", "#stellage_ohne-rechnung"], // nimmt Stellage und trägt zur Tür
    // vSixteenTalk = ["#Schreiner", "#ShuiTa"], // auf dem Boden, Mann helfen
    vEighteen = ["#Mann", "#Schreiner"], // umdrehen
    vEighteen2 = ["#Mann"], // zu Stellage
    vEighteen3 = ["#Mann", "#stellage_ohne-rechnung-2"], // trägt 2. Stellage zur Tür
    // vEighteenTalk = ["#Mann", "#Schreiner", "#ShuiTa"], // hinaus, du Hund, 20 Dollar
    // v21Talk = ["#Schreiner"], // 100
    v21 = [ "#Mann", "#tabakladenTUERi"], // Mann trägt Stellage aus Tür raus
    v21_2 = ["#Mann", "#stellage_ohne-rechnung"],
    // v22Talk = ["#Schreiner", "#ShuiTa", "#Frau"], // nach Maß, 20, quietschen
    v21_3 = [ "#Mann", "#tabakladenTUERi"], // Mann kommt wieder rein
    // v23Talk = ["#Schreiner", "#ShuiTa"], // legt Münzen auf Tisch
    //v24 = ["#ShuiTa", "#Mann"], // legt Münzen auf Tisch, Mann trägt 1. Stellage zurück
    // v25Talk = ["#Mann"], // genug für verschnittene Bretter
    v26 = ["#Mann", "#stellage_ohne-rechnung"], // trägt 2. Stellage zurück: drehen
    v26two = ["#Mann", "#stellage_ohne-rechnung-2"], // trägt 2. Stellage zurück
    v26three = ["#Mann"],
    //v27Talk = ["#Schreiner"], // zu betrinken
    v28 = ["#Schreiner"], // ab
    // v28Talk = ["#Mann", "#Frau", "#ShuiTa"], // amüsieren, ShuiTa = raus
    // v29Talk = ["#Mann", "#ShuiTa"], // wir? Diebe
    // v30Talk = ["#Mann", "#ShuiTa"], // wo Junge?
    // v31Talk = ["#ShuiTa"], // Wie ihr wollt
    v32 = ["#Schreiner", "#ShuiTa", "#tabakladenTUERi", "#containerPolizist"], // Shui zur Tür, Polizist taucht auf
    // v32Talk = ["#ShuiTa", "#Polizist"], // Beamter Viertel? Jawohl
    // v33Talk = ["#ShuiTa"], // "Shui Ta"
    // v34Talk = ["#ShuiTa", "#Polizist"], // schönes Wetter, bisschen warm ENDE VERA
    // v36Talk = ["#ShuiTa"],

    //fünfteSeite
    m5zeroTalk = ["#Mann"], //mann14

    m5one = ["#Mann", "#accMann"], //Zeichen an Shui Ta (unbeachtet bei diesem)
    m5one2 = ["#Mann", "#accMann"],
    m5oneTalk = ["#ShuiTa", "#Polizist"], //shui27, polizist3
    m5three = ["#Frau", "#Mann"], //Frau zu Mann (drehen)
    m5threeTalk = ["#Frau", "#ShuiTa"], //frau8, shui28
    m5four = ["#containerPolizist"], //tritt ein
    m5fourTalk = ["#Polizist", "#Mann", "#ShuiTa"], //polizist4, mann15, shui29
    m5five = ["#containerShuiTa"], //Man (ShuiTa) verbeugt sich
    m5five2 = ["#containerShuiTa"],
    m5fiveTalk = ["#ShuiTa", "#Mann"], //shui30, mann16
    m5fiveTalk2 = ["#ShuiTa", "#sky", "#Polizist"], //von der Straße Lärm und Rufe;;;; shui31, stimmeausdemoff1, polizist5
    m5six = ["#containerJunge", "#containerEssen"], //Kuch*en* und Flad*en* fallen aus Bluse
    m5six2 = ["#containerFrau", "#containerJunge"], //Frau winkt ihn verzeifelt hinaus; Junge wendet sich und will weg
    m5six2Talk = ["#Polizist"], //polizist6
    m5seven = ["#containerPolizist"], //Hält Jungen fest
    m5sevenTalk = ["#Polizist", "#Junge"], //polizist7, junge1
    m5sevenTalk2 = ["#Polizist", "#Frau"], //polizist8, frau9
    m5sevenTalk3 = ["#Polizist"], //polizist9,
    //Timeout -> ShuiTa schweigt
    m5sevenTalk4 = ["#Polizist", "#ShuiTa"], //polizist10, shui32


    cOneTalk = ["#Frau"], // Frau redet
    cTwoTalk = ["#ShuiTa", "#Polizist"], //shui, und polizist
    cThree = ["#containerShuiTa"],
    cThree1 = ["#containerShuiTa"],
	cFour = ["#containerPolizist"],
    cFiveTalk = ["#Polizist"], //vorwärts
	cSix = ["#containerFrau", "#containerMann", "#containerJunge"],
	cFive1 = ["#containerPolizist"],
	cSix1 = ["#containerFrau", "#containerMann", "#containerJunge"],
	cSix2 = ["#containerFrau", "#containerMann", "#containerJunge"],
	cFive2 = ["#containerPolizist"],//Polizist treibt sie
     //werden getrieben und gehen ab
	cFive3 = ["#containerPolizist"],
	cSeven = ["#containerGroßvater"],
    cSevenTalk = ["#Großvater"], // Guten Tag
    cEight = ["#containerGroßvater" ]; //Grossvater verschwindet

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
    var k = 0,
        animated = 0,
        narrate = 0;
    next = false;
    if (window[currentEvent].length !== 0) {

        (function startNext() {
            window.clearTimeout(timeoutId);

            function wait(animated) {
                document.querySelector(animated).addEventListener('animationend', function animationEnd() {
                    console.log("--------------------Animation End--------------------");
                    window.clearTimeout(timeoutId);
                    startNext();
                });
            }
            function wait2(narrate) {
                document.querySelector(narrate).addEventListener('sound-ended', function waited() {
                  //  document.querySelector('#sockel' + fireAtString).setAttribute('material', 'color', 'black');
                    document.querySelector(fireAt).setAttribute('material', 'color', getColorOfPerson(fireAt));
                    console.log("--------------------Narration End--------------------");
                    window.clearTimeout(timeoutId);
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
                            window.clearTimeout(timeoutId);
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
                            window.clearTimeout(timeoutId);
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
                window.clearTimeout(timeoutId);
                console.log("Finished: " + currentTarget);

                //transition to next event
                last = at;
                at = eventArr[++i];

                //clean up event name
                if (last.search("Talk") !== -1) {
                    last = last.replace('Talk', '');
                } else if (last.search("All") !== -1) {
                    last = last.replace('All', '');
                }
                last = last.replace(/\d+/g, '');

                //continue story while event matches (e.g. five, five2, fiveAll, fiveTalk, fiveTalk2, ...)
                if (at.search(last) !== -1) {
                    playableFound(at);
                }
            }
        }());

        window.clearTimeout(timeoutId);
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
                window.clearTimeout(timeoutId);
                for (n = 0; n < persons.length; n++) { //change hint coloring back to normal
                    try {
                        document.querySelector(persons[n]).setAttribute('material', 'color', getColorOfPerson(persons[n]));
                    } catch (err9) {
                        console.log(err9 + " - while firing at  " + fireAt);
                    }

                }

                currentTarget = "#" + at;

                if (storyline(currentTarget, at) !== 1) {
                    conole.log("problem?!");
                }
            }

        }
        console.log("Next= " + at);
        timeoutId = setTimeout(function showHint() {  //hint at next onPlayFusing()
            for (m = 0; m < window[at].length; m++) {
                fireAt = window[at][m];
                if (fireAt.search("container") !== -1) {
                    fireAt = fireAt.replace('container', '');
                } else if (fireAt.search("sockel") !== -1) {
                    fireAt = fireAt.replace('sockel', '');
                }
                document.querySelector(fireAt).setAttribute('material', 'color', 'red');
            }
        }, 30000);
    }
}

//Event Methods
//$(".clickable").each(function () {
//    'use strict';
//    $(this).attr('event-animate', 'target:#cursor; event:clickableFound');
//    $(this).attr('event-animate', 'target:#cursor; event:clickableClick');
//});

//Cursor found .clickable
$(".clickable").on('fusing', function onclickableFusing() {
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
$(".clickable").on('click', function onclickableClick() {
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
$("a-entity").on('fusing', function onAEntityFusing() {
    'use strict';
    currentTarget = "#cursor";
    trigggerEvent = "notClickable";
    document.querySelector(currentTarget).emit(trigggerEvent);
});

//trigger storyline after start was iniciated
$(".play").on('fusing', function onPlayFusing() {
    'use strict';
    currentTarget = $(this).closest("a-entity").attr("class");
    if (i < eventArr.length && at !== undefined) {
        playableFound(currentTarget);
    }
});


//auto-enter VR (https://github.com/aframevr/aframe/issues/1473)
window.addEventListener('load', function onLoadEnterVR() {
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
document.querySelector('a-scene').addEventListener('loaded', function szeneLoaded() {
    'use strict';

    setTimeout(function loadTimeout() {
        var scene = document.querySelector('a-scene');
        if (scene.hasLoaded) {
            scene.enterVR();
        }
        $("#giveMeTime").remove();

        currentTarget = "#one";
        at = "one";
        storyline(currentTarget, at);
    }, 20000);
});
