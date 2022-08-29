import React from 'react'
import Logo from '../assets/images/JEM-Logo.svg'
import ProPic from '../assets/images/ProfilePic.png'
import GithubIcon from '../assets/images/githubicon.svg'
import WeblinkIcon from '../assets/images/weblinkicon.svg'
import LinkedinIcon from '../assets/images/linkedinlogo.svg'
import './contact.css'

function Contact() {
    return (
        <div className='Contact-Section'>
            <h3>contact me</h3>
            <form>
                <div className='flex-r'>
                    <div className='flex-c'>
                        <label>full name</label>
                        <input type='text'></input>
                    </div>
                    <div className='flex-c'>
                        <label>email</label>
                        <input type='text'></input>
                    </div>
                </div>
                <div className='flex-c'>
                    <label>message</label>
                    <input type='text' className='message'></input>
                </div>
            </form>
            <div>
                <div>
                    <a href='#'><img src={GithubIcon} className="logo" alt="Github link" /></a>
                    <a href='#'><img src={LinkedinIcon} className="logo" alt="LinkedIn link" /></a>
                </div>
                <div>
                    <button>send</button>
                </div>
            </div>
        </div>
    )
}

export default Contact