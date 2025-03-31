/**
 * Nifty - Color Mode Switcher
 * ---------------------------------------------------------------------------------
 * Turn your checkbox, select, or radio button into a switch component,
 * which will switch between light and dark color modes.
 * ---------------------------------------------------------------------------------
 */
import GetSelector from "../Utilities/GetSelector"
import BaseComponent from "./BaseComponent"


const SELECTOR_SWITCHER = ".mode-switcher"
const SELECTOR_SWITCHER_ICONS = ".mode-switcher-icon"
const EVENT = "change"
const EVENT_MODE_CHANGE = "change.nf.colormode"
const AVAILABLE_COLOR_MODE = [ "auto", "light", "dark" ]
const DATA_BS_COLOR_MODE = "data-bs-theme"

let inputValue = new String
let modeSwitchers = new Array
let eventColorModeChange = new Event( EVENT_MODE_CHANGE, { colorMode: document.documentElement.getAttribute( DATA_BS_COLOR_MODE ) } )

const Default = {
   event: EVENT,
   selectorSwitcher : SELECTOR_SWITCHER,
   selectorSwitcherIcons : SELECTOR_SWITCHER_ICONS,
   availableColorMode : AVAILABLE_COLOR_MODE,
   dataBSColorMode : DATA_BS_COLOR_MODE
}

class ColorModeSwitcher extends BaseComponent {
   constructor( element, config ) {
      const mergeConfig = Object.assign( Default, config )
      super( element, mergeConfig.event )

      // Store all switchers in an array object.
      modeSwitchers.push( this )

      this._config = mergeConfig
      this._icons = GetSelector.find( this._config.selectorSwitcherIcons, this._parent )
      this._updateColorMode()
      this._updateState()
   }

   /**
    * @param {String} colormode
    */
   static setColorMode( colormode ) {
      inputValue = colormode;

      if ( colormode == "auto" ) colormode = this.prefersTheme
      document.documentElement.setAttribute( DATA_BS_COLOR_MODE, colormode )

      // Dispatch the color event
      eventColorModeChange.colorMode = colormode;
      document.dispatchEvent( eventColorModeChange );


      // Update all switcher states
      modeSwitchers.forEach( switcher => switcher._updateState() )
   }

   static get prefersTheme() {
      return window.matchMedia("( prefers-color-scheme: dark )").matches ? "dark" : "light";
   }

   static get Default() {
      return Default
   }


   _actionHandler(e) {
      // inputValue = e.currentTarget.type == "checkbox" ? e.currentTarget.checked ? "dark" : "light" : e.currentTarget.value
      const currentElement = e.currentTarget
      if ( currentElement.type == "checkbox" && currentElement.getAttribute("value") == null ) {
         inputValue = currentElement.checked ? "dark" : "light";
      } else {
         inputValue = currentElement.value;
      }
      this.setColorMode( inputValue )
   }

   _updateState() {
      this._updateColorMode()

      // Update element states
      if ( this._element.type == "checkbox" && this._element.getAttribute("value") == null ) {
         this._element.checked = this._colorMode == "dark" ? true : false;
      } else if( this._element.type == "select-one" ) {
         let matchOption = this._element.querySelector( `[value="${ inputValue }"]` );
         if ( !matchOption ) matchOption = this._element.querySelector( `[value="${ this._colorMode }"]` )
         matchOption.selected = true
      } else if( this._element.type == "radio" || this._element.type == "checkbox" ) {
         this._element.checked = this._element.value == this._colorMode ? true : false

         if ( inputValue == "auto" ) {
            const matchOption = document.querySelector( `[name="${this._element.getAttribute("name")}"][value="auto"]` )
            if ( matchOption ) {
               matchOption.checked = true
            } else if( this._element.type == "checkbox" && this._element.value =="auto" ){
               this._element.checked = true
            }
         }
      }

      // Update element icons
      this._icons.forEach( icon => {
         if ( icon.classList.contains( `icon-${ this._colorMode }` ) ) icon.classList.remove("d-none");
         else icon.classList.add("d-none");
      })
   }

   _updateColorMode() {
      this._colorMode = document.documentElement.getAttribute( this._config.dataBSColorMode )
      if ( inputValue == "" ) inputValue = this._colorMode;
   }

   _isAvailableMode( inputMode ) {
      for (const color in this._config.availableColorMode) {
         if ( inputMode == this._config.availableColorMode[ color ] ) return true
      }
      return false
   }

   _updateSwitchers() {
      // Update all switcher states
      modeSwitchers.forEach( switcher => switcher._updateState(this._colorMode))
   }

   update() {
      this._updateState()
   }

   setColorMode( inputMode ) {
      if ( !this._isAvailableMode( inputMode ) ) {
         throw new Error ( `The color mode "${ inputMode }" isn't available.` )
         return;
      }


      if ( inputMode == "auto" ) inputMode = this.constructor.prefersTheme
      document.documentElement.setAttribute( this._config.dataBSColorMode, inputMode )
      this._updateColorMode()


      // Dispatch the color event
      eventColorModeChange.colorMode = this._colorMode;
      document.dispatchEvent( eventColorModeChange );
      this._updateSwitchers()
   }

   dispose() {
      // Remove the selected switcher from the variable.
      const thisSwithcer = modeSwitchers.indexOf(this);
      if (thisSwithcer > -1) modeSwitchers.splice(thisSwithcer, 1); // Remove one item at the specified index
      super.dispose()
   }
}

// Initialize
GetSelector.find( SELECTOR_SWITCHER ).forEach( switcher => new ColorModeSwitcher( switcher ) )


export default ColorModeSwitcher
