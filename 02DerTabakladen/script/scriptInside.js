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
var currentCursor;

console.log("Neue Version 7:12");


// Array of events - used in the methods below
var eventArr = ["one", "two", "twoTalk", "twoTalk2", "three", "four", "fourTalk", "fourTalk2", "fiveAll", "five",
                "sixTalk", "six", "six2", "sixTalk2", "sevenTalk0", "seven", "seven2", "seven3", "seven4",
                "sevenTalk", "sOneTalk", "sTwoTalk", "sThreeTalk", "sFourTalkStart", "sFourTalk1", "sFourTalk2",
                "sFourACC1", "sFourACC2", "sFourACC3", "sFourACC4", "sFourACC5", "sFourACC6", "sFourACC7", "sFourACC8",
                "sFourP3begin", "sFourMove", "sFour_P3", "sFiveTalk", "sFiveTalk2", "sFive_P1", "sFive_P2",
                "sFive_P2Move", "sFive_P3", "sFive_P3Move", "sFive_P3no", "sSixTalk1", "sSixTalk2", "sSixTalk3",
                "sSeven_P1", "sSeven_P2rot", "sSevenPRotaPU","sSeven_P2", "sSeven_P2end", "vOne", "vOneTalk",
                "vTwo", "vTwoTalk", "vFourTalk", "vFive", "vSixTalk", "vNineTalk", "vEleven", "vElevenTalk",
                "vFifteen", "vFourteenTalk", "vSixteen", "vSixteenTalk", "vEighteen", "vEighteen2", "vEighteen3",
                "vEighteenTalk", "v21Talk", "v21", "v21_2", "v22Talk", "v21_3", "v23Talk", "v25Talk", "v26", "v26two",
                "v26three", "v27Talk", "v28", "v28Talk", "v29Talk", "v30Talk", "v31Talk", "v32", "v32Talk",
                "v33Talk", "v34Talk", "v36Talk", "mzeroTalk", "mone", "mtwoTalk", "mthree", "mthreeTalk",
                "mfour", "mfourTalk", "mfive", "mfive2", "mfiveTalk", "mfiveTalk2", "msix", "msix2", "msix2Talk",
                "mseven", "msevenTalk", "msevenTalk2", "msevenTalk3", "mseven2", "msevenTalk4", "cOneTalk", "cTwoTalk",
                "cThree", "cThree1", "cFour", "cFiveTalk", "cFive1", "cSix", "cSix1", "cSix2", "cFive3", "cSeven",
                "cSevenTalk", "cEight"
               ];
at = eventArr[0];

var persons = ["#Frau",
               "#Neffe",
               "#Mann",
               "#Schwaegerin",
               "#Großvater",
               "#Junge",
               "#Nichte",
               "#ShuiTa",
               "#Schreiner",
               "#Polizist"];

var personColors = ["#EBD3B9",
                    "#C5E2E4",
                    "#FFD9D9",
                    "#FFE0A8",
                    "#B99C79",
                    "#D2E6C1",
                    "#E08989",
                    "#CACACA",
                    "#EDAE81",
                    "#CDCCF7"];

