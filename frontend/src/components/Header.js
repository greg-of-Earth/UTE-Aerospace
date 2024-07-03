import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import headerStyles from "./Header.module.css";
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
    <header className={headerStyles.header} >
      <nav className={headerStyles.nav}>
            <Link to="/" className={headerStyles['nav-logo']} id={headerStyles['home-page']} onClick= {closeDropdowns}>
            <img src={logo} alt="Home" style={{ maxWidth: "20%"}}/>UTE Aerospace
            </Link>
            <div className={headerStyles.menu} onClick={() => {
                setMenuOpen(!menuOpen);
            }}>
                <span></span>
                <span></span>
                <span></span>

            </div>
            <ul className={menuOpen ? headerStyles.open : headerStyles.unordered} id={headerStyles['closed']}>
                <li className={headerStyles['nav-item']}>
                    <NavLink to="/" className={headerStyles['nav-list']} style={{color: 'black', width: '100%'}} onClick= {closeDropdowns}>
                        <p>Home</p>
                    </NavLink>
                </li>
                <li className={headerStyles['nav-item']}
                onClick={() => toggleDropdown('who')} > 
                    <p className={headerStyles['nav-link']} id={headerStyles['who']}>
                        Who We Are    
                    </p>
                    {dropdowns.who && (
                        <ul className={headerStyles['dropdown-menu']} onMouseLeave= {closeDropdowns}>
                            <li id="leader">
                                <NavLink to="/leadership" className={headerStyles['dropdown-link']}>
                                    Leadership
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/team" className={headerStyles['dropdown-link']}>
                                    Team Members
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/investors" className={headerStyles['dropdown-link']}>
                                    Investor Relations
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={headerStyles['dropdown-link']} >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    )}
                
                </li>
                <li className={headerStyles['nav-item']} onClick = {() => toggleDropdown('what')} >
                    <p className={headerStyles['nav-link']} id="what">
                        What We Do
                    </p>
                    {dropdowns.what && (
                        <ul className={headerStyles['dropdown-menu']} onMouseLeave={closeDropdowns}>
                            <li>
                                <NavLink to="/model1" className={headerStyles['dropdown-link']}>
                                    Model 1
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/baseStations" className={headerStyles['dropdown-link']}>
                                    Base Stations
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/payloads" className={headerStyles['dropdown-link']}>
                                    Payloads
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </li>
                <li className={headerStyles['nav-item']}>
                    <NavLink to="/careers" className={headerStyles['nav-list']} style={{color: 'black'}} onClick= {closeDropdowns}>
                        <p>Careers</p>
                    </NavLink>
                </li>
                <li className={headerStyles['nav-item']}>
                    <NavLink to="/news" className={headerStyles['nav-list']} style={{color: 'black', width: '100%'}} onClick= {closeDropdowns}>
                        <p>News</p>
                    </NavLink>
                </li>
          </ul>

      </nav>
 
    </header>
  );
};

export default Header;