/**
 * Nifty - Sidebars Toggler
 * ---------------------------------------------------------------------------------
 * Toggle the Main-Navigation or the Right-Sidebar without getting too complicated,
 * add the class ".nav-toggler" or ".sidebar-toggler" to your button, and you are ready to go.
 * ---------------------------------------------------------------------------------
 */
import GetSelector from "../Utilities/GetSelector"
import BaseComponent from "./BaseComponent"

const EVENT = "click"
const EVENT_SIDEBARS_CHANGE = "change.nf.sidebar"
const EVENT_SIDEBARS_CHANGED = "changed.nf.sidebar"
const SELECTOR_TOGGLE_NAV = ".nav-toggler"
const SELECTOR_TOGGLE_SIDEBAR = ".sidebar-toggler"
const SELECTOR_ROOT = "#root"
const SELECTOR_NAV = ".mainnav"
const SELECTOR_SIDEBAR = ".sidebar"
const CLASS_NAME_MIN_NAV = "mn--min"
const CLASS_NAME_MAX_NAV = "mn--max"
const CLASS_NAME_SHOW_NAV = "mn--show"
const CLASS_NAME_SHOW_SIDEBAR = "sb--show"
const CLASS_NAME_STUCK_SIDEBAR = "sb--stuck"

const Default = {
   event : EVENT,
   eventSidebarsChange: EVENT_SIDEBARS_CHANGE,
   eventSidebarsChanged: EVENT_SIDEBARS_CHANGED,
   selectorRoot: SELECTOR_ROOT,
   selectorToggleNav: SELECTOR_TOGGLE_NAV,
   selectorToggleSidebar: SELECTOR_TOGGLE_SIDEBAR,
   selectorNav: SELECTOR_NAV,
   selectorSidebar: SELECTOR_SIDEBAR
}

class SidebarToggler extends BaseComponent {
   constructor( element, config ) {
      const mergeConfig = Object.assign( Default, config )
      super( element, mergeConfig.event )

      this._config = mergeConfig
      this._root = GetSelector.findOne( this._config.selectorRoot )
      this._nav = GetSelector.findOne( this._config.selectorNav )
      this._sidebar = GetSelector.findOne( this._config.selectorSidebar )
      this._toggleType = element.classList.contains( this._config.selectorToggleNav.replace( ".","" ) ) ? "NAV" : "SIDEBAR"
      this._removeBackdrop = this._removeBackdrop.bind(this)

      this._eventSidebarsChange = new Event( this._config.eventSidebarsChange );
      this._eventSidebarsChanged = new Event( this._config.eventSidebarsChanged );

   }

   static get Default() {
      return Default
   }

   _actionHandler(e) {
      e.stopPropagation()

      if ( this._toggleType == "NAV" ) {
         if (window.innerWidth < 992 || (!this._root.classList.contains( CLASS_NAME_MIN_NAV ) && !this._root.classList.contains( CLASS_NAME_MAX_NAV ))) {
            this._root.classList.toggle( CLASS_NAME_SHOW_NAV );
            document.addEventListener( EVENT, this._removeBackdrop, false)
         } else {
            this._root.classList.toggle( CLASS_NAME_MIN_NAV );
            this._root.classList.toggle( CLASS_NAME_MAX_NAV );
         }
      } else {
         this._root.classList.toggle( CLASS_NAME_SHOW_SIDEBAR )
         document.addEventListener( EVENT, this._removeBackdrop, false)
      }

      // Dispatch a custom event
      this._dispatchEvent()
   }

   _dispatchEvent(){
      this._transitionEnd = this._transitionEnd.bind( this )

      if ( this._toggleType == "NAV" ) {
         this._nav.dispatchEvent(this._eventSidebarsChange)
         this._nav.addEventListener( "transitionend", this._transitionEnd )
      }else {
         this._sidebar.dispatchEvent(this._eventSidebarsChange)
         this._sidebar.addEventListener( "transitionend", this._transitionEnd )
      }
   }

   _transitionEnd ( e ) {
      if ( e.propertyName == "max-width" || e.propertyName == "transform" ) {

         if ( e.target == this._nav ) {
            this._nav.removeEventListener( "transitionend", this._transitionEnd )
            this._nav.dispatchEvent(this._eventSidebarsChanged)
         } else if ( e.target == this._nav ) {
            this._sidebar.removeEventListener( "transitionend", this._transitionEnd )
            this._sidebar.dispatchEvent(this._eventSidebarsChanged)
         }
         document.dispatchEvent(this._eventSidebarsChanged)
      }
   }

   _removeBackdrop( e ) {
      if ( e.target === this._root || ( !e.target.closest( this._config.selectorNav ) && !e.target.closest( this._config.selectorSidebar ) ) ) {
         this._root.classList.remove( CLASS_NAME_SHOW_NAV );
         if (!this._root.classList.contains( CLASS_NAME_STUCK_SIDEBAR )) this._root.classList.remove( CLASS_NAME_SHOW_SIDEBAR );

         this._dispatchEvent()
         document.removeEventListener( EVENT, this._removeBackdrop )
      }
   }
}


GetSelector.find( `${SELECTOR_TOGGLE_NAV}, ${SELECTOR_TOGGLE_SIDEBAR}` ).forEach( st => new SidebarToggler(st) )


export default SidebarToggler
