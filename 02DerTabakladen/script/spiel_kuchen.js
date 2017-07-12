/* game logic*/
var counter = 0;
var skey = "theCakeIsALie";

/**
 * Show cakeGame, if no other game is in progress
 */
var cakeEntity = document.querySelector('#cakeGame');
$('#cakeTrigger').on('click', function beginCake() {
    if(checkGameStatus(games[0])!=false){
        AFRAME.utils.entity.setComponentProperty(cakeEntity, 'visible', true);
        $('#counterKuchen').css("display", "initial");
    }
});

$('.Minispiel_Kuchen').on('click', function(el){
    game(el);
    var cakeNR = "#" + el.currentTarget.id;
    $('.Minispiel_Kuchen' + cakeNR).remove();
});

$('.Minispiel_Zigarette').on('click', function(el){
    game(el);
});

/**
 * Main game method: Either update the score when collecting a cake or lose when collecting a cigarette
 * @param {event} el 
 * Update counter when clicking cake
 * Fire lose function otherwise
 */
function game(el) {
    var element = el;

    if(element.currentTarget.classList.contains('Minispiel_Kuchen')){
        counter++;
        updateCounter();
    }else{
        if(element.currentTarget.classList.contains("Minispiel_Zigarette")){
            $('#test').css("display", "none");
            gameLost();
        }
    }
}

$('#counterKuchen #counter').text(counter);

/**
 * update counter overlay
 * player wins if all cakes have been picked up
*/
function updateCounter() {
    $('#counterKuchen #counter').text(counter);
    if($('.Minispiel_Kuchen').length === counter){
        gameWon();
    }
}

/**
 * Remove all elements with given class
 * Set game entity back to visible: false to be able to check for it after the game is won/lost
 */
function gameWon() {
    $('#cakeWon').css("display", "initial");
    $('.Minispiel_Kuchen').remove();
    $('.Minispiel_Zigarette').remove();
    $('#counterKuchen').css("display", "none");
    setTimeout(function(){ $('#cakeWon').fadeOut(1500); }, 2000);
    AFRAME.utils.entity.setComponentProperty(cakeEntity, 'visible', false);
}

function gameLost() {
    $('#lostCounter').html("Du hast " + counter + " Gebäckstücke gesammelt, jedoch eine verbotene Zigarre eingesammelt!");
    $('#lost').css("display", "initial");
    $('.Minispiel_Kuchen').remove();
    $('.Minispiel_Zigarette').remove();
    $('#counterKuchen').css("display", "none");
    setTimeout(function(){ $('#lost').fadeOut(1500); }, 2000);
    AFRAME.utils.entity.setComponentProperty(cakeEntity, 'visible', false);
}