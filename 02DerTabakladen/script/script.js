$(document).find(".clickable").each(function () {
    this.setAttribute('event-animate', 'target:#cursor; event:clickableFound');
    setTimeout(function () {
        this.setAttribute('event-animate', 'target:#cursor; event:clickableClick');
    }, 2850);
});
