import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    
      <nav>
        <ul className="menuItems">
          <li>
            <NavLink to="/" data-item="Home" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" data-item="About" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
          </li>
          <li>
            <NavLink to="/projects" data-item="Projects" className={({ isActive }) => (isActive ? "active" : "")}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact" data-item="Contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
          </li>
        </ul>
      </nav>
 
  );
}

export default Navbar;
