var xPos = [-36, -13.5, 8.5, 25, 43, 43, 43, 78, 75, 14.5, -11.5, -74, -76, -75.5, -5.5];
var yPos = [-71.5, -73, -71, -50, -38, -13.5, -2.5, 15, 37, 71, 71, 35, 13.5, -17.5, -6];	
var personLeft = 6;
var personFound = 0;

var HideAndSeekEntity = document.querySelector('#HideAndSeek');
$('#hideAndSeekTrigger').on('click', function beginCake() {
    if(checkGameStatus(games[1])!==false){
        AFRAME.utils.entity.setComponentProperty(HideAndSeekEntity, 'visible', true);
        $('#counterPerson').css("display", "initial");
    }
});

updateCounterPerson();

/**
 * Main method of the game
 * updateCounterPerson(): Overlay in the bottom right corner
 * won(): Hide overlays and set game entity back to visible: false to make determination of game state possible
 */
$('.HaSperson').on('click', function(el){
    $("#" + el.currentTarget.id).remove();
    personLeft--;
    personFound++;
    updateCounterPerson();

    if(personLeft === 0){
        won();
        $('#counterPerson').css("display", "none");
    }
});    

function updateCounterPerson() {
    $('#counterPerson #counterPersonFound').text(personFound);
    $('#counterPerson #counterPersonLeft').text(personLeft);
}

function won(){
    $('#HaSwon').css("display", "initial");
    setTimeout(function(){ $('#HaSwon').fadeOut(1500); }, 2000);
    AFRAME.utils.entity.setComponentProperty(HideAndSeekEntity, 'visible', false);
}