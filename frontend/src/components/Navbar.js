import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import navbarStyles from "./styles/Navbar.module.css";
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
    <header className={navbarStyles.header} >
      <nav className={navbarStyles.nav}>
            <Link to="/" className={navbarStyles['nav-logo']} id={navbarStyles['home-page']} onClick= {closeDropdowns}>
            <img src={logo} alt="Home" style={{ maxWidth: "20%"}}/>UTE Aerospace
            </Link>
            <div className={navbarStyles.menu} onClick={() => {
                setMenuOpen(!menuOpen);
            }}>
                <span></span>
                <span></span>
                <span></span>

            </div>
            <ul className={menuOpen ? navbarStyles.open : navbarStyles.unordered} id={navbarStyles['closed']}>
                <li className={navbarStyles['nav-item']}>
                    <NavLink to="/" className={navbarStyles['nav-list']} style={{color: 'black', width: '100%'}} onClick= {closeDropdowns}>
                        <p>Home</p>
                    </NavLink>
                </li>
                <li className={navbarStyles['nav-item']}
                onClick={() => toggleDropdown('who')} > 
                    <p className={navbarStyles['nav-link']} id={navbarStyles['who']}>
                        Who We Are    
                    </p>
                    {dropdowns.who && (
                        <ul className={navbarStyles['dropdown-menu']} onMouseLeave= {closeDropdowns}>
                            <li id="leader">
                                <NavLink to="/leadership" className={navbarStyles['dropdown-link']}>
                                    Leadership
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink to="/team" className={navbarStyles['dropdown-link']}>
                                    Team Members
                                </NavLink>
                            </li> */}
                            <li>
                                <NavLink to="/investors" className={navbarStyles['dropdown-link']}>
                                    Investor Relations
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={navbarStyles['dropdown-link']} >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    )}
                
                </li>
                <li className={navbarStyles['nav-item']} onClick = {() => toggleDropdown('what')} >
                    <p className={navbarStyles['nav-link']} id="what">
                        Products
                    </p>
                    {dropdowns.what && (
                        <ul className={navbarStyles['dropdown-menu']} onMouseLeave={closeDropdowns}>
                            <li>
                                <NavLink to="/model1" className={navbarStyles['dropdown-link']}>
                                    Model 1
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/baseStations" className={navbarStyles['dropdown-link']}>
                                    Mobile Stations
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink to="/payloads" className={navbarStyles['dropdown-link']}>
                                    Payloads
                                </NavLink>
                            </li> */}
                        </ul>
                    )}
                </li>
                <li className={navbarStyles['nav-item']}>
                    <NavLink to="/careers" className={navbarStyles['nav-list']} style={{color: 'black'}} onClick= {closeDropdowns}>
                        <p>Careers</p>
                    </NavLink>
                </li>
                {/* <li className={navbarStyles['nav-item']}>
                    <NavLink to="/news" className={navbarStyles['nav-list']} style={{color: 'black', width: '100%'}} onClick= {closeDropdowns}>
                        <p>News</p>
                    </NavLink>
                </li> */}
          </ul>

      </nav>
 
    </header>
  );
};

export default Header;