import React from 'react'
import {FaGithub} from 'react-icons/fa'
import '../style/about.css'

const About = () => {
    return (
        <section className="section_one">
            <p className='port_p'>Coming soon guys...meanwhile you can check my <a href="http://github.com/nelliejellie" target='_blank'><FaGithub/></a> to
               see what i've been up to lately.
            </p>
        </section>
    )
}

export default About
