import React, { useState, useEffect } from 'react';
import Header from './components/layouts/Header';
import Nav from './components/layouts/Nav';
import Footer from './components/layouts/Footer';

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
      <Header toggleNav={toggleNav} />
      <Nav />
      <Footer />
    </>
  );
}