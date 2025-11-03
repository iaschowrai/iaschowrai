import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/');
  const location = useLocation(); // Get current path

  // Update activeLink state when the location changes
  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {/* Home link */}
        <li className="navbar-item">
          <Link
            to="/"
            className={`navbar-link ${activeLink === '/' ? 'active' : ''}`}
            onClick={() => setActiveLink('/')}
          >
            About
          </Link>
        </li>
        
        {/* Resume link */}
        <li className="navbar-item">
          <Link
            to="/resume"
            className={`navbar-link ${activeLink === '/resume' ? 'active' : ''}`}
            onClick={() => setActiveLink('/resume')}
          >
            Work Experinece
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;




{/* <li className="navbar-item">
        <Link to="/about" className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`}>
          About
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/resume" className={`navbar-link ${location.pathname === '/resume' ? 'active' : ''}`}>
          Resume
        </Link>
      </li> */}
        {/* <li className="navbar-item">
          <Link to="/" className="navbar-link">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/resume" className="navbar-link ">Resume</Link>
        </li> */}
