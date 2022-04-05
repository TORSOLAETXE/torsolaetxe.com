import React from 'react';
import '../index.css';
import headerImage from '../media/header-image.jpg';
import openSide from './OpenSide';

const Header = () => {
    return (
        <>
        <header id="header">
            <div className='header'>
                <div className='header--title'>
                    <h1>TOR SOLAETXE</h1>
                </div>
                <div className='header--subtitle'>
                    <h2>-----------------          Astrology          -----------------</h2>
                </div> 
            </div>
            <div id='side--menu-button'>
                <button className='side--menu-button' onClick={openSide}>&#9776;</button>
            </div>
        </header>
        <img src={headerImage} alt='' className='header--image'></img>
        </>
    )
}

export default Header