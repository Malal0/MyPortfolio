import React from 'react'
import Logo from '../assets/images/JEM-Logo.svg'
import ProPic from '../assets/images/ProfilePic.png'
import GithubIcon from '../assets/images/githubicon.svg'
import WeblinkIcon from '../assets/images/weblinkicon.svg'

function Projects() {
    return (
        <div className='Projects-Section'>
            <h3>projects</h3>
            <div className='project'>
                <h2>loteria online</h2>
                <a href='#'><img src={GithubIcon} className="logo" alt="Github link" /></a>
                <a href='#'><img src={WeblinkIcon} className="logo" alt="Website link" /></a>
                <img src={Logo} className="logo" alt="loteria online preview" />
            </div>
            <div className='project'>
                <h2>faux gym</h2>
                <a href='#'><img src={GithubIcon} className="logo" alt="Github link" /></a>
                <a href='#'><img src={WeblinkIcon} className="logo" alt="Website link" /></a>
                <img src={Logo} className="logo" alt="loteria online preview" />
            </div>
            <div className='project'>
                <h2>the best password generator</h2>
                <a href='#'><img src={GithubIcon} className="logo" alt="Github link" /></a>
                <a href='#'><img src={WeblinkIcon} className="logo" alt="Website link" /></a>
                <img src={Logo} className="logo" alt="loteria online preview" />
            </div>
        </div>
    )
}

export default Projects