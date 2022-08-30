import { useState } from 'react'
import Logo from './assets/images/JEM-Logo.svg'
import ProPic from './assets/images/ProfilePic.png'
import GithubIcon from './assets/images/githubicon.svg'
import WeblinkIcon from './assets/images/weblinkicon.svg'
import LinkedinIcon from './assets/images/linkedinlogo.svg'
import ToTopIcon from './assets/images/toppagebtn.svg'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import AboutMe from './components/AboutMe'
import MyArtwork from './components/MyArtwork'
import Contact from './components/Contact'
import TopOfPageBtn from './components/TopOfPageBtn'
import Cursor from './components/Cursor'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Hero />
      <Projects />
      <Skills />
      <AboutMe />
      <MyArtwork />
      <Contact />
      <TopOfPageBtn />
      <Cursor />
    </div>
  )
}

export default App
