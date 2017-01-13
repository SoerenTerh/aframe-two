//http://stackoverflow.com/questions/38882843/aframe-updating-an-entitys-a-animation-with-multiple-attributes
AFRAME.registerComponent('event-animate', {
    schema: {
        target: { type: 'selector' },
        event: {type: 'string'}
    },

    init: function () {

        var data = this.data;

        this.el.addEventListener('fusing', function () {
            data.target.emit(data.event);
        });
    }
});


//AFRAME.registerComponent('event-animate', {
//    schema: {
//        target: {type: 'selector'},
//        event: {type: 'string'}
//    },
//
//    init: function () {
//        var el = this.el,
//            targetEl = this.data.target,
//            eventName = this.data.event;
//
//        el.addEventListener('click', function () {
//            targetEl.emit(eventName);
//        });
//    }
//});