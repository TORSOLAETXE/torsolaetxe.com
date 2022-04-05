import React from 'react';
import '../index.css';
import ContactBtn from './ContactBtn';


const Astrology = () => {
    return (
        <section id='astrology'>
            <h2 className='section--title'>ASTROLOGY</h2>
            <div className='section--text'>
            The natal chart is one of my favorite tools, it is like a treasure map that your soul leaves you at the moment you are born and decide to incarnate in this human experience.
            <br/>
            <br/>
            I like to see Astrology it as a train station.  Planetary alignments are like trains and you are the one who consciously or unconsciously decides to take those trains or not to lead you to your destiny.
            </div>
            <div className='section--price-pack'>
            <h3>Services</h3>
            <strong>ASTROLOGICAL CONSULTATION</strong> 1(h), includes:
            <br/>
            - Natal Chart Reading
            <br/>
            - Solar/Lunar Returns
            <br/>
            - Transits and Progressions
            <br/>
            Price: £80 
            <br/>
            <br/>
            <strong>BASIC ASTROLOGY CLASSES</strong>:
            <br/>
            AC, Sun and Moon in the natal chart
            <br/>
            Price: £150
            <br/>
            <br/>
            <strong>SATURNAL ASTROLOGY</strong>:
            <br/>
            Personalized manual of what your Natal Saturn asks of you, with each planet and each house with included calendar:
            <br/>
            Price: £600</div>
            <ContactBtn />
        </section>
    )
}

export default Astrology