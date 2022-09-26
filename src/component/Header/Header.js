import React from 'react';
import logo from'../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='header-section'>
                <img src={logo}></img>
                <div>
                    <a href="">Home</a>
                    <a href="">Shop</a>
                    <a href="">Cart</a>
                    <a href="">About</a>
                </div>

            </nav>
        </div>
    );
};

export default Header;