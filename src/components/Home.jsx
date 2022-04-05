import React from 'react';
import '../index.css';

import image1 from '../media/image-01.jpg'
import image2 from '../media/image-02.jpg'
import image3 from '../media/image-03.jpg'


const Home = () => {
    return (
        <main id="main" className='main'>
                <div className='main--item'><a href='#astrology'>
                    <img src={image1} alt="" className='main--image-category'></img>
                    <h2 className='main--categories'>ASTROLOGY</h2></a>
                </div>
                <div className='main--item'><a href='#saama'>
                    <img src={image2} alt="" className='main--image-category'></img>
                    <h2 className='main--categories'>SAAMA</h2></a>
                </div>
                <div className='main--item'><a href='#accompaniment'>
                    <img src={image3} alt="" className='main--image-category'></img>
                    <h2 className='main--categories'>ACCOMPANIMENT</h2></a>
                </div>
        </main>
    )
}

export default Home