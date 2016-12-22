/**
 * Created by Sören on 18.12.2016.
 */
/* innen */

/*document.querySelector('#tabakladenTUERi').addEventListener('hover', function () {
    var out = "index.html";
    setTimeout(function () {
        $( '#innen' ).fadeOut( "slow", function () {
            window.location = out;
        })}, 2750);
});*/

var timeoutId = null;

document.querySelector('#tabakladenTUERi').addEventListener('mouseenter', function () {
    var out = "index.html";
    timeoutId = setTimeout(function () {
        $( '#innen' ).fadeOut( "slow", function () {
            window.location = out;
        })}, 2750);
});

document.querySelector('#tabakladenTUERi').addEventListener('mouseleave', function () {
    window.clearTimeout(timeoutId)
});