/**
 * Created by Sören on 18.12.2016.
 */

/* außen */

document.querySelector('#tabakladen').addEventListener('click', function () {
    var innen = "indemladen.html";
    setTimeout(function(){
        $( '#außen' ).fadeOut( "slow", function() {
            window.location = innen;
        })}, 2750);
    });





/* innen */