// Array of figures to trigger depending on event name - animations and sounds are set as attributes in the corresponding html
var one = ["#kerzeFlamme", "#Frau", "#Neffe", "#Mann", '#Schwaegerin', "#Großvater", "#Junge", "#Nichte"], //alle schlafen + Lampe brennt
    two = ["#kerzeFlamme", "#tabakladenTUERi",  "#ShuiTa", "#Schreiner", "#Frau", "#Neffe", "#Mann", '#Schwaegerin',
           "#Großvater", "#Junge", "#Nichte"], //ShuiTa Klopft (schnarchen stoppt)
    twoTalk = ["#Frau", "#Neffe"],
    twoTalk2 = ["#Frau"], //Frau lacht
    three = ["#kerzeFlamme", "#sockelFrau", "#containerFrau", "#tabakladenTUERi"], //Frau öffnet Tür für Schreiner und ShuiTa
    four = ["#containerShuiTa", "#containerSchreiner", "#tabakladenTUERi"], //ShuiTa und Schreiner treten ein
    fourTalk = ["#ShuiTa", "#Frau"],
    fourTalk2 = ["#ShuiTa"],
    fiveAll = ["#Neffe", "#Mann", '#Schwaegerin', "#Großvater", "#Junge", "#Nichte"],
    five = ["#kerzeFlamme", "#sockelNeffe", "#containerNeffe", "#sockelMann", "#containerMann",
            '#sockelSchwaegerin', '#containerSchwaegerin', "#sockelGroßvater", "#containerGroßvater", "#sockelJunge",
            "#containerJunge", "#sockelNichte", "#containerNichte"], //alle Wachen auf
    sixTalk = ["#Neffe"],
    six = ["#containerShuiTa"],
    six2 = ["#containerShuiTa", "#kerzeFlamme"], //ShuiTa geht zu lampe und löscht diese
    sixTalk2 = ["#ShuiTa",  "#Mann"],
    sevenTalk0 = ["#ShuiTa"],
    seven = ["#containerShuiTa"], //ShuiTa Schüttelt Kopf
    seven2 = ["#containerShuiTa"], //ShuiTa Schüttelt Kopf
    seven3 = ["#containerShuiTa"], //ShuiTa Schüttelt Kopf
    seven4 = ["#containerShuiTa"],
    sevenTalk = ["#Mann", '#Schwaegerin', "#ShuiTa"],
    sOneTalk = ["#Frau"],
    sTwoTalk = ["#Neffe"],
    sThreeTalk = ["#Mann"],
    sFourTalkStart = ["#Mann"],
    sFourTalk1 = ["#Mann", "#Schwaegerin"],
    sFourTalk2 = ["#Mann"],
    sFourACC1 = ["#accMann"],
    sFourACC2 = ["#accNeffe"],
    sFourACC3 = ["#accFrau"],
    sFourACC4 = ["#accGroßvater"],
    sFourACC5 = ["#accJunge"],
    sFourACC6 = ["#accNichte"],
    sFourACC7 = ["#accSchwaegerin"],
    sFourACC8 = ["#accSchwaegerin2"],
    sFourP3begin = ["#containerJunge", "#tabakladenTUERi"],
    sFourMove = ["#containerJunge"],
    sFour_P3 = [ "#containerJunge", "#tabakladenTUERi"],
    sFiveTalk = ["#ShuiTa"],
    sFiveTalk2 = ["#Neffe"],
    sFive_P1 = ["#Neffe", "#Bruder"], // Bewegen an Ladentisch vorbei
    sFive_P2 = ["#Neffe", /*"#Bruder",*/ "#tabakladenTUERi"], // Bewegen Richtung Türe vorbei
    sFive_P2Move = ["#Neffe"/*, "#Bruder"*/],
    sFive_P3 = ["#Neffe", /*"#Bruder",*/ "#Nichte"],
    sFive_P3Move = ["#Nichte"],
    sFive_P3no = ["#Nichte", "#tabakladenTUERi"],
    sSixTalk1 = ["#ShuiTa", "#Mann"],
    sSixTalk2 = ["#ShuiTa"],
    sSixTalk3 = ["#ShuiTa"],
    sSeven_P1 = ["#ShuiTa", "#bett", "#bett-2", "#bett-6"], // Shui Ta räumt Schlafplätze vom Boden auf
    sSeven_P2rot = ["#containerShuiTa", "#bett-7", "#bett-8"],
    sSevenPRotaPU = ["#containerShuiTa"],
    sSeven_P2 = ["#containerShuiTa"],
    sSeven_P2end = ["#containerShuiTa", "#bett-3", "#bett-5"], // Shui Ta legt Schlafplätze auf dem Bettgestell ab
    vOne = ["#ShuiTa", "#Schreiner", "#Frau", "#Mann"],
    vOneTalk = ["#Schreiner"], // Schreiner redet
    vTwo = ["#ShuiTa", "#Rechnung"], // Rechnung fliegt zu ShuiTa
    vTwoTalk = ["#ShuiTa", "#Schreiner"], // zu viel, ernähren
    vFourTalk = ["#ShuiTa", "#Schreiner"], // wie viele Kinder
    vFive = ["#Rechnung"], // Rechnung wieder weg
    vSixTalk = ["#ShuiTa", "#Mann", "#Schreiner" ], // 20 Dollar, Nussbaum
    vNineTalk = ["#ShuiTa", "#Schreiner"], // dann weg, was
    vEleven = ["#Frau", "#Mann"], // Frau und Mann aus dem Weg räumen
    vElevenTalk = ["#ShuiTa", "#Frau", "#Schreiner"], // zu teuer, gut gegeben, ShenTe soll kommen
    vFifteen = ["#Schreiner"], // geht zu Stellage
    vFourteenTalk = ["#ShuiTa"], // Sie ist ruiniert
    vSixteen = ["#Schreiner", "#ZigarettenkisteRegalLinks", "#stellage_ohne-rechnung"], // nimmt Stellage und trägt zur Tür
    vSixteenTalk = ["#Schreiner", "#ShuiTa"], // auf dem Boden, Mann helfen
    vEighteen = ["#Mann", "#Schreiner"], // umdrehen
    vEighteen2 = ["#Mann"], // zu Stellage
    vEighteen3 = ["#Mann", "#ZigarettenkisteRegalLinksFast", "#stellage_ohne-rechnung-2"], // trägt 2. Stellage zur Tür
    vEighteenTalk = ["#Mann", "#Schreiner", "#ShuiTa"], // hinaus, du Hund, 20 Dollar
    v21Talk = ["#Schreiner"], // 100
    v21 = [ "#Mann", "#tabakladenTUERi"], // Mann trägt Stellage aus Tür raus
    v21_2 = ["#Mann", "#stellage_ohne-rechnung"],
    v22Talk = ["#Schreiner", "#ShuiTa", "#Frau"], // nach Maß, 20, quietschen
    v21_3 = [ "#Mann", "#tabakladenTUERi"], // Mann kommt wieder rein
    v23Talk = ["#Schreiner", "#ShuiTa"], // legt Münzen auf Tisch
    v24 = ["#ShuiTa", "#Mann"], // legt Münzen auf Tisch, Mann trägt 1. Stellage zurück
    v25Talk = ["#Mann"], // genug für verschnittene Bretter
    v26 = ["#Mann", "#stellage_ohne-rechnung"], // trägt 2. Stellage zurück: drehen
    v26two = ["#Mann", "#stellage_ohne-rechnung-2"], // trägt 2. Stellage zurück
    v26three = ["#Mann"],
    v27Talk = ["#Schreiner"], // zu betrinken
    v28 = ["#Schreiner"], // ab
    v28Talk = ["#Mann", "#Frau", "#ShuiTa"], // amüsieren, ShuiTa = raus
    v29Talk = ["#Mann", "#ShuiTa"], // wir? Diebe
    v30Talk = ["#Mann", "#ShuiTa"], // wo Junge?
    v31Talk = ["#ShuiTa"], // Wie ihr wollt
    v32 = ["#Schreiner", "#ShuiTa", "#tabakladenTUERi", "#containerPolizist"], // Shui zur Tür, Polizist taucht auf
    v32Talk = ["#ShuiTa", "#Polizist"], // Beamter Viertel? Jawohl
    v33Talk = ["#ShuiTa"], // "Shui Ta"
    v34Talk = ["#ShuiTa", "#Polizist"], // schönes Wetter, bisschen warm ENDE VERA
    v36Talk = ["#ShuiTa"],
    mzeroTalk = ["#Mann"], //mann14
    mone = ["#Mann", "#accMann"], //Zeichen an Shui Ta (unbeachtet bei diesem)
    mtwoTalk = ["#ShuiTa", "#Polizist"], //shui27, polizist3
    mthree = ["#Frau", "#Mann"], //Frau zu Mann (drehen)
    mthreeTalk = ["#Frau", "#ShuiTa"], //frau8, shui28
    mfour = ["#containerShuiTa", "#containerPolizist"], //tritt ein
    mfourTalk = ["#Polizist", "#Mann", "#ShuiTa"], //polizist4, mann15, shui29
    mfive = ["#containerShuiTa"], //Man (ShuiTa) verbeugt sich
    mfive2 = ["#containerShuiTa"],
    mfiveTalk = ["#ShuiTa", "#Mann"], //shui30, mann16
    mfiveTalk2 = ["#ShuiTa", "#asky", "#Polizist"], //von der Straße Lärm und Rufe;;;; shui31, stimmeausdemoff1, polizist5
    msix = ["#containerJunge", "#containerEssen"], //Kuch*en* und Flad*en* fallen aus Bluse
    msix2 = ["#containerFrau", "#containerJunge"], //Frau winkt ihn verzeifelt hinaus; Junge wendet sich und will weg
    msix2Talk = ["#Polizist"], //polizist6
    mseven = ["#containerPolizist", "#containerJunge"], //Hält Jungen fest
    msevenTalk = ["#Polizist", "#Junge"], //polizist7, junge1
    msevenTalk2 = ["#Polizist", "#Frau"], //polizist8, frau9
    msevenTalk3 = ["#Polizist"], //polizist9,
    mseven2 = ["#containerShuiTa"], //Timeout -> ShuiTa schweigt
    msevenTalk4 = ["#Polizist", "#ShuiTa"], //polizist10, shui32
    cOneTalk = ["#Frau"], // Frau redet
    cTwoTalk = ["#ShuiTa", "#Polizist"], //shui, und polizist
    cThree = ["#containerShuiTa"],
    cThree1 = ["#containerShuiTa"],
    cFour = ["#containerPolizist"],
    cFiveTalk = ["#Polizist"], //vorwärts
    cFive1 = ["#containerPolizist"],
    cSix = ["#containerSchwaegerin"],
    cSix1 = ["#containerJunge", "#containerSchwaegerin", "#containerGroßvater"],
    cSix2 = ["#containerJunge", "#containerSchwaegerin", "#containerFrau", "#containerMann"],
    cFive3 = ["#containerMann", "#containerPolizist", "#containerGroßvater"],
    cSeven = ["#containerGroßvater"],
    cSevenTalk = ["#Großvater"], // Guten Tag
    cEight = ["#containerGroßvater" ]; //Grossvater verschwindet

