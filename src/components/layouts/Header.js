import React, { useState, useEffect } from 'react';
import Logo from "../../../public/assets/favicon-cathay-wh.png"

export default Header = ({ toggleNav }) => {
  // Dark mode handling (persisting preference in localStorage)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('preferredColorMode') === 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('preferredColorMode', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const handleDarkModeToggle = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__brand justify-content-center p-3">
          <div className="brand-wrap">
            <a href="/">
              <img
                src={Logo}
                className="nifty-logo pt-1"
                width="50"
                height="50"
                alt="Cathay Warehouse Logo"
              />
            </a>
          </div>
        </div>
        {/* Nav Toggler button */}
        <button 
          type="button"
          className="nav-toggler header__btn btn btn-icon btn-sm"
          aria-label="Nav Toggler"
          onClick={toggleNav}
        >
          <i className="pli-list-view icon-lg"></i>
        </button>
        <div className="form-check form-check-alt form-switch mx-md-2">
          <input
            id="headerThemeToggler"
            className="form-check-input mode-switcher"
            type="checkbox"
            role="switch"
            checked={isDarkMode}
            onChange={handleDarkModeToggle}
          />
          <label
            className="form-check-label ps-1 fw-bold d-none d-md-flex align-items-center"
            htmlFor="headerThemeToggler"
          >
            {isDarkMode ? (
              <i className="mode-switcher-icon icon-dark demo-psi-half-moon fs-5"></i>
            ) : (
              <i className="mode-switcher-icon icon-light demo-psi-sun fs-5"></i>
            )}
          </label>
        </div>
      </div>
    </header>
  );
};