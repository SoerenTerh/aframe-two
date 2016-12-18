/**
 * Created by Sören on 18.12.2016.
 */
/* innen */

document.querySelector('#tabakladenTUERi').addEventListener('click', function () {
    var out = "index.html";
    setTimeout(function () {
        $( '#innen' ).fadeOut( "slow", function () {
            window.location = out;
        })}, 2750);
});