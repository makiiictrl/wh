/**
 * Nifty - Main Navigation
 * ---------------------------------------------------------------------------------
 * Make the main navigation support for collapsing and floating menus in the Mini navigation mode.
 * This component requires :
 * - Bootstrap Collapse
 * - PopperJS
 * ---------------------------------------------------------------------------------
 */
import GetSelector from "../Utilities/GetSelector"
import BaseComponent from "./BaseComponent"
import StringMod from "../Utilities/StringMod"
import SidebarToggler from "./SidebarToggler";

import { createPopper } from "@popperjs/core";
import { Collapse } from "bootstrap";

const EVENT_SIDEBARS_CHANGE = SidebarToggler.Default.eventSidebarsChange
const EVENT_SIDEBARS_CHANGED = SidebarToggler.Default.eventSidebarsChanged
const EVENT_OUTSIDE_TRIGGER = [ "click", "touchend" ]
const EVENT_SUBMENU_TOGGLER = [ "click", "mouseenter" ]
const SELECTOR_ROOT = "#root"
const SELECTOR_CONTENT = "#content"
const SELECTOR_NAV = "#mainnav-container"
const SELECTOR_MININAV_TOGGLE = ".mininav-toggle"
const SELECTOR_MININAV_CONTENT = ".mininav-content"

const CollapseEvent = {
   show   : "show.bs.collapse",
   shown  : "shown.bs.collapse",
   hide   : "hide.bs.collapse"
}

const PopperOptions = {
   placement   : "right",
   strategy    : "fixed",
   modifiers   : [
      {
         name     : "offset",
         options  : { offset: [ 0, 9 ] }
      },
      {
         name: "arrow",
         options: {
            padding: 15, // 15px from the edges of the popper
         },
      },
      {
         name: "preventOverflow",
         options: {
            padding: 7,
            //rootBoundary: null,
            //boundary: null,
         },
      }
   ]
}

const MainnavCSSClass = {
   "maxi"      : "mn--max",
   "mini"      : "mn--min",
   "push"      : "mn--push",
   "slide"     : "mn--slide",
   "reveal"    : "mn--reveal"
}

let Default = {
   eventSidebarsChange : EVENT_SIDEBARS_CHANGE,
   eventSidebarsChanged : EVENT_SIDEBARS_CHANGED,
   eventOutsideTrigger : EVENT_OUTSIDE_TRIGGER,
   eventSubmenuToggler : EVENT_SUBMENU_TOGGLER,
   selectorRoot: SELECTOR_ROOT,
   selectorContent: SELECTOR_CONTENT,
   selectorNav: SELECTOR_NAV,
   selectorMininavToggle: SELECTOR_MININAV_TOGGLE,
   selectorMininavContent: SELECTOR_MININAV_CONTENT
}

class MainNavigation extends BaseComponent {
   constructor( element, config ) {
      Default = Object.assign( Default, config )
      super( element, { "navChange" : Default.eventSidebarsChange, "navChanged" : Default.eventSidebarsChanged }  )

      if ( !MainNav ) MainNav = this
      this._config = Default
      this.update()
   }

   static get Default() {
      return Default
   }

   static get mode() {
      const root = GetSelector.findOne( SELECTOR_ROOT );
      for (const key in MainnavCSSClass) {
         if ( root.classList.contains( MainnavCSSClass[key] ) ) return key
      }
   }

   static setmode(mode) {
      if ( !MainNav ) {
         console.error( "Can't find the Main Navigation element, so be sure to set it up properly." )
         return
      }

      const root = GetSelector.findOne( Default.selectorRoot )
      root.classList.remove( "mn--show" )
      for (const key in MainnavCSSClass) {
         if (mode == key) {
            root.classList.add( MainnavCSSClass[key] )
         } else {
            root.classList.remove( MainnavCSSClass[key] )
         }
      }

      MainNav._navChangeHandler()
   }

   get called () {
      return this._called
   }

   set called (ab){
      this._called = ab
   }

   update() {
      this._updateSelectors()
      this._updateNavMode()
      this._initializeCollapseMenu()
   }

   _navChangeHandler () {
      this._updateNavMode()

      this._navSubmenus.forEach( submenu => {
         if ( this._mode == "mini" && submenu._element.classList.contains("show") ) {
            submenu._bsCollapse.hide()
         } else if( this._mode != "mini" ) {

            // Remove all popper components
            if ( submenu._popper ) {
               submenu._popper.destroy()
               submenu._popper = undefined
            }
         }
      })
   }

   _navChangedHandler () {
      if (this._mode != "mini") {
         this._navSubmenus.forEach(submenu => {
            if ( this._mode == "maxi" )  {

               // Show .open submenus or submenu contain an active link
               if (!submenu._isLink && (submenu._parent.classList.contains("open") || submenu._toggler.classList.contains("active"))) {
                  submenu._bsCollapse.show();
               }

            } else if (!submenu._isLink && !this._root.classList.contains("mn--show")) {

               // On the off-canvas navigation mode we have to set null for the Collapse parent and then put it into the show state.
               if ( submenu._parent.classList.contains("open") || submenu._toggler.classList.contains("active") ) {
                  submenu._collapseConfigParent = submenu._bsCollapse._config.parent
                  submenu._bsCollapse._config.parent = null

                  submenu._bsCollapse.show()
                  submenu._bsCollapse._config.parent = submenu._collapseConfigParent;
               } else {
                  submenu._bsCollapse.hide()
               }
            }
         })
      }
   }

