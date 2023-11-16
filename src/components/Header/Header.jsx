import React from 'react';
import './Header.css';
import HeaderLogo from '../../assets/cover.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-logo'>
                <img src={HeaderLogo} alt="" />
            </div>
            <div className='header-menu-main'>
                <div className='header-menu'>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Player</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">About</a></li>
                    </ul>
                </div>
            </div>
            <div className='cart'>
                <h1>this is cart</h1>
            </div>
        </div>
    );
};

export default Header;