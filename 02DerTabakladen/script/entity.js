////http://stackoverflow.com/questions/38882843/aframe-updating-an-entitys-a-animation-with-multiple-attributes
//AFRAME.registerComponent('event-animate', {
//    schema: {
//        target: { type: 'selector' },
//        event: {type: 'string'}
//    },
//
//    init: function eventAnimate() {
//
//        var data = this.data;
//
//        this.el.addEventListener('fusing', function listenToFusing() {
//            data.target.emit(data.event);
//        });
//    }
//});


//Event Methods
//$(".clickable").each(function () {
//    'use strict';
//    $(this).attr('event-animate', 'target:#cursor; event:clickableFound');
//    $(this).attr('event-animate', 'target:#cursor; event:clickableClick');
//});


//AFRAME.registerComponent('log', {
//    schema: {
//        event: {type: 'string', default: ''},
//        message: {type: 'string', default: 'Hello, World!'}
//    },
//    init: function () {
//        var self = this;
//        this.eventHandlerFn = function () { console.log(self.data.message); };
//    },
//    update: function (oldData) {
//        var data = this.data;
//        var el = this.el;
//        // `event` updated. Remove the previous event listener if it exists.
//        if (oldData.event && data.event !== oldData.event) {
//            el.removeEventListener(oldData.event, this.eventHandlerFn);
//        }
//        if (data.event) {
//            el.addEventListener(data.event, this.eventHandlerFn);
//        } else {
//            console.log(data.message);
//        }
//    }
//});
