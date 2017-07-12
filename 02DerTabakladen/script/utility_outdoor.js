/* außen */

var entity = document.querySelector('#camera');
var games = ["#cakeGame", "#HideAndSeek", "#memoryGame"];

/**
 * Check game status to prevent starting multiple games
 * param: array position of game in games[]
 * return: false - if other game is running
 */
    
function checkGameStatus(curr) {
  var gamesWOcurr = games.filter(function(e){return e !== curr;});
    for(var i = 0; i<gamesWOcurr.length; i++){
      var status = document.querySelector(gamesWOcurr[i]).getAttribute('visible');
      if(status){
          console.log("another game is already running");
          return false;
      }
    }
}

$('#tabakladenTUERa').on('click', function doorClick() {
    'use strict';
    var innen = "indemladen.html";
    setTimeout(function timoutFadeOut() {
        $('#außen').fadeOut("slow", function timeoutSlow() {
            window.location = innen;
        });
    }, 1500);
});


    
/** Trigger points to move across the outside area */

$('#triggerBaeume').on('click', function triggerBaeume() {
    'use strict';
    AFRAME.utils.entity.setComponentProperty(entity, 'position', {x: -5, y: 5.8, z: -10.11});
    AFRAME.utils.entity.setComponentProperty(entity, 'rotation', {x: 0, y: 90, z: 0});
});

$('#triggerBaeckerei').on('click', function triggerBaeckerei() {
    'use strict';
    AFRAME.utils.entity.setComponentProperty(entity, 'position', {x: -10.71, y: 5.8, z: -50.20});
    AFRAME.utils.entity.setComponentProperty(entity, 'rotation', {x: 0, y: 0.00, z: 0});
});

$('#triggerTabakladenDefault').on('click', function triggerTabakladenDefault() {
    'use strict';
    AFRAME.utils.entity.setComponentProperty(entity, 'position', {x: 0.00, y: 5.8, z: 0.00});
    AFRAME.utils.entity.setComponentProperty(entity, 'rotation', {x: 0, y: 0, z: 0});
});

$('#triggerTeppichladen').on('click', function triggerTeppichladen() {
    'use strict';
    AFRAME.utils.entity.setComponentProperty(entity, 'position', {x: -27.5, y: 5.8, z: -10});
    AFRAME.utils.entity.setComponentProperty(entity, 'rotation', {x: 0, y: 0, z: 0});
});

/** Toggle functions to show or hide informational text boxes*/

var textbox = document.querySelector('#textbox');
var infobox = document.querySelector('#infobox');
var specialsbox = document.querySelector('#specialsbox');

$('#closeTextbox').on('click', function() {
    AFRAME.utils.entity.setComponentProperty(textbox, 'visible', false);
});

$('#openTextbox').on('click', function() {
    AFRAME.utils.entity.setComponentProperty(textbox, 'visible', true);
});

$('#toggleSpecials').on('click', function() {
    var here = $(this);
    console.log(here);
    AFRAME.utils.entity.setComponentProperty(infobox, 'visible', false);
    AFRAME.utils.entity.setComponentProperty(specialsbox, 'visible', true);
});

$('#toggleInfo').on('click', function() {
    var here = $(this);
    console.log(here);
    AFRAME.utils.entity.setComponentProperty(infobox, 'visible', true);
    AFRAME.utils.entity.setComponentProperty(specialsbox, 'visible', false);
});



var cakeEntity = document.querySelector('#cakeGame');
$('#cakeTrigger').on('click', function beginCake() {
    if(checkGameStatus(games[0])!==false){
        AFRAME.utils.entity.setComponentProperty(cakeEntity, 'visible', true);
        $('#counterKuchen').css("display", "initial");
    }
});

var HideAndSeekEntity = document.querySelector('#HideAndSeek');
$('#hideAndSeekTrigger').on('click', function beginCake() {
    if(checkGameStatus(games[1])!==false){
        AFRAME.utils.entity.setComponentProperty(HideAndSeekEntity, 'visible', true);
        $('#counterPerson').css("display", "initial");
    }
});

/** Trigger rain component already registered in entity.js */
$('#brunnen').on('click', function triggerBrunnen (){

    var attr = $('a-scene').attr('rain');
    if (attr) { //es hört auf zu regnen
        $('a-scene').removeAttr('rain');
    }
    else{ // es regnet
        $('a-scene').attr('rain', '');
        $('a-scene').play;
    }
});
