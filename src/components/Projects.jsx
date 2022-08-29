import React from 'react'
import Logo from '../assets/images/JEM-Logo.svg'
import GithubIcon from '../assets/images/githubicon.svg'
import WeblinkIcon from '../assets/images/weblinkicon.svg'
import LoteriaPreview from '../assets/images/dele.png'
import FauxgymPreview from '../assets/images/FauxGymDesktopView.png'
import PasswordgeneratorPreview from '../assets/images/pw image.png'
import './projects.css'

function Projects() {
    return (
        <div className='Projects-Section'>
            <h3>projects</h3>
            <div className='project'>
                <div className='project-cta'>
                    <h2>loteria<br></br>online</h2>
                    <div className='cta-links'>
                        <a href='https://github.com/Malal0/Loteria' target='_blank'><img src={GithubIcon} className="logo-link" alt="Github link" /></a>
                        <a href='https://loteria-card-generator.netlify.app/' target='_blank'><img src={WeblinkIcon} className="logo-link" alt="Website link" /></a>
                    </div>
                </div>
                <img src={LoteriaPreview} className="preview" alt="loteria online preview" />
            </div>
            <div className='project'>
                <div className='project-cta'>
                    <h2>faux<br></br>gym</h2>
                    <div className='cta-links'>
                        <a href='https://github.com/Malal0/Faux-Gym' target='_blank'><img src={GithubIcon} className="logo-link" alt="Github link" /></a>
                        <a href='https://faux-gym.netlify.app/' target='_blank'><img src={WeblinkIcon} className="logo-link" alt="Website link" /></a>
                    </div>
                </div>
                <img src={FauxgymPreview} className="preview" alt="faux gym preview" />
            </div>
            <div className='project'>
                <div className='project-cta'>
                    <h2>the best<br></br>password<br></br>generator</h2>
                    <div className='cta-links'>
                        <a href='https://github.com/Malal0/PasswordGenerator' target='_blank'><img src={GithubIcon} className="logo-link" alt="Github link" /></a>
                        <a href='https://bestpasswordgenerator.netlify.app/' target='_blank'><img src={WeblinkIcon} className="logo-link" alt="Website link" /></a>
                    </div>
                </div>
                <img src={PasswordgeneratorPreview} className="preview" alt="the best password generator preview" />
            </div>
        </div>
    )
}

export default Projects