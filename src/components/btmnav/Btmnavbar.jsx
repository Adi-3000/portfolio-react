import React from 'react'
import './Btmnavbar.css';
import { NavLink } from 'react-router-dom';

function Btmnavbar() {
    return (
        <header className="header" id="header">
          <div className="btnav">
            <div className="nav-item">
              <NavLink to="/" data-item="Home" className={({ isActive }) => (isActive ? " nav-item active" : "nav-item")}>
                <i className="material-icons home-icon">home</i>
              <span className="nav-text">Home</span>
              </NavLink>
            </div>
            
            <div className="nav-item">
              <NavLink  to="/about" data-item="About" className={({ isActive }) => (isActive ? " nav-item active" : "nav-item")}>
                <i className="material-icons person-icon">person</i>
              <span className="nav-text">About</span>
              </NavLink>
            </div>
            
            <div className="nav-item ">
              <NavLink  to="/projects" data-item="Projects" className={({ isActive }) => (isActive ?" nav-item active" : "nav-item")}>
                <i className="material-icons workspaces-icon">workspaces</i>
              <span className="nav-text">Projects</span>
              </NavLink>
            </div>
            
            <div className="nav-item">
              <NavLink  to="/contact" data-item="Contact" className={({ isActive }) => (isActive ?" nav-item active" : "nav-item")}>
                <i className="material-icons call-icon">call</i>
              <span className="nav-text">Contact</span>
              </NavLink>
            </div>
          </div>
        </header>
      );
    }
    


export default Btmnavbar