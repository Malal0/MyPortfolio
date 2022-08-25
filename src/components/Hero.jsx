import React from 'react'
import Logo from '../assets/images/JEM-Logo.svg'
import ProPic from '../assets/images/ProfilePic.png'

function Hero() {
    return (
        <div className="Hero-Section">
            <div className='navbar'>
                <img src={Logo} className="logo" alt="Logo" />
                <nav>
                    <ul>
                        <a href='#'><li>home</li></a>
                        <a href='#'><li>projects</li></a>
                        <a href='#'><li>about</li></a>
                        <a href='#'><li>figma designs</li></a>
                        <a href='#'><li>contact</li></a>
                    </ul>
                </nav>
            </div>
            <div className='hero-main'>
                <img src={ProPic} alt="Picture of Dev" />
                <h1>Josué E. Martinez</h1>
                <p>web dev</p>
            </div>
        </div>
    )
}

export default Hero