   _updateSelectors() {
      this._root = GetSelector.findOne( this._config.selectorRoot )
      this._submenus = GetSelector.find( this._config.selectorMininavContent, this._element )
   }

   _updateNavMode() {
      for (const key in MainnavCSSClass) {
         if ( this._root.classList.contains( MainnavCSSClass[key] ) ) this._mode = key
      }
   }

   _initializeCollapseMenu() {
      this._navSubmenus = this._submenus.map( submenu => {
         return new NavigationSubmenu( submenu, this._config, this );
      })
   }

   _addListenerClickOutside() {
      if ( this._isListenerAdded ) return

      this._isListenerAdded = true
      this._isOutsideNavigation = this._isOutsideNavigation.bind(this)
      this._config.eventOutsideTrigger.forEach( ev => document.addEventListener( ev, this._isOutsideNavigation, false ))
   }

   _removeListenerClickOutside() {
      if ( !this._isListenerAdded ) return

      this._isListenerAdded = false
      this._config.eventOutsideTrigger.forEach( ev => document.removeEventListener( ev, this._isOutsideNavigation ))
   }

   _isOutsideNavigation(e) {
      if ( e.target === this._root || !e.target.closest( this._config.selectorNav ) ) {
         this._navSubmenus.forEach( submenu => submenu._bsCollapse.hide() )
         this._removeListenerClickOutside()
      }
   }
}


class NavigationSubmenu extends BaseComponent {
   constructor( element, config, mainnav ) {
      super( element, CollapseEvent)
      this._config = config

      this._mainnav = mainnav
      this._toggler = GetSelector.findOne( this._config.selectorMininavToggle, this._parent ) || this._parent.closest( this._config.selectorMininavToggle )
      this._isLink = !this._parent.classList.contains( "has-sub" )
      this._childCollapse = GetSelector.find( this._config.selectorMininavToggle, this._element );


      // Initialize the collapse instance
      this._bsCollapse = new Collapse( element, {
         parent: this._parent.parentElement.classList.contains( StringMod.removeDots(this._config.selectorMininavContent) ) ? this._parent.parentElement : this._mainnav._element,
         toggle: (this._parent.classList.contains("open") || this._toggler.classList.contains( "active" )) && this._mainnav._mode != "mini"
      })

      if( this._parent.classList.contains("open") || this._toggler.classList.contains( "active" ) && this._mainnav._mode != "mini" ) {
         this._element.style.transitionDuration = "0s"
         this._element.addEventListener("transitionend", () => this._element.style.transitionDuration = null, { once: true })
      }


      // Add all toggle listeners for collapsable submenus
      this._submenuToggle = this._submenuToggle.bind(this)
      this._config.eventSubmenuToggler.forEach( ev => {
         this._toggler.addEventListener( ev, this._submenuToggle, false )
      })

   }

   _submenuToggle(e) {
      e.stopPropagation()

      // Prevent only for modes other than "mini" and not from mouseenter events.
      if (this._mainnav._mode != "mini" && e.type == "mouseenter") return;


      // The regular anchor doesn't have a toggle function, but it has a link to the anchor page.
      if ( !this._isLink ) e.preventDefault();




      // There is a Bootstrap collapse bug that will fire the hide event when the collapse happens inside another collapsed component,
      // so we have to store which element made the change to avoid this issue.
      this._mainnav.called = this._element


      // Toggle the submenu to collapse
      this._bsCollapse.toggle()
   }

   _showHandler() {
      if ( this._element.classList.contains("show") ) return;

      if( this._mainnav._mode == "mini" ){

         // Get the content element to be set to the Popper boundary option.
         // for (const index of PopperOptions.modifiers) {
            //if ( index.name == "preventOverflow" ) index.options.rootBoundary = index.options.boundary = document.querySelector( this._config.selectorContent )
         // }

         // Initialize the popper component
         if ( !this._popper ) {
            try {
               this._popper = Popper.createPopper( this._toggler, this._element, PopperOptions  )
            } catch (err) {
               this._popper = createPopper( this._toggler, this._element, PopperOptions  )
            }
         }

         this._popper.update()
      } else {
         this._toggler.classList.remove("collapsed")
      }
   }

   _hideHandler() {
      // Let's check which collapse component causes this effect:
      if ( this._element.contains( this._mainnav.called ) && this._element !== this._mainnav.called) return
      if ( !this._isLink ) this._toggler.classList.add("collapsed")


      // Ignore when there is no child with a submenu.
      if ( this._mainnav._mode != "mini" || !this._childCollapse.length ) return


      // Hide all active submenu items
      const activeChildSubmenu = GetSelector.findOne( `${ this._config.selectorMininavContent }.show`, this._element )
      if ( activeChildSubmenu )  activeChildSubmenu.parentElement.querySelector( this._config.selectorMininavToggle ).click()
   }

   _shownHandler() {
      if ( this._mainnav._mode == "mini" ) {
         this._popper.update()
         this._mainnav._addListenerClickOutside()
      } else {
         if ( this._popper ) this._popper.destroy()
         this._mainnav._removeListenerClickOutside()
      }
   }
}

let MainNav =  GetSelector.findOne( Default.selectorNav )
if (MainNav) MainNav = new MainNavigation( MainNav )


export default MainNavigation
