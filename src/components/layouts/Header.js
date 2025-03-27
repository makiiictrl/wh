import React from "react";


export default Header = () => {
    return(
        <React.Fragment>
            <header className="header">
        <div className="header__inner">
       
          <div className="header__brand justify-content-center p-3">
            <div className="brand-wrap">
             
             
                <img src="/nifty/img/cathay-wh.png" className="nifty-logo pt-1" width="50" height="50" />
              
            </div>
          </div>

          
          <button type="button" className="nav-toggler header__btn btn btn-icon btn-sm" aria-label="Nav Toggler">
            <i className="pli-list-view icon-lg"></i>
          </button>

        
          <div className="form-check form-check-alt form-switch mx-md-2">
            <input id="headerThemeToggler" className="form-check-input mode-switcher" type="checkbox" role="switch" />
            <label className="form-check-label ps-1 fw-bold d-none d-md-flex align-items-center" htmlFor="headerThemeToggler">
              <i className="mode-switcher-icon icon-light demo-psi-sun fs-5"></i>
              <i className="mode-switcher-icon icon-dark d-none demo-psi-half-moon"></i>
            </label>
          </div>
        </div>
        <nav id="mainnav-container" className="mainnav" data-scheme="lime">
        <div className="mainnav__inner">
          {/* <!-- Navigation menu --> */}
          <div className="mainnav__top-content scrollable-content pb-5">
            {/* <!-- Profile Widget --> */}
            <div id="_dm-mainnavProfile" className="mainnav__widget my-3 hv-outline-parent">
              {/* <!-- Profile picture --> */}
              <div className="mininav-toggle text-center py-2">
                <img className="mainnav__avatar img-md rounded-circle hv-oc" src="/nifty/img/profile-photos/1.png" alt="Profile Picture"/>
              </div>

              <div className="mininav collapse d-mn-max">
                {/* <!-- User name and position --> */}
                <button className="mainnav-widget-toggle d-block btn border-0 p-2" data-bs-toggle="collapse" data-bs-target="#usernav" aria-expanded="false" aria-controls="usernav">
                    <span className="d-flex justify-content-center align-items-center">
                      <h5 className="mb-0 p-2" style={{ backgroundColor: 'white' }}>hihihih</h5>
                    </span>
                </button>
              </div>
            </div>
            {/* <!-- End - Profile widget --> */}

            <ul className="mainnav__menu nav flex-column">
              {/* <!-- Agent User Menus --> */}
              <li className="nav-item has-sub">
                <a href="/agent_user_menus" className="mininav nav-link">
                  <i className="psi-professor fs-5 me-2"></i>
                  <span className="nav-label ms-1">Agent User Menus</span>
                </a>
              </li>

              {/* <!-- Marketing --> */}
              <li className="nav-item has-sub">
                <a href="/marketings" className="mininav nav-link">
                  <i className="demo-psi-paperclip fs-5 me-2"></i>
                  <span className="nav-label ms-1">Marketing</span>
                </a>
              </li>

              {/* <!-- TS --> */}
              <li className="nav-item has-sub">
                <a href="/transfer_slips" className="mininav nav-link">
                  <i className="psi-paper-plane fs-5 me-2"></i>
                  <span className="nav-label ms-1">Transfer Slip</span>
                </a>
              </li>

              {/* <!-- Request Slip --> */}
              <li className="nav-item has-sub">
                <a href="/sample_slip_requests" className="mininav nav-link">
                  <i className="demo-psi-folder fs-5 me-2"></i>
                  <span className="nav-label ms-1">Request Slip</span>
                </a>
              </li>

              {/* <!-- Issue Slip --> */}
              <li className="nav-item has-sub">
                <a href="/sample_slip_issuances" className="mininav nav-link">
                  <i className="demo-psi-file fs-5 me-2"></i>
                  <span className="nav-label ms-1">Issue Slip</span>
                </a>
              </li>

              {/* <!-- Inventory Entry --> */}
              <li className="nav-item has-sub">
                <a href="/inventories/new" className="mininav nav-link">
                  <i className="psi-id-card fs-5 me-2"></i>
                  <span className="nav-label ms-1">Inventory Entry</span>
                </a>
              </li>

              {/* <!-- Inventory Listings --> */}
              <li className="nav-item has-sub">
                <a href="/inventories" className="mininav nav-link">
                  <i className="demo-psi-folder-with-document fs-5 me-2"></i>
                  <span className="nav-label ms-1">Inventory Listing</span>
                </a>
              </li>

              {/* <!-- Item Master --> */}
              <li className="nav-item has-sub">
                <a href="/item_masters" className="mininav nav-link">
                  <i className="psi-folder-organizing fs-5 me-2"></i>
                  <span className="nav-label ms-1">Item Master</span>
                </a>
              </li>

              {/* <!-- Packing List --> */}
              <li className="nav-item has-sub">
                <a href="/packing_lists" className="mininav nav-link">
                  <i className="psi-numbering-list fs-5 me-2"></i>
                  <span className="nav-label ms-1">Packing List</span>
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- End - Navigation Category --> */}

          {/* <!-- Bottom navigation menu --> */}
          <div className="mainnav__bottom-content border-top pb-2">
            <ul id="mainnav" className="mainnav__menu nav flex-column">
              <li className="nav-item has-sub">
                <a href="https://portal.cathaydrug.com/logout" className="test nav-link mininav-toggle collapsed" aria-expanded="false">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      </header>
        </React.Fragment>
    )
}