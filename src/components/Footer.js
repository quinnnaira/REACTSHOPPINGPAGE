import React from 'react'
import '../style/footer.css';
import {FaGithub,FaTwitter,FaInstagram} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <div>Follow me on socials</div>
            <div><a className='github' href="http://github.com/nelliejellie" target='_blank'><FaGithub/></a></div>
            <div><a className='twitter' href="http://twitter.com/makatete" target='_blank'><FaTwitter/></a></div>
            <div><a className='instagram' href="http://instagram.com/ehmekah" target='_blank'><FaInstagram/></a></div>
        </footer>
    )
}

export default Footer
