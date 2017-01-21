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

AFRAME.registerComponent('log', {
    schema: {
        event: {type: 'string', default: ''},
        message: {type: 'string', default: 'Hello, World!'}
    },
    init: function () {
        var self = this;
        this.eventHandlerFn = function () { console.log(self.data.message); };
    },
    update: function (oldData) {
        var data = this.data;
        var el = this.el;
        // `event` updated. Remove the previous event listener if it exists.
        if (oldData.event && data.event !== oldData.event) {
            el.removeEventListener(oldData.event, this.eventHandlerFn);
        }
        if (data.event) {
            el.addEventListener(data.event, this.eventHandlerFn);
        } else {
            console.log(data.message);
        }
    }
});

//AFRAME.registerComponent('niffler', {
//    schema: {type: 'selector'},
//    
////        https://ada.is/webvr/talk-ota2016.html
////        this;            // <= the component
////        this.data;       // <= the data from the dom in the format defined by the schema
////        this.el;         // <= the DOM element
////        this.el.object3D // <= The THREE.js 3D model
//        
//
//    init: function () {
//        this.animation = null;
//        this.animationIsPlaying = false;
//        this.config = null;
//        this.playAnimationBound = this.playAnimation.bind(this);
//        this.pauseAnimationBound = this.pauseAnimation.bind(this);
//        this.resumeAnimationBound = this.resumeAnimation.bind(this);
//        this.restartAnimationBound = this.restartAnimation.bind(this);
//        this.repeat = 0;
//    },
//
//    update: function () {
//        var attrName = this.attrName;
//        var data = this.data;
//        var el = this.el;
//        var propType = getPropertyType(el, data.property);
//        var self = this;
//        
//        alert(this);
//        var target = this.data;
//        var event = "one";
//
//        this.el.addEventListener('fusing', function () {
//            data.target.emit(data.event);
//        });
//    }
//});
