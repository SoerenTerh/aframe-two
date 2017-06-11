/* game logic*/
var counter = 0;
var skey = "theCakeIsALie";

$('.Minispiel_Kuchen').on('click', function(el){
    game(el);
    var cakeNR = "#" + el.currentTarget.id;
    $('.Minispiel_Kuchen' + cakeNR).remove();
});

$('.Minispiel_Zigarette').on('click', function(el){
    game(el);
});

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
};

/* generate entity to display counter */

$('#counterKuchen #counter').text(counter);

/* update counter */
function updateCounter() {
    $('#counterKuchen #counter').text(counter);
}

function gameLost() {
    $('#lostCounter').html("Du hast " + counter + " Kuchen gesammelt!");
    $('#lost').css("display", "initial");
    $('.Minispiel_Kuchen').remove();
    $('.Minispiel_Zigarette').remove();
    $('#counterKuchen').css("display", "none");
    setTimeout(function(){ $('#lost').fadeOut(1500) }, 2000);
}