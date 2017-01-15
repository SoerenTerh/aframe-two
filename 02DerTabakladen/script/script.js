$(".clickable").each(function () {
    $(this).attr('event-animate', 'target:#cursor; event:clickableFound');
    setTimeout(function () {
        $(this).attr('event-animate', 'target:#cursor; event:clickableClick');
    }, 1500);
});
