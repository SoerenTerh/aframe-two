/**
 * Created by Sören on 18.12.2016.
 */

/* außen */

document.querySelector('#tabakladen').addEventListener('click', function () {
    var innen = "indemladen.html";
    $( '#außen' ).fadeOut( "slow", function() {
        window.location = innen;
    });
})





/* innen */