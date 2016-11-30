/**
 * Helpers
 * @module events
 */
Helpers.prototype.modules.events = function() {

    this.triggerEvent = function(el, eventName){
      var event;
      if (document.createEvent) {
        event = document.createEvent('HTMLEvents');
        event.initEvent(eventName,true,true);
      } else if (document.createEventObject) {// IE < 9
        event = document.createEventObject();
        event.eventType = eventName;
      }
      event.eventName = eventName;
      if (el.dispatchEvent) {
        el.dispatchEvent(event);
      } else if (el.fireEvent && htmlEvents['on'+eventName]) {// IE < 9
        el.fireEvent('on'+event.eventType,event);// can trigger only real event (e.g. 'click')
      } else if (el[eventName]){
        el[eventName]();
      } else if (el['on'+eventName]) {
        el['on'+eventName]();
      }
    };

    this.addEvent = function(el, type, handler){
      if (el.addEventListener) {
        el.addEventListener(type,handler,false);
      } else if (el.attachEvent && htmlEvents['on'+type]){// IE < 9
        el.attachEvent('on'+type,handler);
      } else {
        el['on'+type]=handler;
      }
    };

    this.removeEvent = function(el, type, handler){
      if(el.removeventListener) {
        el.removeEventListener(type,handler,false);
      } else if (el.detachEvent && htmlEvents['on'+type]){// IE < 9
        el.detachEvent('on'+type,handler);
      } else {
        el['on'+type]=null;
      }
    };

    // Return self
    return this;
};