/**
 * Set color of person back to default after animation/sound
 * @param {integer} fireAt
 */
function getColorOfPerson(fireAt) {
    'use strict';
    for (j = 0; j < persons.length; j++) {
        if (persons[j] === fireAt) {
            return personColors[j];
        }
    }
}

//emit event for right cursor
function cursorEmitEvent(trigggerEvent) {
    currentCursor = "#cursor";

    if (trigggerEvent != "notClickable") { //Testing
        console.log(currentCursor, " -> ", trigggerEvent);
    }
    document.querySelector(currentCursor).emit(trigggerEvent);
}

/**
 * Main method to proceed through the storyline
 * @param {string} currentTarget - string value of corresponding object target position
 * @param {string} currentEvent - string value of corresponding event array position
 */
function storyline(currentTarget, currentEvent) {
    'use strict';
    console.log("Target= " + currentTarget);
    var k = 0,
        animated = 0,
        narrate = 0;
    next = false;
    if (window[currentEvent].length !== 0) {

        // Wait for animations/sounds to finish before moving onto the next story part
        (function startNext() {
            function wait(animated) {
                document.querySelector(animated).addEventListener('animationend', function animationEnd() {
                    console.log("--------------------Animation End--------------------");
                    startNext();
                });
            }
            function wait2(narrate) {
                document.querySelector(narrate).addEventListener('sound-ended', function waited() {
                    //  document.querySelector('#sockel' + fireAtString).setAttribute('material', 'color', 'black');
                    if (fireAt !== "#asky") {
                        document.querySelector(fireAt).setAttribute('material', 'color', getColorOfPerson(fireAt));
                    }
                    console.log("--------------------Narration End--------------------");
                    startNext();
                });
            }
            // Move on with the story if event array is not entirely run through yet
            if (i < eventArr.length) {
                if (k <  window[currentEvent].length) {
                    next = false;
                    fireAt = window[currentEvent][k];
                    fireAtString = fireAt.slice(1);
                    console.log("Fire at= " + fireAt);

                    // Play sound if Talk is found
                    if (currentEvent.search("Talk") !== -1) {
                        try {
                            document.querySelector(fireAt + ' > a-sound[on="' + currentEvent + '"]').emit(currentEvent);
                        } catch (err) {
                            console.log(err + " - while firing at  " + fireAt);
                        }

                        k++;
                        try {

                            if (document.querySelector(fireAt + ' > a-sound[on="' + currentEvent + '"]') !== null) {
                                console.log(document.querySelector(fireAt + ' > a-sound[on="' + currentEvent + '"]'));
                                narrate = "#" + document.querySelector(fireAt + ' > a-sound[on="' + currentEvent + '"]').id;
                                console.log(narrate);
                            }

                            if (narrate !== null) {
                                if (fireAt !== "#asky") {
                                    document.querySelector(fireAt).setAttribute('material', 'color', '#a2e665');
                                }
                                wait2(narrate);
                            } else {
                                startNext();
                            }

                        } catch (err6) {
                            console.log("No narration at: " + currentEvent + "-->" + fireAt);
                            //window.clearTimeout(timeoutId);
                            startNext();
                        }
                    } else {
                        // Fire other specified events otherwise
                        try {
                            document.querySelector(fireAt).emit(currentEvent);
                        } catch (err8) {
                            console.log(err8 + " - while firing at  " + fireAt);
                        }
                        k++;
                        try {
                            // Perform animations from inline html
                            if (document.querySelector(fireAt + ' > a-animation[begin="' + currentEvent + '"]') !== null) {
                                console.log(document.querySelector(fireAt + ' > a-animation[begin="' + currentEvent + '"]'));
                                animated = "#" + document.querySelector(fireAt + ' > a-animation[begin="' + currentEvent + '"]').id;
                                console.log(animated);
                            }
                            if (currentEvent.search("All") !== -1) {
                                document.querySelector(fireAt).setAttribute('material', 'color', '#a2e665');
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
                    console.log("Finished: " + currentTarget);

                    if (i === eventArr.length - 1) {
                        console.log("END");
                        return 1;
                    } else {
                        //transition to next event
                        last = at;
                        at = eventArr[++i];
                    }

                    //clean up event name
                    if (last.search("Talk") !== -1) {
                        last = last.replace('Talk', '');
                    } else if (last.search("begin") !== -1) {
                        last = last.replace('begin', '');
                    } else if (last.search("All") !== -1) {
                        last = last.replace('All', '');
                    } else if (last.search("_P") !== -1) {
                        last = last.replace('_P', '');
                    }
                    last = last.replace(/\d+/g, '');

                    //continue story while event matches (e.g. five, five2, fiveAll, fiveTalk, fiveTalk2, ...)
                    if (at.search(last) !== -1) {
                        playableFound(at);
                    }
                }
            } else {
                console.log("END");
            }
        }());
        return 1;
    } else {
        return 0;
    }
}

/**
 * Check whether a target has the play class
 * @param {string} currentTarget
 */
function playableFound(currentTarget) {
    'use strict';

    if (i < eventArr.length || at !== undefined) {
        if (next === true) {
            if (currentTarget.search(at) !== -1) {
                currentTarget = "#" + at;

                if (storyline(currentTarget, at) !== 1) {
                    console.log("Problem occured?!");
                }
            }
        }
        if (i < eventArr.length) {
            console.log("Next= " + at);
        } else {
            i++;
            console.log("......................");
        }
    }
}

//Cursor found .clickable
$(".clickable").on('fusing', function onclickableFusing() {
    'use strict';
    currentTarget = '#' + $(this).closest("a-entity").attr('id');
    console.log(currentTarget);

    trigggerEvent = "clickableFound";
    cursorEmitEvent(trigggerEvent);

    document.querySelector(currentTarget).emit(trigggerEvent);
    lastClickableFused = currentTarget;
    //    }
});

/** Detect clickable target on click
 * Prevent interaction with objects on specific story passages when door / entities close to the door have to be clicked
 */
$(".clickable").on('click', function onclickableClick() {
    'use strict';
    currentTarget = '#' + $(this).closest("a-entity").attr('id');
    trigggerEvent = "clickableClick";
    nowClicked = currentTarget;
    if (nowClicked === lastClickableFused) {
        cursorEmitEvent(trigggerEvent);
        document.querySelector(currentTarget).emit(trigggerEvent);
        console.log(currentTarget);
    }
});

//Camera jump
$(".clickableTrigger").on('click', function onClickableTriggerClick() {
    'use strict';
    currentTarget = '#' + $(this).closest("a-box").attr('id');
    trigggerEvent = "clickableClick";
    nowClicked = currentTarget;
    if (nowClicked === lastClickableFused) {
        cursorEmitEvent(trigggerEvent);
    }
});
$(".clickableTrigger").on('fusing', function onClickableTriggerFusing() {
    'use strict';
    currentTarget = '#' + $(this).closest("a-box").attr('id');
    console.log(currentTarget);

    trigggerEvent = "clickableFound";
    cursorEmitEvent(trigggerEvent);
    lastClickableFused = currentTarget;
});


//trigger storyline after start was iniciated
$(".play").on('fusing', function onPlayFusing() {
    'use strict';
    currentTarget = $(this).closest("a-entity").attr("class");
    if (i < eventArr.length && at !== undefined) {
        playableFound(currentTarget);
    }
});

/**
 * Trigger story line
 * @param {string} currentTarget - starting target of the story / first position of object target array
 * @param {string} at - starting point of the story / first position of event array
 */
document.querySelector('a-scene').addEventListener('loaded', function szeneLoaded() {
    'use strict';
    setTimeout(function loadTimeout() {
        var scene = document.querySelector('a-scene');
        if (scene.hasLoaded) {
            scene.enterVR();
        }
        $("#giveMeTime").remove();
        storyline(currentTarget, at);
    }, 1500);
});
