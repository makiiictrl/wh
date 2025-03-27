/**
 * Nifty - Smooth Dropdown
 * ---------------------------------------------------------------------------------
 * Make Bootstrap's Dropdown menu slide smoothly using CSS animations.
 * ---------------------------------------------------------------------------------
 */
import GetSelector from "../Utilities/GetSelector"
import BaseComponent from "./BaseComponent"

class SmoothDropdown extends BaseComponent {
   constructor( element ){
      super( element, {
         show : "show.bs.dropdown",
         hide : "hide.bs.dropdown"
      })

      this._menu = GetSelector.findOne( ".dropdown-menu", this._parent )
   }

   _showHandler() {
      this._menu.classList.remove("mot", "mol", "mor");
   }

   _hideHandler(){
      const menuPlacement = this._menu ? this._menu.getAttribute( "data-popper-placement" ) : null;

      if ( menuPlacement ) {
         const menuOnTOp = [ "top", "right-end", "left-end" ];
         if ( menuPlacement.includes("left") ) this._menu.classList.add("mol");

         for (let i = 0; i < menuOnTOp.length; i++) {
            if ( menuPlacement.includes(menuOnTOp[i]) ){
               this._menu.classList.add("mot");
               break;
            }
         }
      }

      if ( this._menu.getAttribute("data-bs-popper") ) this._menu.classList.add("mst");

   }
}

GetSelector.find( ".dropdown-toggle" ).forEach( dropdown => {
   if ( !GetSelector.find( ".dropdown", dropdown.parentElement ) ) return
   new SmoothDropdown(dropdown)
})

export default SmoothDropdown
