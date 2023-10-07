import React, { useState } from "react";
import './header.scss'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/doodah-logo.png';

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    // add the active class
    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };

    // clean up function to remove the active class
    const removeActive = () => {
        setIsActive(false)
    }
    return (
        <header>
            <nav>
                <div className="logo-block">
                    <img src={logo} alt="doodah logo" />
                    <div className="logo-text">
                        <h1 className="logo">Doodah</h1>
                        <p>TAGLINE</p>
                    </div>
                </div>
                <form className="search-form">
                    <input type="search" name="search" className="search-input"/>
                    <button type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
                <div className={`menu-link ${isActive ? 'active' : ''}`}>
                    <Link className="link" to='/' onClick={removeActive}>Home</Link>
                    <Link className="link" to='/about' onClick={removeActive}>About Us</Link>
                    <Link className="link" to='/products' onClick={removeActive}>Products</Link>
                    <Link className="link" to='/login' onClick={removeActive}>Sign Up/Log In</Link>
                </div>

                <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleActiveClass}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <div className="cart">
                    <FontAwesomeIcon icon={faCartShopping} color="#EB2D66" size="xs" />
                    <span className="noItems">1</span>
                    <FontAwesomeIcon icon={faCaretDown} size="xs"/>
                </div>
            </nav>
        </header>
        
    )
}

export default Header