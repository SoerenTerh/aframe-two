/**
 * Created by Sören on 18.12.2016.
 */

/* außen */

$('#tabakladenTUERa').on('click', function () {
    var innen = "indemladen.html";
    setTimeout(function(){
        $( '#außen' ).fadeOut( "slow", function() {
            window.location = innen;
        });
}, 1500);
    });
