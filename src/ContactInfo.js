import React from 'react'
import './contactinfo.css'
import emailjs from 'emailjs-com'

function ContactInfo() {
    console.log('hello')
    function sendEmail(e) {
        e.preventDefault()
        e.target.children[0].value = ""
        e.target.children[2].value = ""
        e.target.children[4].value = ""
        e.target.children[6].value = ""
        emailjs.sendForm('wcl_emails','template_fxtj51m',e.target,'KymWnfi1K5mYHnrDf')
            .then((res) => alert('Email has been sent'))
            .catch((err) => console.log(err))
    }

    return (
        <div id="contact-info">
            <h1>Contact Us</h1>
            <h3>Email - MATTHEW.WOLMAN@GMAIL.COM</h3>
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