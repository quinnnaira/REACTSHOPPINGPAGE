import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../style/navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [menubool, setMenubool] = useState(false)
    
    const checkHide = () =>{
        setMenubool(!menubool)
    }
    
    if(document.body.offsetWidth > 508){
        return (
            <nav className='nav'>
                <div className='nav-collections'>
                    <div className='logo'>NellieJellie..</div>
                    <div className='nav-item-collection'>
                        <div className='nav-home'><Link to='/' className='homy'>Home</Link></div>
                        <div className='nav-about'><Link to='/About' className='abouty'>Portfolio</Link></div>
                        <div className='nav-contact'><Link to='/Contact' className='contacty'>Contact</Link></div>
                    </div>
                    <div className='shooter'><a href='mailto:emekaewelike@gmail.com'>Shoot me an email</a></div>
                </div>
            </nav>
        )
    }else{
       return(
           <nav className='nav'>
               <div className='nav-collections'>
                    <div className='logo'>NellieJellie..</div>
                    <GiHamburgerMenu className='icon' onClick={checkHide}/>
               </div>   
               <div className={menubool ? 'hidden_menu':'hider'}>                   
                    <div ><Link to='/' className='small'>Home</Link></div>
                    <div><Link to='/About' className='small' >Portfolio</Link></div>
                    <div><Link to='/Contact' className='small' >Contact</Link></div>
               </div>            
           </nav>
       ) 
    }
    
}

export default Navbar
