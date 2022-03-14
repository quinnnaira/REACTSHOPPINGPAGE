import React from 'react'
import '../style/contact.css'

const Contact = () => {
    return (
        <section className="section_one">
            <form action='https://formspree.io/f/xzbyyagp' method='POST'>
                <input type='text' placeholder='Your fullname' name='fullname'/>
                <input type='number' placeholder='Phone number' name='Phone Number'/>
                <input type='email' placeholder='email' name='Email'/>
                <textarea placeholder='message' name='message'></textarea>
                <input type='submit' value='submit'/>
            </form>
        </section>
    )
}

export default Contact
