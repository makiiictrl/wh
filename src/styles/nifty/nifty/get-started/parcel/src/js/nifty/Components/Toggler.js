/**
 * Nifty - Toggler
 * ---------------------------------------------------------------------------------
 * Turn any button or anchor into a helpful component, such as a fullscreen toggler,
 * full-page content, or a toggler class for a DIV or any other element.
 * ---------------------------------------------------------------------------------
 */
import GetSelector from "../Utilities/GetSelector"
import BaseComponent from "./BaseComponent"


const EVENT = "click"
const DATA_KEY = "data-nf-toggler"
const DATA_TARGET_KEY = "data-nf-target"
const DATA_CLASS_KEY = "data-nf-class"
const TOGGLE_MODE = {
   "FullScreen" : "fullscreen",
   "FullPage"   : "fullpage",
   "Dismiss"    : "dismiss",
   "Class"      : "class"
}

const Default = {
   event : EVENT,
   dataKey: DATA_KEY,
   dataTargetKey: DATA_TARGET_KEY,
   dataClassKey: DATA_CLASS_KEY,
   toggleMode : TOGGLE_MODE
}

class Toggler extends BaseComponent {
   constructor( element, config ) {
      const mergeConfig = Object.assign( Default, config )
      super( element, mergeConfig.event )

      this._config = mergeConfig
      this._target = this._element.closest( this._element.getAttribute( this._config.dataTargetKey )) || GetSelector.findOne( this._element.getAttribute( this._config.dataTargetKey ));
      if ( !this._element.getAttribute( this._config.dataTargetKey ) ) console.error( `The Toggler component MUST have a dataset called [${ this._config.dataTargetKey }] to represent the target`)
      if ( !this._target && this._element.getAttribute( this._config.dataTargetKey ) ) console.error( `Can't find a "${ element.getAttribute( this._config.dataTargetKey ) }" target`);

      this._toggleType = this._getToggleType();
      this._status = this._updateStatus();
      this._element.getAttribute( this._config.dataKey )
      this._toggleClass = this._element.getAttribute( this._config.dataClassKey )

      if ( this._toggleType == this._config.toggleMode.Class && !this._element.getAttribute( this._config.dataClassKey ) ) console.error( `The Toggler component MUST have a dataset called [${ this._config.dataClassKey }] to represent the class you want to toggle`)
   }

   static get Default() {
      return Default
   }

   _actionHandler() {
      if ( this._toggleType == "FullScreen" ) this._fullscreen();
      else if ( this._toggleType == "FullPage" ) this._fullpage();
      else if ( this._toggleType == "Dismiss" ) this._dismiss();
      else if ( this._toggleType == "Class" ) this._class();


      // Update status
      this._status = this._updateStatus();
   }

   _getToggleType() {
      for (const t in this._config.toggleMode) {
         if ( this._element.getAttribute( this._config.dataKey ) == this._config.toggleMode[ t ] ) return t
      }
   }

   _updateStatus() {
      if ( this._toggleType == "FullScreen" ) return !document.fullscreenElement?"normal":"fullscreen"
      else if ( this._toggleType == "FullPage" ) return this._target.classList.contains("content-full-page")?"fullpage":"normal";
      else if ( this._toggleType == "Dismiss" ) return !this._target ? "dismissed" : "normal";
      else if ( this._toggleType == "Class" ) return this._target.classList.contains( this._toggleClass )? "added":"removed"
   }

   _fullscreen() {
      if ( !document.fullscreenElement ) {
         // Fullscreen
         // ---------------------------------------------------------------------------------
         if ( this._target.requestFullscreen ) this._target.requestFullscreen();
         else if ( this._target.webkitRequestFullscreen) this._target.webkitRequestFullscreen(); /* Safari */
      } else {
         // Exit Fullscreen
         // ---------------------------------------------------------------------------------
         if (document.exitFullscreen) document.exitFullscreen();
         else if (document.webkitExitFullscreen) document.webkitExitFullscreen(); /* Safari */
      }
   }

   _fullpage() {
      this._target.classList.toggle("content-full-page")
      body.classList.toggle("body-sc")
   }

   _dismiss() {
      this._target.remove()
      this._target = null
      super.dispose()
   }

   _class() {
      this._target.classList.toggle( this._toggleClass )
   }

   getStatus() {
      return this._status;
   }
}



GetSelector.find( `[${DATA_KEY}]` ).forEach( btn => new Toggler(btn) )


export default Toggler
