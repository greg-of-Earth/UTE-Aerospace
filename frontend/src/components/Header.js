import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
        closeDropdowns();
        setDropdowns(prevState => ({
            ...prevState,
            [dropdown]: !prevState[dropdown],
        }));

    };

    // close dropdowns when not hovering 
    const closeDropdowns = () => {
        setDropdowns({
            who: false,
            what: false,
        });

    }


    const [menuOpen, setMenuOpen] = useState(false);


  return (
    <header className="header" >
      <nav className="nav" >
            <Link to="/" className="nav-logo" id="home-page" >
            <img src={logo} alt="Home" style={{ maxWidth: "20%"}}/>UTE Aerospace
            </Link>
            <div className="menu" onClick={() => {
                setMenuOpen(!menuOpen);
            }}>
                <span></span>
                <span></span>
                <span></span>

            </div>
            <ul className={menuOpen ? "open" : "unordered"} id="closed">
                <li className="nav-item"
                onClick={() => toggleDropdown('who')} > 
                    <p className="nav-link" id="who">
                        Who We Are    
                    </p>
                    {dropdowns.who && (
                        <ul className="dropdown-menu" onMouseLeave= {closeDropdowns}>
                            <li id="leader">
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
                                <NavLink to="/contact" className="dropdown-link" >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    )}
                
                </li>
                <li className="nav-item" onClick = {() => toggleDropdown('what')} >
                    <p className="nav-link" id="what">
                        What We Do
                    </p>
                    {dropdowns.what && (
                        <ul className="dropdown-menu" onMouseLeave={closeDropdowns}>
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
                    <NavLink to="/careers" className="nav-list" style={{color: 'black'}}>
                        <p>Careers</p>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/news" className="nav-list" style={{color: 'black', width: '100%'}}>
                        <p>News</p>
                    </NavLink>
                </li>
          </ul>

      </nav>
 
    </header>
  );
};

export default Header;