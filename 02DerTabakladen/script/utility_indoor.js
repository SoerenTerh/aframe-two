/**
 * Created by Sören on 18.12.2016.
 */
/* innen */

$('#tabakladenTUERi').on('click', function () {
    var out = "index.html";
    setTimeout(function () {
        $( '#innen' ).fadeOut( "slow", function () {
            window.location = out;
        });
    }, 1500);
});




/*var timeoutId = null;

$('#tabakladenTUERi').on('mouseenter', function () {
    var out = "index.html";
    timeoutId = setTimeout(function () {
        $( '#innen' ).fadeOut( "slow", function () {
            window.location = out;
        })}, 2750);
});

$('#tabakladenTUERi').on('mouseleave', function () {
    window.clearTimeout(timeoutId);
});*/