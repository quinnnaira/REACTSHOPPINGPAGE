import React, {useEffect} from 'react'
import '../style/sectionall.css'
import nelly from '../images/nellyDev.JPG'
import "animate.css"
import {Link} from 'react-router-dom'


const SectionAll = () => {
    const animate = () =>{
        let my_p = document.querySelector('p')
        my_p.setAttribute('class', 'animate__animated animate__flash')
        
    }
    const animate_img = () =>{
        let my_img = document.querySelector('img')
        my_img.setAttribute('class', 'animate__animated animate__pulse')
    }
    const scroller = () =>{
        window.scrollTo(200, 700)
    }
    useEffect(() => {
        scroller()
    }, [])
    return (
        <section className='sectionall'>
            <div className='div1'>
                <h2 className='animate__animated animate__bounce'>Software Developer <br/>& Crypto Enthusiast</h2>
                <p onMouseEnter={animate} className='p_sec'>Hi, I'm Nelly...Welcome to my world.</p>
                <Link to="/contact">
                    <button onClick={scroller}>HIRE ME</button>
                </Link>
            </div>
            <div className='img' onMouseEnter={animate_img} className='div2'>
                <img src={nelly} alt='nelson' className='img1'/>
            </div>
        </section>
    )
}

export default SectionAll
