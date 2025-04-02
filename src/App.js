import React, { useState, useEffect } from 'react';
import Header from './components/layouts/Header';
import Nav from './components/layouts/Nav';
import Footer from './components/layouts/Footer';
import { Route, Routes, Link } from 'react-router-dom';

// Import of routes per page
import UserMenusIndex from "./components/user_menus/Index"
import UserMenusNew from "./components/user_menus/New"

import TransferSlipIndex from "./components/transfer_slips/Index"
import TransferSlipShow from "./components/transfer_slips/Show"
import TransferSlipEdit from "./components/transfer_slips/Edit"

import RequestSlipIndex from "./components/request_slips/Index"
import RequestSlipShow from "./components/request_slips/Show"
import RequestSlipEdit from "./components/request_slips/Edit"

export default function App() {
  // true means maximized ("mn--max"), false means minimized ("mn--min")
  const [isMaximized, setIsMaximized] = useState(true);

  const toggleNav = () => {
    setIsMaximized(prev => !prev);
  };

  // Update the class on the root container defined in index.html
  useEffect(() => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.classList.remove('mn--max', 'mn--min');
      rootElement.classList.add(isMaximized ? 'mn--max' : 'mn--min');
    }
  }, [isMaximized]);

  return (
    <>
      
      <Header toggleNav={toggleNav}>
        
      </Header>
      
      <Routes>
        {/* Agent User Menus*/}
        <Route path="/agent_user_menus" element={<UserMenusIndex/>}/>
        <Route path="/agent_user_menus/new" element={<UserMenusNew/>}/>
        <Route path="/agent_user_menus/edit" element={<UserMenusNew/>}/>

        {/* Transfer Slip */}
        <Route path="/transfer_slips" element={<TransferSlipIndex/>}/>
        <Route path="/transfer_slips/show" element={<TransferSlipShow/>}/>
        <Route path="/transfer_slips/edit" element={<TransferSlipEdit/>}/>

        {/* Request Slip */}
        <Route path='/request_slips' element={<RequestSlipIndex/>}/>
        <Route path='/request_slips/show' element={<RequestSlipShow/>}/>
        <Route path='/request_slips/edit' element={<RequestSlipEdit/>}/>

      </Routes>
      
      <Nav>
      
      </Nav>
      {/* <Footer /> */}
      

      
      
      
    </>
  );
}