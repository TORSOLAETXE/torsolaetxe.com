import React from 'react';
import '../index.css';
import ContactBtn from './ContactBtn';


const Accompaniment = () => {
    return (
        <section id='accompaniment'>
            <h2 className='section--title'>ACCOMPANIMENT</h2>
            <div className='section--text'>
            Thanks to my Pluto in 10 (among other things) I love to see what is not perceived with the naked eye, I love the one to one accompanying my clients during their evolutionary processes by the hand of the natal chart, planetary transits, progressions, solar revolutions and lunar revolutions complementing it with SAAMA when necessary and like that acting as a lighthouse illuminating and giving perspective on the paths that open before us and helping to understand the knots where we get stuck, undoing them and thus giving us permission to move forward.
            </div>
            <div className='section--price-pack'>
            <h3>Services</h3>
             Accompaniment and follow-up through <strong>Astrology and SAAMA pack</strong> of four personalized sessions per month:
             <br/>
             Price: £340</div>
             <ContactBtn />
        </section>
    )
}

export default Accompaniment