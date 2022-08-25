import React from 'react'
import Logo from '../assets/images/JEM-Logo.svg'
import ProPic from '../assets/images/ProfilePic.png'
import GithubIcon from '../assets/images/githubicon.svg'
import WeblinkIcon from '../assets/images/weblinkicon.svg'
import LinkedinIcon from '../assets/images/linkedinlogo.svg'

function Contact() {
    return (
        <div className='Contact-Section'>
            <form>
                <label>full name</label>
                <input type='text'></input>
                <label>email</label>
                <input type='text'></input>
                <label>message</label>
                <input type='text'></input>
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