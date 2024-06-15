import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Header.css"
import logo from '../assets/utelogo.png';


// main header/ navbar
const Header = () => {
    const [dropdowns, setDropdowns] = useState({
        who: false,
        what: false,
    });
    
    // dropdown toggle function
    const toggleDropdown = (dropdown) => {
        setDropdowns({
            ...dropdowns,
            [dropdown]: !dropdowns[dropdown],
        });
    };

    // close dropdowns when not hovering 
    const closeDropdowns = () => {
        setDropdowns({
            who: false,
            what: false,
        });
    }



  return (
    <header className="header">
      <nav className="nav container">
         
            <NavLink to="/" className="nav-logo" id="home-page" >
            <img src={logo} alt="Home" style={{ maxWidth: "20%"}}/>UTE Aerospace
            </NavLink>
            <ul className="nav-list">
                <li className="nav-item"
                onMouseOver={() => toggleDropdown('who')} onMouseLeave= {closeDropdowns}> 
                    <span className="nav-link" id="who">
                        Who We Are  |    
                    </span>
                    {dropdowns.who && (
                        <ul className="dropdown-menu">
                            <li>
                                <NavLink to="/leadership" className="dropdown-link">
                                    Leadership
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/team" className="dropdown-link">
                                    Team Members
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/investors" className="dropdown-link">
                                    Investor Relations
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="dropdown-link">
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    )}
                
                </li>
                <li className="nav-item" onMouseEnter = {() => toggleDropdown('what')} onMouseLeave={closeDropdowns}>
                    <span className="nav-link" id="what">
                        What We Do  |   
                    </span>
                    {dropdowns.what && (
                        <ul className="dropdown-menu">
                            <li>
                                <NavLink to="/model1" className="dropdown-link">
                                    Model 1
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/baseStations" className="dropdown-link">
                                    Base Stations
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/payloads" className="dropdown-link">
                                    Payloads
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" className="nav-list">
                        Careers  |
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/news" className="nav-list">
                        News
                    </NavLink>
                </li>
          </ul>
      </nav>
      <hr style={{width: '100%', color: 'black', margin: '0px', padding:  '0px', border: 'solid'}}/>
    </header>
  );
};

export default Header;