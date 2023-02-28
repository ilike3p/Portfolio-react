import React from 'react';
import "./contact.scss"
import { useState } from 'react';



function Contact() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e)=> {
        e.preventDefault();
        setMessage(true);
    }


    return (
        <div className="contact" id="contact">
            <div className="left">
           < img src="https://www.linkedin.com/in/tray-pearce-04018a20/" alt="Contact Me" />
           </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit} >
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Name"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thank you for reaching out to me. I will be in touch soon.</span>}
                </form>
            </div>

        </div>
    );
}

export default Contact;