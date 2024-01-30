import React from 'react';
import './Header.css';
import HeaderLogo from '../../assets/cover.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div>
            <div className='header'>
                <div className='header-logo'>
                    <img src={HeaderLogo} alt="" />
                </div>
                <div className='header-menu-main'>
                    <div className='header-menu'>
                        <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="/players">Players</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/cart">Cart</a></li>
                        </ul>
                    </div>
                </div>
                <div className='cart'>
                    <h1>this is cart</h1>
                </div>
            </div>
            <div className="header-searchBarSection">
                <div className='searchBarSec'>
                    <input type="text" placeholder="Search Player.." className='headerSearchBar'></input>
                </div>
                <div className="cartSec">
                    <FontAwesomeIcon className='headerSearchCartIcon' icon={faCartShopping} />
                </div>
            </div>
        </div>
    );
};

export default Header;