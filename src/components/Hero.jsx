import React from 'react'
import Logo from '../assets/images/JEM-Logo.svg'
import ProPic from '../assets/images/ProfilePic.png'
import './hero.css'

function Hero({ handleMouseEnter, handleMouseLeave }) {
    const link = 'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=300'

    return (
        <div className="Hero-Section">
            <div className='navbar side-margin'>
                <div className='logo'>
                    <a href='https://www.thisworldthesedays.com/easter-egg4.html' target='_blank' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img src={Logo} className="logo" alt="Logo" /></a>
                </div>
                <nav>
                    <ul>
                        <a href='#' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><li>home</li></a>
                        <a href='#' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><li>projects</li></a>
                        <a href='#' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><li>about</li></a>
                        <a href='#' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><li>figma designs</li></a>
                        <a href='#' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><li>contact</li></a>
                    </ul>
                </nav>
            </div>
            <div className='hero-main'>
                <img src={ProPic} alt="Picture of Dev" />
                <div className='hero-txt'>
                    <h1>Josué E. Martinez</h1>
                    <p>web dev</p>
                </div>
            </div>
        </div>
    )
}

export default Hero