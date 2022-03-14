import React from 'react'
import '../style/sectionone.css'
import {FaHtml5, FaCss3, FaPython, FaReact} from 'react-icons/fa';
import {DiDjango, DiJavascript1} from 'react-icons/di';
import { saveAs } from "file-saver";

const SectionOne = () => {
    const saver = () =>{
        saveAs("https://res.cloudinary.com/dhfao0jm7/image/upload/v1630792296/nelly_vtq8l4.pdf", "nelly.pdf")
    }
    return (
        <div className='section_one'>
            <h1 className='home_h1'>About Myself</h1>
            <p className='home_p'>
                I'm a Javscript and python Developer based in Lagos state. I love learning 
                and implementing new technologies.
            </p>
            <h2 className="h2">Skills</h2><hr/>
            <div className="skills">
                <div>
                    <FaHtml5 className="skill-icons"/> <br/> HTML5
                </div>
                <div>
                    <FaCss3 className="skill-icons"/><br/> CSS3
                </div>
                <div>
                    <DiJavascript1 className="skill-icons"/><br/> Javascript
                </div>
                <div>
                    <FaReact className="skill-icons"/><br/> React
                </div>
                <div>
                    <FaPython className="skill-icons"/><br/> Python
                </div>
                <div>
                    <DiDjango className="skill-icons"/><br/> Django
                </div>
                
            </div>
            <button onClick={saver} className="resume">Download Resume</button>
        </div>
    )
}

export default SectionOne
