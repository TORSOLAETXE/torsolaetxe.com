import React from 'react';
import '../index.css';


const Contact = () => {
    return (
        <section id='contact'>
            <h2 className='section--title'>CONTACT ME</h2>
            <div className="contact-form">
            <form  className="kwes-form" action="https://kwesforms.com/api/foreign/forms/DxwUmuq6JkzTUzjgYFYC" method="post" id="contact-form">
            <div className='form-section'>
            <div className="form-name" for="name">Name<span className="required"></span></div>
            <div><input type="text" name="name" className="field" placeholder="Name" rules="required|max:255"/></div>
            </div>
            <div className='form-section'>
            <div className="form-name" for="email">Email<span className="required"></span></div>
            <div><input type="text" name="email" className="field" placeholder="E-mail" rules="required|email|max:255"/></div>
            </div>
            <div className='form-section'>
            <div className="form-name" for="subject">Subject<span className="required"></span></div>
            <div><input type="text" name="subject" className="field" placeholder="Subject" rules="required|max:255"/></div>
            </div>
            <div className='form-section'>
            <div className="form-name" for="message">Message<span className="required"></span></div>
            <div className="grow-wrap" ><textarea name="message" className="message-field" id="message" rows="12" cols="100" placeholder="Message" onInput="this.parentNode.dataset.replicatedValue = this.value"></textarea></div>
            </div>
          <div className="submit-button-position"><input className="submit-button" type="submit" value="Send"/></div>
        </form>
      </div>
        </section>
    )
}

export default Contact