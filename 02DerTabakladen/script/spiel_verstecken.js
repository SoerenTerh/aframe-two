var xPos = [-33, -14, 7, 25, 43, 43, 43, 78, 82, 14.5, -11.5, -74, -76, -75.5, -5.5];
var yPos = [-73, -75, -75, -50, -38, -13.5, -2.5, 15, 35.5, 71, 71, 35, 13.5, -17.5, -6];	
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

AFRAME.registerComponent('random-position-person', {
	  schema: {
	    min: {default: {x: -10, y: -10, z: -10}, type: 'vec3'},
	    max: {default: {x: 10, y: 10, z: 10}, type: 'vec3'}
	  },

      
	  update: function () {
	    var data = this.data;

        var index = Math.floor(Math.random() * xPos.length);
        
        this.el.setAttribute('position', {
	      x: xPos[index],
	      y: 1,
	      z: yPos[index]
	    });

        xPos.splice(index, 1);
        yPos.splice(index, 1);
		}
	});

