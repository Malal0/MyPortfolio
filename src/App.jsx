import { useState } from 'react'
import Logo from './assets/images/JEM-Logo.svg'
import GithubIcon from './assets/images/githubicon.svg'
import WeblinkIcon from './assets/images/weblinkicon.svg'
import LinkedinIcon from './assets/images/linkedinlogo.svg'
import ToTopIcon from './assets/images/toppagebtn.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
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
          <img src={Logo} alt="Picture of Dev" />
          <h1>Josué E. Martinez</h1>
          <p>web dev</p>
        </div>
      </div>
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
      <div className='Skills-Section'>
        <img src={Logo} className="logo" alt="Logo" />
        <img src={Logo} className="logo" alt="Logo" />
        <img src={Logo} className="logo" alt="Logo" />
        <img src={Logo} className="logo" alt="Logo" />
        <img src={Logo} className="logo" alt="Logo" />
        <img src={Logo} className="logo" alt="Logo" />
        <img src={Logo} className="logo" alt="Logo" />
      </div>
      <div className='AboutMe-Section'>
        <div>
          <h3>who is Josué E. Martinez?</h3>
          <p>I am a first generation U.S. Citizen, the son of two immigrants. I am a part of the Otomi tribe. When I’m not learning something new, you can usually find me helping my family fix something in my their house, anything from the T.V. source to a brand new tile floor.</p>
        </div>
        <div>
          <h3>my hobbies</h3>
          <ul>
            <li>watching how to videos</li>
            <li>going to the gym</li>
            <li>working on my car</li>
            <li>listening to loud music</li>
            <li>watching movies in my homemade cinema</li>
            <li>drawing, animation, and 3d sculpting</li>
          </ul>
        </div>
        <div>
          <h3>why I chose this career</h3>
          <p>In 2019 I went to school for Pipefitting in Oklahoma. I became NCCER Lvl 3 Certified within 5 months. I was on my way to starting a high paying new career. My teacher even took me with him on my first Pipefitter job in the begining of 2020. It was a great experience that paid me very well for a two week job. Before I could look for my next pipefitting job the whole world SHUTDOWN. All of the sudden no one was hiring and in fact many places were firing people or closing down forever.
            I was jobless and living off of my last paycheck for a couple of months, until I had to move back in with my parents. I began working at a steel manufacturing company where I drove many different size forklifts moving many different size pieces of metal. I moved them everyday from A to B. I moved them in sweltering hot heat, bone chilling cold, and even in relentless rain storms. Needless to say the endless cycle of moving things from A to B was mind numbing. I felt like I needed a challenging career.
            Code had always interested me,  and at the time it was a challenge for me. I didn’t even know how to right a simple for loop. So I decided I was going to learn how to code. I’ve gained so much knowledge since then. I’ve made a couple of projects and I have so many more to make. My journey will coninue</p>
        </div>
      </div>
      <div className='MyArtwork-Section'>
        <h3>my artwork</h3>
        <div>
          <h4>2d art</h4>
        </div>
        <div>
          <h4>figma designs</h4>
        </div>
        <div>
          <h4>3d art</h4>
        </div>
      </div>
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
      <div className='BackToTop'>
        <a href='#'><img src={ToTopIcon} className="logo" alt="Top of page" /></a>
      </div>
    </>
  )
}

export default App
