import React, { useState, useEffect} from "react";
import Avatar from "../../../public/assets/nifty/img/profile-photos/1.png"


export default Nav = () => {
    return (
      <nav id="mainnav-container" className="mainnav bg-primary">
        <div className="mainnav__inner">
          <div className="mainnav__top-content scrollable-content pb-5">
            {/* Profile Widget */}
            <div id="_dm-mainnavProfile" className="mainnav__widget my-3 hv-outline-parent">
              <div className="mininav-toggle text-center py-2">
                <img
                  className="mainnav__avatar img-md rounded-circle hv-oc"
                  src={Avatar}
                  alt="Profile"
                />
              </div>
              <div className="mininav collapse d-mn-max">
                <button
                  className="mainnav-widget-toggle d-block btn border-0 p-2"
                  data-bs-toggle="collapse"
                  data-bs-target="#usernav"
                  aria-expanded="false"
                  aria-controls="usernav"
                >
                  <span className="d-flex justify-content-center align-items-center">
                    <h5 className="mb-0 p-2" style={{ color: '#ffffff' }}>MICHAEL ANGELO MEDINA</h5>
                  </span>
                </button>
              </div>
            </div>
            {/* {/ Navigation Menu /} */}
            <ul className="mainnav__menu nav flex-column">
              <li className="nav-item has-sub">
                <a href="/#/agent_user_menus" className="mininav nav-link">
                  <i className="psi-professor fs-5 me-2"></i>
                  <span className="nav-label ms-1">User Menus</span>
                </a>
              </li>
              <li className="nav-item has-sub">
                <a href="/#/marketings" className="mininav nav-link">
                  <i className="psi-paperclip fs-5 me-2"></i>
                  <span className="nav-label ms-1">Marketing</span>
                </a>
              </li>
              <li className="nav-item has-sub">
                <a href="/#/transfer_slips" className="mininav nav-link">
                  <i className="psi-paper-plane fs-5 me-2"></i>
                  <span className="nav-label ms-1">Transfer Slip</span>
                </a>
              </li>
              <li className="nav-item has-sub">
                <a href="/#/request_slips" className="mininav nav-link">
                  <i className="psi-folder fs-5 me-2"></i>
                  <span className="nav-label ms-1">Request Slip</span>
                </a>
              </li>
              <li className="nav-item has-sub">
                <a href="/#/sample_slip_issuances" className="mininav nav-link">
                  <i className="psi-file fs-5 me-2"></i>
                  <span className="nav-label ms-1">Issue Slip</span>
                </a>
              </li>
              <li className="nav-item has-sub">
                <a href="/#/inventories/new" className="mininav nav-link">
                  <i className="psi-id-card fs-5 me-2"></i>
                  <span className="nav-label ms-1">Inventory Entry</span>
                </a>
              </li>
              <li className="nav-item has-sub">
                <a href="/#/inventories" className="mininav nav-link">
                  <i className="psi-folder-with-document fs-5 me-2"></i>
                  <span className="nav-label ms-1">Inventory Listing</span>
                </a>
              </li>
              <li className="nav-item has-sub">
                <a href="/#/item_masters" className="mininav nav-link">
                  <i className="psi-folder-organizing fs-5 me-2"></i>
                  <span className="nav-label ms-1">Item Master</span>
                </a>
              </li>
              <li className="nav-item has-sub">
                <a href="/#/packing_lists" className="mininav nav-link">
                  <i className="psi-numbering-list fs-5 me-2"></i>
                  <span className="nav-label ms-1">Packing List</span>
                </a>
              </li>
            </ul>
          </div>
          {/* {/ Bottom navigation menu */} 
          <div className="mainnav__bottom-content border-top pb-2">
            <ul id="mainnav" className="mainnav__menu nav flex-column">
              <li className="nav-item has-sub">
                
                <a
                  href="https://portal.cathaydrug.com/logout"
                  className="test nav-link mininav-toggle collapsed"
                  aria-expanded="false"
                >
                <i className="pli-unlock fs-5 me-2"></i>
                <span className="nav-label ms-1">Logout</span>
                  
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };