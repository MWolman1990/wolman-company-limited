import React from 'react'
import './contactinfo.css'
import emailjs from 'emailjs-com'

function ContactInfo() {
    function sendEmail(e) {
        e.preventDefault()
        emailjs.sendForm('wcl_emails','template_fxtj51m',e.target,'KymWnfi1K5mYHnrDf')
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    return (
        <div id="contact-info">
            <h1>Contact Us</h1>
            <h3>Email</h3>
            <form className="email-form" onSubmit={sendEmail}>
                <input type="text" name="from_name" />
                <label>Name</label>
                
                <input type="email" name="from_email" />
                <label>Your Email</label>
                
                <input type="text" name="subject" />
                <label>Subject</label>
                
                <textarea name="html_message" />
                <label>Message</label>
                <br></br>
                <input type="submit" id="send-email-button" value="Send Email" />
            </form>
            <h3>Phone</h3>
            <span>(760) 703 - 8748</span>
        </div>
    )
}

export default ContactInfo