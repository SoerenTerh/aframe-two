$(".clickable").each(function () {
    $(this).attr('event-animate', 'target:#cursor; event:clickableFound');
    $(this).attr('event-animate', 'target:#cursor; event:clickableClick');
});



//document.getElementById('figur').emit('one');
document.querySelector('#figur').emit('one');

var one = document.querySelector('#figur');
var two = document.querySelector('#figur-2');
var at = "one";
if (one !== undefined) {
    $(one).on('fusing', function () {
            if( at == "one") {
            one.emit('one');
            at="two"
            }
    });
}
    
    
    if (two !== undefined) {
        $(two).on('fusing', function () {
            if( at == "two") {
                two.emit('two');
                at="two"
            }
        });
    }



//document.querySelector('#figur').addEventListener('click', function () {
//    if( at !== "two") {
//        at = "two";
//        camera.emit('two');
//    }
//});
//
//three.addEventListener('click', function () {
//    if( at !== "three") {
//        at = "three";
//        camera.emit('three');
//    }
//});



//var event = new Event('one');

//// Listen for the event.
//elem.addEventListener('one', function (e) { ... }, false);
//
//                                             // Dispatch the event.
//                                             elem.dispatchEvent(event);
//
//                                             var el = document.querySelector('a-entity');
//                                             el.emit('one');
//
//
//                                             var el3 = document.getElementById('figur');
//                                             el3.emit('one');
//
//
//
//
//                                             ////var entityEl = document.getElementById('figur');
//                                             ////entityEl.emit('one');
//                                             //
//                                             ////$("#figur").dispatchEvent('one');
//                                             //
//                                             //
//                                             ////var entityEl = document.getElementById('figur');
//                                             ////entityEl.emit('one', {}, true);
//                                             ////
//                                             ////setTimeout(funk, 5000)
//                                             ////
//                                             ////
//                                             ////function funk() {
//                                             ////    entityEl.emit('two', {}, true);
//                                             ////}
//                                             //
//                                             //$(document).emit("one");
//                                             //
//                                             //
//                                             //var spinner_obj = document.getElementById('figur');
//                                             //THREE.EventDispatcher.call( spinner_obj );
//                                             //spinner_obj.addEventListener('one', function(event) {alert("GOT THE EVENT");});
//                                             //spinner_obj.dispatchEvent({type:'one'});
//                                             //
//                                             //
//                                             //
//                                             //
//                                             //function niffler() {
//                                             //    var el = this.el;
//                                             //    var targetEl = this.data.target;
//                                             //    var eventName = this.data.event;
//                                             //
//                                             //    el.addEventListener('click', function () {
//                                             //        targetEl.emit(eventName);
//                                             //    })
//                                             //};
//                                             //
//                                             //var event = new CustomEvent(
//                                             //    "one", 
//                                             //    {
//                                             //        detail: {
//                                             //            message: "Hello World!",
//                                             //            time: new Date(),
//                                             //        },
//                                             //        bubbles: true,
//                                             //        cancelable: true
//                                             //    }
//                                             //);