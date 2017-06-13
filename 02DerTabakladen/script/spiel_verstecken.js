var xPos = [-36, -13.5, 8.5, 25, 43, 43, 43, 78, 75, 14.5, -11.5, -74, -76, -75.5, -5.5];
var yPos = [-71.5, -73, -71, -50, -38, -13.5, -2.5, 15, 37, 71, 71, 35, 13.5, -17.5, -6];	
var personLeft = 6;
var personFound = 0;

updateCounterPerson();

$('.HaSperson').on('click', function(el){
    $("#" + el.currentTarget.id).remove();
    personLeft--;
    personFound++;
    updateCounterPerson();

    if(personLeft == 0){
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
    setTimeout(function(){ $('#HaSwon').fadeOut(1500) }, 2000);
}

