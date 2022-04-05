import React from 'react';
import '../index.css';
import closeSide from './CloseSide';

const Sidebar = () => {
    return (
        <sidebar className='sidebar'>
            <div id='side--menu'>
            <div className="side--item-close"><button className="side--item-close" onClick={closeSide}>X</button>
            </div>
                <ul>
                    <li className="side--item"><a href='#about' className="side--item" onClick={closeSide}>ABOUT ME</a></li>
                    <li className="side--item"><a href='#astrology' className="side--item" onClick={closeSide}>ASTROLOGY</a></li>
                    <li className="side--item"><a href='#saama' className="side--item" onClick={closeSide}>SAAMA</a></li>
                    <li className="side--item"><a href='#accompaniment' className="side--item" onClick={closeSide}>ACCOMPANIMENT</a></li>
                    <li className="side--item"><a href='#contact' className="side--item" onClick={closeSide}>CONTACT</a></li>
                </ul>
            </div>
        </sidebar>
    )
}


export default Sidebar