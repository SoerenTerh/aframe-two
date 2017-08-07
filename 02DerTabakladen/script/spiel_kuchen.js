/* game logic*/
var cakeEntity = document.querySelector('#cakeGame');
var counter = 0;
var skey = "theCakeIsALie";
var found_stuff = [];
var numOfCake = 0;
var numOfFladen = 0;

$('.Minispiel_Kuchen').on('click', function(el){
    var cakeOrFladenNR = "#" + el.currentTarget.id;
    found_stuff.push(cakeOrFladenNR);
    CountCakesAndFladen();
    $('.Minispiel_Kuchen' + cakeOrFladenNR).remove();
    game(el);
});

$('.Minispiel_Zigarette').on('click', function(el){
    game(el);
});


/**
 * Count how many Kuchen and how many Fladen were found
 */
function CountCakesAndFladen() {
    if(found_stuff[found_stuff.length-1].indexOf("cake") !== -1)
        numOfCake++;
    else if(found_stuff[found_stuff.length-1].indexOf("fladen") !== -1)
        numOfFladen++;
    
    console.log("numOfCake: " + numOfCake + "; numOfFladen: " + numOfFladen);
    if(numOfCake === 8 && numOfFladen === 12){
        setTimeout(function(){
            gameWon();
    }, 7010);
    }
}

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
            document.querySelector("#falscheAnzahl").play();
            setTimeout(function(){
                $('#lostCounter').html("Du hast " + counter + " Gebäckstücke gesammelt, jedoch eine verbotene Zigarre eingesammelt!");
                gameLost();
            }, 7010);
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
    if(numOfCake > 8 || numOfFladen > 12){
        document.querySelector("#falscheAnzahl").play();
        setTimeout(function(){
            $('#lostCounter').html("Du hast " + numOfCake + " Kuchen und " + numOfFladen + " Fläden gesammelt. Jedoch solltest du 8 Kuchen und 12 Fläden einsammeln!");
            gameLost();
        }, 7010);
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
    $('#lost').css("display", "initial");
    $('.Minispiel_Kuchen').remove();
    $('.Minispiel_Zigarette').remove();
    $('#counterKuchen').css("display", "none");
    setTimeout(function(){ $('#lost').fadeOut(1500); }, 2000);
    AFRAME.utils.entity.setComponentProperty(cakeEntity, 'visible', false);
}