import StringMod from "../Utilities/StringMod"

class BaseComponent {
   constructor(element, events) {

      if (!element || typeof element != "object") return
      this._element = element
      this._parent = element.parentElement

      if ( !events ) return
      this._listener = {};

      if ( typeof events == "string" ) {
         events = StringMod.trim(events).split(",");
         events = { action: events }
      }

      for ( const handler in events ) {
         const eventNames = typeof events[handler] == "string" ? StringMod.trim(events[handler]).split(",") : events[handler];
         this._createHandler( eventNames, StringMod.listenerName(handler) );
      }

   }

   _createHandler( events, listener ){

      try {
         this[listener] = this[listener].bind(this)
      } catch (error) {
         throw new Error( `Add a listener function called "${ listener }" to handle the ${ events.toString() } event.` )
      }

      for (const event of events) {
         this._listener[event] = listener
         this._element.addEventListener( event, this[listener], false )
      }

   }

   dispose() {
      if (this._element && this._listener ) {
         for (const ev in this._listener) this._element.removeEventListener( ev, this[this._listener[ev]] )
      }

      for (const propertyName of Object.getOwnPropertyNames(this)) {
         this[propertyName] = null
      }
   }
}


export default BaseComponent